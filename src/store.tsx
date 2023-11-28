import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./componenets/Shared/Counter/CounterReducer";
import BlogReducer from "./componenets/Shared/Blogs/BlogReducer";


const store = configureStore({
    reducer : {
        Counter : CounterReducer,
        Blogs : BlogReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;


export default store;