import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Freelancer</h5>
              </div>
              <h3>1.5 YRS</h3>
            </div>
            <p>
              Freelancing as a Web Developer since 1.5 years. Led a team as a
              Leader in MECIA HACK hackathon and selected in top 10 teams. Also
              works with a Non-Profitable Organisation for their Websites.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Multimedia Designer</h4>
                <h5>Freelancer</h5>
              </div>
              <h3>2 YRS</h3>
            </div>
            <p>
              Freelancing as a Multimedia Designer since 2 years. Currently
              leading a team of designers for an Event. Also works with a
              Non-Profitable Organisation for their Social Accounts and designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
