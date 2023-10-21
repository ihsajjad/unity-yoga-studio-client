import { useState } from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import { Link } from "react-router-dom";
import Preview from "./Preview";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AddBlog = () => {
  const editorRef = useRef(null);
  const [img, setImg] = useState("");
  const [openPreview, setOpenPreview] = useState(false);
  const [error, setError] = useState();
  const [content, setContent] = useState();
  const [blog, setBlog] = useState({
    title: "",
    date: "12/5/2023",
    image:
      "https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2022/02/yoga-practice.jpg",
    description:
      "<p style='background: black; height 800px'>Hello this is post preview </p>",
    meta_tag: "",
    url: "",
  });
  const [slug, setSlug] = useState("");
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

  // image hosting URL
  const img_hosting_URL = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_Image_Upload_Token
  }`;

  const handleSlug = (title) => {
    setBlog((p) => ({ ...p, title: title }));
    setSlug(title?.split(" ").join("-")?.toLocaleLowerCase());
  };

  blog.url = slug;
  if (content) {
    blog.description = content;
  }

  const handlePhotoUpload = async (file) => {
    // Create FormData and append the image file
    const formData = new FormData();
    formData.append("image", file);

    // Upload the image to imgBB
    const imgResponse = await fetch(img_hosting_URL, {
      method: "POST",
      body: formData,
    });

    if (imgResponse.ok) {
      const imgData = await imgResponse.json();
      setImg(imgData.display_url);
    } else {
      console.error("Image upload failed.");
    }
  };

  const handleAddBlog = () => {
    if (blog.title < 10) {
      return setError("Title is very short.");
    }
    blog.image = img;

    if (!img) {
      return setError("Please select and image.");
    }
    const date = new Date();
    blog.date = date;
    console.log(new Date(date).toLocaleDateString());

    fetch("https://yoga.asdfrajkumar112.repl.co/blog/create-blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h3 className="text-2xl text-center font-bold">Add New Blog</h3>
      <div className="flex justify-between">
        <button onClick={handleAddBlog} className="custom-btn-primary text-sm">
          Publish Blog
        </button>
        <button
          onClick={() => setOpenPreview(true)}
          className="custom-btn-primary text-sm"
        >
          Preview
        </button>
      </div>
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title : </span>
          </label>
          <input
            type="text"
            onChange={(e) => handleSlug(e.target.value)}
            placeholder="Title of the blog.."
            className="input input-bordered"
          />
          {blog?.title.length > 80 && (
            <span className="text-red-500">
              The title shouldn&apos;t be longer than 80 characters.
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cover Image : </span>
          </label>
          <input
            type="file"
            name="img"
            className="border p-1"
            onChange={(e) => handlePhotoUpload(e.target.files[0])}
          />
          {error && error.includes("image") && (
            <span className="text-red-500">{error}</span>
          )}
        </div>
        <div className="form-control my-4">
          <JoditEditor
            style={{ width: "100%", height: "800px", border: "1px solid #ccc" }}
            ref={editorRef}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            className="h-[60vh]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Meta Text : </span>
          </label>
          <textarea
            cols="30"
            rows="2"
            onChange={(e) =>
              setBlog((p) => ({ ...p, meta_tag: e.target.value }))
            }
            placeholder="Summarize the blog within 150 characters..."
            className="p-2 outline-none border rounded"
          ></textarea>
          {blog?.meta_tag.length > 150 && (
            <span className="text-red-500">
              Meta tag shouldn&apos;t be longer than 150 characters.
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Slug : </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="URL of your blog..."
            value={slug}
            onChange={(e) =>
              setSlug(e.target.value?.split(" ").join("-")?.toLocaleLowerCase())
            }
            className="input input-bordered"
          />
          {blog?.url.length > 40 && (
            <span className="text-red-500">
              Slug shouldn&apos;t be longer than 40 characters.
            </span>
          )}
        </div>
      </div>

      <div
        className={` ${
          openPreview ? "fixed" : "hidden"
        } w-screen min-h-screen bg-slate-600 z-30  top-0 right-0 bg-opacity-40`}
      >
        <Preview blog={blog} setOpenPreview={setOpenPreview} />
      </div>

      {/* Existing blogs */}
      <div className="my-12">
        <h3 className="section-title">Existing Blogs</h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col gap-2 border border-[var(--secondary-color)] rounded-lg p-3"
            >
              <div className="">
                <img src={blog.image} alt="" className="w-full rounded-lg" />
              </div>

              <div className="flex-grow">
                <h3 className="text-xl">{blog.title}</h3>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Link
                  to={`/blog/${blog?.url}`}
                  className="custom-btn-secondary w-fit text-sm"
                >
                  Read More
                </Link>
                <FaEdit
                  // onClick={() => selectUpdateModeClass(Class.url)}
                  size={32}
                  className="cursor-pointer text-green-700 hover:text-[var(--secondary-color)]"
                />
                <MdDelete
                  // onClick={() => handleDeleteClass(Class.id)}
                  size={32}
                  className="cursor-pointer text-red-700 hover:text-[var(--secondary-color)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
