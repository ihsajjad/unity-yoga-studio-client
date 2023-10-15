const Preview = ({ blog }) => {
  console.log(blog);

  if (blog) {
    const container = document.getElementById("container");
    console.log(container);
    if (container) {
      container.innerHTML = blog?.content;
    }
  }
  return (
    <div>
      {blog?.content && (
        <div
          id="container"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
          className="flex items-center justify-center text-center"
        />
      )}
    </div>
  );
};

export default Preview;
