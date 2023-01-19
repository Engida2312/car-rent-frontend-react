import axios from "axios"

const api = axios.create({
    baseURL: 'https://carrent-api.onrender.com/'
});

// register booking 
const register = async(data)=>{
    console.log("data")
    console.log(data)
    const response = await api.post('booking/register', data)
    
    if(response.data){
        return response.data
    }
}                                   


const bookingService ={
    register,
   
}   

export default bookingService
