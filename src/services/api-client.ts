import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '79aa0deb41324b27b39dda3adc6c52f7'
    }
}) 