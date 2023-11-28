import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import initialState from './CounterState';
import { RootState } from '../../../store';


const counterSlice = createSlice({
    name : 'Counter',
    initialState,
    reducers : {
        increment : (state) => ({count : state.count + 1}),
        decrement : (state) => ({count : state.count - 1}),
        incrementBy : (state, action) => ({count : state.count + +action.payload}),
        reset : (state) => (initialState)
    }
})

export const {increment, decrement, incrementBy, reset} = counterSlice.actions;

export const CounterSelect = (state : RootState) => state.Counter.count;

export default counterSlice.reducer;

