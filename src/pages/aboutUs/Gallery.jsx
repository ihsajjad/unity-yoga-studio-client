import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("gallery.json");
      const fetchedImages = await res.json();
      setImages(fetchedImages);
    };
    fetchImages();
  }, []);

  return (
    <section className="section-container">
      <h1 className="section-title">Unity Yoga Studio Gallery</h1>
      <div className="flex flex-wrap items-start justify-center gap-2">
        {images.map((image, i) => {
          return (
            <div key={i} className="w-[20rem] h-[20rem] overflow-hidden">
              <img
                className="w-full transition-all duration-500 hover:scale-110"
                src={image}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
