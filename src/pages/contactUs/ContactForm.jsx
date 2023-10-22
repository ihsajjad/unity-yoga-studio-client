import Lottie from "lottie-react";
import developerAnimation from "../../assets/developer-animation.json";
import { AiOutlineUser } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";
const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const info = { name, email, message };
    console.log(info);
  };

  return (
    <section className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="flex items-center justify-between flex-col-reverse md:flex-row bg-gradient-to-t md:bg-gradient-to-l	from-[var(--main-color)] border-2 border-[var(--main-color)] p-3 rounded-lg py-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-start md:w-5/12"
        >
          <div className="flex flex-col w-full">
            <span className="text-[var(--secondary-color)] font-bold flex items-center gap-1">
              <AiOutlineUser /> Name
            </span>
            <input
              className="border-b-2 border-[#b5b5b5] focus:border-[var(--secondary-color)] outline-none w-full py-1 bg-transparent"
              placeholder="Enter Your Name"
              name="name"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="text-[var(--secondary-color)] font-bold flex items-center gap-1">
              <MdEmail />
              E-mail
            </span>
            <input
              className="border-b-2 border-[#b5b5b5] transition-all focus:border-[var(--secondary-color)] outline-none w-full py-1 bg-transparent"
              placeholder="Enter Your Email"
              name="email"
              type="eamil"
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="text-[var(--secondary-color)] font-bold flex items-center gap-1">
              {" "}
              <BiSolidMessageDetail /> Message
            </span>
            <textarea
              className="border-[#b5b5b5] focus:border-[var(--secondary-color)] border-2 w-full outline-none p-2 rounded-lg bg-transparent"
              name="message"
              cols="30"
              rows="8"
              placeholder="Type Here..."
            ></textarea>
          </div>
          <button className="custom-btn-secondary self-center">Submit</button>
        </form>
        <div className="md:w-7/12">
          <Lottie className=" scale-90" animationData={developerAnimation} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
