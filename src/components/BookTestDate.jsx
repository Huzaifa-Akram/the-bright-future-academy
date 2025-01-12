import React from "react";
import "./bookTestDate.css";

function BookTestDate() {
  const redirectToWhatsApp = () => {
    const message =
      "Hello, I would like to book a test date for the IELTS exam. Could you please provide me with the available dates and any additional information required for the booking process? Thank you!";
    const url = `https://wa.me/+923338505850?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="book-test-date">
      <h2>Book Your Test Date</h2>
      <p>
        The Bright Future IELTS Academy is excited to offer you the opportunity
        to conveniently book your IELTS test date. Take the next step toward
        achieving your academic or professional goals by selecting a date that
        suits your schedule. Our academy ensures a smooth booking process,
        helping you prepare effectively and confidently for your IELTS exam.
        <span>
          Don’t wait—secure your test date today and start your journey toward
          success!
        </span>
      </p>
      <button onClick={redirectToWhatsApp}>Book Test Date ⬒</button>
    </div>
  );
}

export default BookTestDate;
