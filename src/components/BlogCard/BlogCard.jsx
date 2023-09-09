import { Fragment, useEffect, useState } from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

const BlogCard = ({ blog }) => {
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (blog.description !== description) {
      setDescription(blog.description);
    }
    if (blog.description.length > 30) {
      setDescription(blog.description.slice(0, 30) + "...");
    }
  }, [blog]);

  return (
    <Fragment>
      <div className="blog-container">
        <img src={blog.image} alt="" />
        <div className="blog-text">
          <p className="blog-title">{blog.title}</p>
          <p className="blog-date">{blog.date}</p>
          <p className="blog-description">{description}</p>
          <Link className="read-btn">
            <BsArrowRightCircleFill /> Read More
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogCard;
