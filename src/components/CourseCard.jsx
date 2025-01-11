import React from "react";
import "./CourseCard.css";

function CourseCard(props) {
  const redirectToWhatsApp = (event) => {
    const message =
      "Hello, I found the course " +
      props.course.name +
      " on your website, and I am interested in learning more about it. Could you please provide details about the curriculum, and enrollment process? Thank you!";
    const url = `https://wa.me/+923338505850?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="courseCard">
      <img src={props.course.img} alt="" />
      <h3>{props.course.name}</h3>
      <p>{props.course.description}</p>
      <button onClick={redirectToWhatsApp}>Buy-{props.course.price}</button>
    </div>
  );
}

export default CourseCard;
