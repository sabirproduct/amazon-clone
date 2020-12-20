import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e8dc2/us-central1/api' //The API URL
});

export default axios;