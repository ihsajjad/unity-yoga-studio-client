import React, { Fragment, useEffect, useState } from 'react'
import "./Blog.css";
import BlogCard from '../../Components/BlogCard/BlogCard'
import blogData from "../../../public/blogData.json";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <Fragment>
      <div className="main-heading-box">
        <h2 className='main-heading'>Blog</h2>
      </div> 
      <div className="blog-box-container">
      {blogs && blogs.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
            className="blog-card"
          />
        ))}
      </div>
    </Fragment>
  )
}

export default Blog