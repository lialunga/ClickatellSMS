import axios from "axios";

export default axios.create({
    baseURL: "https://angolaapi.herokuapp.com/api/v1"
})