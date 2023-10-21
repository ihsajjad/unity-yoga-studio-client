import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const res = await fetch(
        "https://yoga.asdfrajkumar112.repl.co/blog/show-blog-info"
      );
      const data = await res.json();
      setBlogs(data);
    };

    loadBlogs();
  }, []);

  console.log(blogs);
  return (
    <div className="md:p-10 px-3 py-5">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col gap-2 border border-[var(--secondary-color)] rounded-lg p-3"
          >
            <div className="">
              <img src={blog.image} alt="" className="w-full rounded-lg" />
            </div>

            <h3 className="text-xl">{blog.title}</h3>
            <p className="flex-grow text-justify text-slate-600">
              {blog.meta_tag}
            </p>

            <Link to={blog?.url} className="custom-btn-secondary w-fit text-sm">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
