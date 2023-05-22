import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, actions) => {
        console.log('wle redux');
      state.value += actions.payload;
    },
    decrement: (state, actions) => {
      state.value -= actions.payload;
    },
   
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer