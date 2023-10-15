import { useState } from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import { Link } from "react-router-dom";
import Preview from "../../preview/Preview";

const AddBlog = () => {
  const editorRef = useRef(null);
  const [img, setImg] = useState("");
  const [openPreview, setOpenPreview] = useState(false);
  const [error, setError] = useState();
  const [content, setContent] = useState();
  const [blog, setBlog] = useState({
    title: "",
    cover_img: "",
    content:
      "<p style='background: black; height 800px'>Hello this is post preview </p>",
    meta_tag: "",
    url: "",
  });
  const [slug, setSlug] = useState("");

  const handleSlug = (title) => {
    setBlog((p) => ({ ...p, title: title }));
    setSlug(title?.split(" ").join("-")?.toLocaleLowerCase());
  };

  blog.url = slug;
  if (content) {
    blog.content = content;
  }

  const handleAddBlog = () => {
    if (blog.title < 10) {
      return setError("Title is very short.");
    }
    // else if (

    // ){ return setError()}
    console.log(blog);
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
            onChange={(e) => setImg(e.target.files)}
          />
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
        } w-screen h-screen bg-slate-400  top-0 right-0 bg-opacity-40`}
      >
        <Preview blog={blog} />
      </div>
    </div>
  );
};

export default AddBlog;
