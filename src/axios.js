import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:5001/challenge-a1ad3/us-central1/apt" //the api url
})

export default instance;