import React from 'react'
import { NewBlogs } from './NewBlogs'
import { BlogDetails } from './BlogDetails'

export const Blogs = () => {
  return (
    <div>
        <NewBlogs />
        <hr />
        <BlogDetails/>
    </div>
  )
}
