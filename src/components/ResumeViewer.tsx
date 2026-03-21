import { useEffect, useState } from "react";
import "./styles/ResumeViewer.css";
import { MdClose } from "react-icons/md";

export const useResumeState = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    };
    const closeHandler = () => {
      setIsOpen(false);
      document.body.style.overflow = "";
    };

    window.addEventListener("openResume", openHandler);
    window.addEventListener("closeResume", closeHandler);

    return () => {
      window.removeEventListener("openResume", openHandler);
      window.removeEventListener("closeResume", closeHandler);
    };
  }, []);

  return { isOpen, closeResume: () => window.dispatchEvent(new Event("closeResume")) };
};

const ResumeViewer = () => {
  const { isOpen, closeResume } = useResumeState();

  if (!isOpen) return null;

  return (
    <div className="resume-overlay">
      <div className="resume-navbar">
        <div className="resume-logo">PP</div>
        <button className="resume-close-btn" onClick={closeResume}>
          <MdClose /> Close
        </button>
      </div>
      <div className="resume-content-wrapper">
        <iframe src="/resume.pdf" className="resume-iframe" title="Pritam Patel Resume" />
      </div>
    </div>
  );
};

export default ResumeViewer;
