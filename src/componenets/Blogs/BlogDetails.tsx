import React from 'react'
import { BlogType } from '../Shared/Blogs/BlogState'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectBlogs } from '../Shared/Blogs/BlogReducer';

export const BlogDetails = () => {
    const dispatch = useAppDispatch();
    const Blogs: BlogType[] = useAppSelector(selectBlogs);

    return (
        <div>
            {Blogs.map(blog => {
                return <div>{blog.id} | {blog.title} | {blog.description}</div>
            })}
        </div>
    )
}
