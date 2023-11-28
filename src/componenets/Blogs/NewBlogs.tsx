import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks';
import { addBlog } from '../Shared/Blogs/BlogReducer';

export const NewBlogs = () => {

    const dispatch = useAppDispatch(); 

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
  
    const createNewBlogs =(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Herer');
        dispatch(addBlog({title,description}));
    }
    const onchange = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name  == 'title') {
            setTitle(e.target.value);
        }
        if(e.target.name  == 'description') {
            setDescription(e.target.value);
        }
    }
  return (
    <div>
        <form onSubmit={(e) => createNewBlogs(e)}>
            <input id="title" name="title" onChange={(e) => onchange(e)} />
            <input id="description" name="description" onChange={(e) => onchange(e)} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
