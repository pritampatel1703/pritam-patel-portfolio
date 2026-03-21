import "./styles/PixelPerfect.css";

const PixelPerfect = () => {
  return (
    <div className="pixel-perfect-section section-container" id="brand">
      <div className="pixel-perfect-container">

        <div className="pp-header">
          <img src="/images/logo.png" alt="Pixel Perfect Logo" className="pp-logo" />
          <h2 className="pp-title">
            Pixel <span>Perfect</span>
          </h2>
          <h3 className="pp-subtitle">Where Vision Meets Perfection</h3>
        </div>

        <div className="pp-description">
          <p>
            Pixel Perfect is my personal freelance brand focused on delivering
            high-quality web development and creative design solutions. It
            represents precision, creativity, and attention to detail in every
            project.
          </p>
        </div>

        <div className="pp-grid">
          <div className="pp-column">
            <div className="pp-box">
              <h4>What I Do</h4>
              <ul>
                <li>Design and develop modern, responsive websites</li>
                <li>Create clean and user-friendly UI/UX designs</li>
                <li>Build interactive and engaging web experiences</li>
                <li>Provide graphic design and multimedia solutions</li>
              </ul>
            </div>

            <div className="pp-box">
              <h4>Services</h4>
              <div className="pp-tags">
                <span className="pp-tag">Website Development</span>
                <span className="pp-tag">UI/UX Design</span>
                <span className="pp-tag">Graphic Design</span>
                <span className="pp-tag">Video Editing</span>
                <span className="pp-tag">Motion Graphics</span>
              </div>
            </div>
          </div>

          <div className="pp-column">
            <div className="pp-box">
              <h4>Mission</h4>
              <p>
                To deliver pixel-perfect digital products that combine visual
                excellence, performance, and user experience.
              </p>
            </div>

            <div className="pp-box">
              <h4>Vision</h4>
              <p>
                To grow Pixel Perfect into a trusted creative and development
                brand known for quality, innovation, and reliability.
              </p>
            </div>
          </div>
        </div>

        <div className="pp-footer">
          <h2 className="pp-tagline">“Every Pixel Matters.”</h2>
          <p className="pp-highlight">
            Built with precision. Designed with creativity.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PixelPerfect;
