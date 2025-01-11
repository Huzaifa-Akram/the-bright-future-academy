import React from "react";
import CourseCard from "./CourseCard";
import "./Courses.css";
import { coursesdata } from "../data/coursesdata";

function Courses() {
  return (
    <div className="courses">
      <h2>Online Courses</h2>
      <p>
        We offer comprehensive online lessons to help you master our courses at
        your own pace. Learn from experienced instructors and enhance your
        skills with our flexible, interactive online sessions.
      </p>
      <div className="courseCards">
        {coursesdata.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
