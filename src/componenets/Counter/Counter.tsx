import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { CounterSelect, increment, decrement, incrementBy, reset } from '../Shared/Counter/CounterReducer'

export const Counter = () => {
  const count = useAppSelector(CounterSelect);
  const dispatch = useAppDispatch();
  return (
    <div>
    <div>Counter Value : {count} </div>
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementBy(5))}>Increment 5</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
    </div>
    </div>
  )
}
