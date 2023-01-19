import axios from "axios";

const api = axios.create({
    baseURL: 'https://carrent-api.onrender.com/'
});

// all Listings
const showAllListings = async()=>{
    const response = await api.get('/')
    if(response.data){
        console.log('dashboard')
        console.log(response.data)
    }
    return response.data
}

const dashboardService ={
    showAllListings,
}   

export default dashboardService