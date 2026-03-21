import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:work.pritampatel@gmail.com" data-cursor="disable">
                work.pritampatel@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 8320749691</p>
            <h4>Education</h4>
            <p>Bachelor of Engineering — SVIT, VASAD (GTU affiliated), 2028</p>
            <p>Higher Secondary School — Gujarat Public School (CBSE), May 2024</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/pritampatel1703"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/pritampatel1703/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/pixel.perfect.designer/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram (Work) <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/framesofpritammm/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram (Hobbies) <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pritam Patel</span>
            </h2>
            <h5>
              <MdCopyright />2026 Pixel Perfect. All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
