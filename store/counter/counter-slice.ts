import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-duplicate-imports
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    counter: number;
}

const initialState: CounterState = {
    counter: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        incrementBy(state, action: PayloadAction<number>) {
            state.counter += action.payload;
        },
    },
});

export const { increment, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;
