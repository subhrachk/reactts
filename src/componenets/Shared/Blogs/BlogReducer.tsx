import { createSlice } from "@reduxjs/toolkit";
import initialState, { BlogInput } from './BlogState';
import { RootState } from "../../../store";


const blogSlice = createSlice({
    name : "Blogs",
    initialState,
    reducers : {
        addBlog : (state,action) => [...state,
                    {id:5,title:action.payload.title,description:action.payload.description}
                ]
            }
});


export const {addBlog} = blogSlice.actions;

export const selectBlogs = (state : RootState) => state.Blogs;

export default blogSlice.reducer;

