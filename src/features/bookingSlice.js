import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import bookingService from "./bookingService"


const initialState = {
    data: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
}

export const register = createAsyncThunk(
    'booking/register', 
    async(data, thunkAPI)=>{
    try {
        // save data
        return await bookingService.register(data)
    } catch (error) {
        const message = (
            error.response && 
            error.response.data &&
            error.response.data.message) ||
            error.message || 
            error.toString();

        return thunkAPI.rejectWithValue(message)
    }
})

export  const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers:{
        reset: (state)=>{
            state.data = null
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(register.pending, (state, action)=>{
                state.isLoading = true
                state.data = null
            })
            .addCase(register.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.data = action.payload
                console.log("state.data")
                console.log(state.data)
            })
            .addCase(register.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.data = null
            })
        
    }
})

export const { reset } = bookingSlice.actions

export default bookingSlice.reducer