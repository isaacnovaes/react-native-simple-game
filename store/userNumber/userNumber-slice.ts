import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-duplicate-imports
import type { PayloadAction } from '@reduxjs/toolkit';

type NumberOrNull = number | null;

interface UserNumberState {
    userNumber: NumberOrNull;
    gameOverData: {
        number: NumberOrNull;
        rounds: NumberOrNull;
    };
}

const initialState: UserNumberState = {
    userNumber: null,
    gameOverData: {
        number: null,
        rounds: null,
    },
};

export const counterSlice = createSlice({
    name: 'userNumber',
    initialState,
    reducers: {
        getUserNumber(state, action: PayloadAction<NumberOrNull>) {
            state.userNumber = action.payload;
        },
        getGameOverData(
            state,
            action: PayloadAction<typeof initialState.gameOverData>
        ) {
            state.gameOverData = action.payload;
        },
    },
});

export const { getUserNumber, getGameOverData } = counterSlice.actions;
export default counterSlice.reducer;
