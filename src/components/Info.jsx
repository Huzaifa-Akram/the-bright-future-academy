import "./info.css";

function Info() {
  const scrollTosection = (sectionName) => {
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="Info">
      <h1>The Bright Future IELTS Academy.</h1>
      <p>
        Your success is our top priority, and we are committed to earning your
        trust every step of the way. With dedication and integrity, we ensure
        that your goals are our shared mission. Together, we build a foundation
        for lasting success.
      </p>

      <div className="InfoButtons">
        <button
          className="courseBtn"
          onClick={() => scrollTosection("courses")}
        >
          Courses
        </button>
        <button className="bookingBtn">Book Test Date</button>
      </div>

      <div className="InfoStats">
        <div className="InfoStatsTitle">
          <p className="number">+06</p>
          <p className="txt">Years Of Experience</p>
        </div>
        <div className="InfoStatsTitle">
          <p className="number">+05</p>
          <p className="txt">Services</p>
        </div>
        <div className="InfoStatsTitle">
          <p className="number">+3.4k</p>
          <p className="txt">Students</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
