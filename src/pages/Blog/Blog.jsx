import { Fragment, useEffect, useState } from "react";
import "./Blog.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import blogData from "../../../public/blogData.json";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <section className="section-container">
      <div className="main-heading-box">
        <h2 className="section-title">Latest Blog</h2>
      </div>
      <div className="blog-box-container">
        {blogs &&
          blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} className="blog-card" />
          ))}
      </div>
    </section>
  );
};

export default Blog;
