const getDate = () =>{
    let months = ["Jan", "Feb", "March" , "April", "May", "June", "July","Aug","Sep","Oct","Nov","Dec"]
    let d = new Date()
    let ans = ""
    let month = months[d.getMonth()]
    let date = d.getDate()
    let year = d.getFullYear()
    ans += date + " " + month + " , " + year

    let h = d.getHours()
    let sufixx = h < 12 ? "am" : "pm"
    if( h===24 )
    {
        h = 12;
    }
    else if (h!==12)
    {
        h = h%12;
    }

    let time = h + ":" + d.getMinutes() + " " + sufixx
    return ans + " at " + time
}

export default getDate