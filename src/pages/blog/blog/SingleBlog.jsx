import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleBlog = () => {
  const { url } = useParams();
  const [blog, setBlog] = useState({});
  console.log(url);

  useEffect(() => {
    const loadBlog = async () => {
      const res = await fetch(
        `https://yoga.asdfrajkumar112.repl.co/blog/show-blog/${url}`
      );
      const data = await res.json();
      setBlog(data);
    };

    url && loadBlog();
  }, [url]);
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold">{blog?.title}</h1>
      <img
        src={blog?.image}
        alt="Cover Image"
        className="h-[80vh] w-full object-cover my-8"
      />
      {blog?.description && (
        <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
      )}
    </div>
  );
};

export default SingleBlog;
