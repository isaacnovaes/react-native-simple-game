import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-duplicate-imports
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserNumberState {
    userNumber: number | null;
}

const initialState: UserNumberState = {
    userNumber: null,
};

export const counterSlice = createSlice({
    name: 'userNumber',
    initialState,
    reducers: {
        getUserNumber(state, action: PayloadAction<number>) {
            state.userNumber = action.payload;
        },
    },
});

export const { getUserNumber } = counterSlice.actions;
export default counterSlice.reducer;
