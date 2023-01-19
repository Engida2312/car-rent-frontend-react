import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import detailsService from "./detailsService";

const initialState = {
    isLoading: false,
    isSuccess:false,
    isError:false,
    details: [],
    message: ''
}

// all listings
export const showDetials = createAsyncThunk(
    'listing/details',
    async(modal, thunkAPI)=>{
        try {
            return await detailsService.showDetials(modal)
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


const detailsSlice = createSlice({
    name: 'listing',
    initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(showDetials.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(showDetials.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                // console.log('listing details')
                // console.log(action.payload)
                state.details = action.payload               
            })
            .addCase(showDetials.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                toast.error(state.message)
            })
           
    }
});

export default detailsSlice.reducer