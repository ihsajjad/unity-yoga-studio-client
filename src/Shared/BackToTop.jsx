import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false); //To Show/Hide Button

  //To handle the Scroll Button
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolled > 500) {
      setIsVisible((prev) => true);
    } else {
      setIsVisible((prev) => false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="text-right float-right">
          <div
            className="fixed md:bottom-8 bottom-5 left-auto h-10 w-10 rounded-full bg-[var(--secondary-color)] flex items-center justify-center z-50 shadow-[0_0_18px_-5px_black] md:-ml-16 -ml-12"
            onClick={handleScroll}
          >
            <div>
              <AiOutlineArrowUp size={32} color="#fff" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BackToTop;
