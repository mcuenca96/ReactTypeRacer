import axios from "axios"

const axiosClient = axios.create({
    baseURL: "https://newsapi.org/v2/",
})

export default axiosClient
