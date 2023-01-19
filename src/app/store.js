import {configureStore} from '@reduxjs/toolkit'
import bookingSlice from '../features/bookingSlice'
import dashboardSlice from '../features/dashboard/dashboardSlice'
import detailsSlice from '../features/details/detailsSlice'

export const store = configureStore({
    reducer: {
        booking: bookingSlice,
        dashboard: dashboardSlice,
        details: detailsSlice,
    }
})