import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./componenets/Shared/Counter/CounterReducer";


const store = configureStore({
    reducer : {
        Counter : CounterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;


export default store;