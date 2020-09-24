import axios from "axios"

const axiosClient = axios.create({
    baseURL: "https://breaking-bad-quotes.herokuapp.com/v1/",
})

export default axiosClient
