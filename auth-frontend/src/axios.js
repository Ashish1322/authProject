import axios from "axios";
const instance = axios.create({
    baseURL: "https://mikhvisionauth.herokuapp.com/"
})
export default instance;