import { configureStore } from '@reduxjs/toolkit';
import userNumberSlice from './userNumber/userNumber-slice';

export const store = configureStore({
    reducer: {
        userNumber: userNumberSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
