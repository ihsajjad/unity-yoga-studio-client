import { useEffect, useState } from "react";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);
  const [users, setUsers] = useState([]);
  console.log(blog);

  useEffect(() => {
    const loadBlog = async () => {
      const res = await fetch(
        "https://yoga.asdfrajkumar112.repl.co/event/show-events"
      );
      const result = await res.json();
      setBlog(result);
    };

    loadBlog();
  }, []);

  return (
    <div>
      <h1>{blog?.title}</h1>
      <img src={blog?.cover_img} alt="Cover Image" />
      {blog?.content && (
        <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
      )}
    </div>
  );
};

export default SingleBlog;
