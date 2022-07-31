// Imports
import express from 'express'
import connetToMongo from './db.js'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcrypt'
import User from './modals/User.js'
import cors from 'cors'
import getDate from './genDate.js'


// App Setup
const app = express()
const port = process.env.PORT || 3000

// MiddleWare to accept json data and api calls from other domains
app.use(express.json())
app.use(cors())

// Databse Connection
connetToMongo()


// API Endpoints

app.get('',(req,res)=>{
    res.send('working fine')
})
// Add the User
app.post('/adduser/', 
   [ body('email','Invalid Email').isEmail(),
    body('name','Name should be greater then 3 characters').isLength({min:3}),
    body('password','Minimum length of password should be 8').isLength({min: 8}),
    body('phone','Invalid Phone Number').isMobilePhone()]
,  async (req,res)=>{
    // Handling Any Error
   
    try
    {
        // If any validation errors are there
        const errors = validationResult(req)
        if(!errors.isEmpty())
        {
            return res.status(400).json({
                success: false,
                error: ((errors.array())[0]).msg
            })
        }

        // If user with this mail exists then return error
        let person   = await User.findOne({email: req.body.email})
        if(person)
        {
            return res.status(400).json({error: "Account with this email alreday exists !", success : false })
        }

        // Generating HasPassword
        const salt = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password,salt)

        // Creating User
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password:  securePassword,
            phone: req.body.phone,
            date: getDate()

        })

        res.status(200).json( {
            user: user,
            success: true
        })



    }
    catch (err)
    {
        res.status(500).json({success: false,error:'Inernal Server error Please try again !'})
    }
})

// Login The User
app.post('/login',[
    body('email','Enter a Valid Email').isEmail(),
    body('password','Cannot be blank').exists()
], async (req,res)=>{
    
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty())
        {
            return res.status(400).json(
                { errors: ((errors.array())[0]).msg, success: false });
        }

        const {email,password} = req.body

        // Checking if the user exists or not
        let user   = await User.findOne({email: email})
        if(!user)
        {
            return res.status(400).json({err: "Account not found !", success : false })
        }

        const passwordCompare = await bcrypt.compare(password,user.password)

        if(!passwordCompare)
        {
            return res.status(400).json({err: "Please try to login with correct credentials", success : false })
        }

        else 
        {
            return res.status(200).json({
                success: true,
                user: {name: user.name, email: user.email, _id: user._id, phone: user.phone,date: user.date}
            })
        }
    }
    catch (err)
    {
        res.status(500).json({success: false,error:'Internal Server Error Please Try again'})
    }
})

app.listen(port,()=> console.log("Running on Port ",port))