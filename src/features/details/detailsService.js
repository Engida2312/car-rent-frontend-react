import axios from "axios";

const api = axios.create({
    baseURL: 'https://carrent-api.onrender.com/'
});

// all Listings
const showDetials = async(modal)=>{
    const response = await api.get(`${modal}`)
    if(response.data){
        console.log('details')
        console.log(response.data)
    }
    return response.data
}

const detailsService ={
    showDetials,
}   

export default detailsService