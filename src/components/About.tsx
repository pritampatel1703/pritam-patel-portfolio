import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          A motivated and creative Computer Science & Design engineering student
          at SVIT, VASAD with strong skills in web development, multimedia
          design and innovative problem solving. Seeking opportunities to apply
          technical and creative expertise in real-world projects and gain
          professional exposure.
        </p>

        <div className="about-hobbies">
          <h4>Hobbies</h4>
          <p>
            20 yr old with Multiple hobbies. <br />
            <span>Artist</span> | <span>Athlete</span> | <span>Designer</span> | <span>Photographer</span> | <span>Coder</span> | <span>Cook</span> | <span>Filmmaker</span> | <span>Gamer</span> | <span>Explorer</span> | <span>Poet</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
