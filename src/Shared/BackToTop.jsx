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
        <div
          className="fixed bottom-16 right-2 h-10 w-10 rounded-full bg-[var(--main-color)] flex items-center justify-center"
          onClick={handleScroll}
        >
          <div className=" animate-bounce">
            <AiOutlineArrowUp size={32} color="#fff" />
          </div>
        </div>
      )}
    </>
  );
};

export default BackToTop;
