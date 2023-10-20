const Preview = ({ blog, setOpenPreview }) => {
  console.log(blog);
  return (
    <div className="w-4/5 mt-20 h-[85vh] overflow-y-scroll ml-auto mr-8 rounded border-2 border-[var(--secondary-color)] bg-white">
      <div className="flex items-center justify-between px-5 py-3 border-b-2 border-[var(--main-color)]">
        <h3 className="text-xl text-center font-bold">Blog Preview</h3>
        <button
          onClick={() => setOpenPreview((p) => !p)}
          className="custom-btn-primary"
        >
          Close
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-4xl my-3 font-bold">{blog?.title}</h3>
        <img src={blog?.image} alt="" className="w-[80%] h-[70vh] mx-auto" />
        {blog?.description && (
          <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
        )}
      </div>
    </div>
  );
};

export default Preview;
