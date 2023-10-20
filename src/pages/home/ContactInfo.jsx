import { IoCallSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <section className="section-container bg-[var(--primary-bg)]">
      <h3 className="section-title">Contact Us</h3>
      <div>
        <div className="flex mt-8 flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/3 ">
            <h3 className="font-bold text-2xl text-center mb-3 text-[var(--secondary-color)]">
              Get In Touch
            </h3>
            <div className="flex flex-wrap gap-5 items-center justify-center w-full">
              <div className="contact-info-card">
                <IoCallSharp size={40} />
                <span className="text-xl font-bold">Call Us</span>
                <span className="font-bold">+91 0000000000</span>
              </div>
              <div className="contact-info-card">
                <AiOutlineMail size={40} />
                <span className="text-xl font-bold">Mail Us</span>
                <span className="font-bold">user@example.com</span>
              </div>
              <div className="contact-info-card">
                <FaLocationDot size={40} />
                <span className="text-xl font-bold">Adderess</span>
                <span className="font-bold">South-Ex, New Delhi</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8988531242!2d77.04382888957063!3d28.527553994268924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1694258128140!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
