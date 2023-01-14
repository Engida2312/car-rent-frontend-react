import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import swal from 'sweetalert';

const initialState = {
    data: localStorage.getItem('data'),
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
        return localStorage.setItem('data', JSON.stringify(data))
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