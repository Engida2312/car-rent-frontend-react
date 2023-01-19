import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import dashboardService from "./dashboardService";

const initialState = {
    isLoading: false,
    isSuccess:false,
    isError:false,
    allListings: [],
    message: ''
}

// all listings
export const showAllListings = createAsyncThunk(
    'dashboard/listings',
    async(_, thunkAPI)=>{
        try {
            return await dashboardService.showAllListings()
        } catch (error) {
            const message = (error.response && 
                error.response.data &&
                error.response.data.message) || 
                error.message || 
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(showAllListings.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(showAllListings.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                console.log('listings')
                console.log(action.payload)
                state.allListings = action.payload                
            })
            .addCase(showAllListings.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                toast.error(state.message)
            })
           
    }
});

export default dashboardSlice.reducer