import { useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const getMonthName = (month) => {
  switch (month) {
    case 1:
      return "January";

      break;
    case 2:
      return "February";

      break;
    case 3:
      return "March";

      break;
    case 4:
      return "April";

      break;
    case 5:
      return "May";
      break;

    case 6:
      return "June";

      break;
    case 7:
      return "July";

      break;
    case 8:
      return "August";

      break;
    case 9:
      return "September";

      break;
    case 10:
      return "October";

      break;
    case 11:
      return "November";

      break;
    case 12:
      return "December";

      break;

    default:
      break;
  }
};

const getDateInString = (date) => {
  const newDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return newDate;
};

let appointmentDates = ["1-5-2023", "28-5-2023", "4-6-2023"];

const Header = () => {
  const date = new Date();

  const presentDate = getDateInString(date);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const appointmentDate = appointmentDates.find((date) => date === presentDate);

  let nextAppointmentText = "";

  if (appointmentDate !== undefined) {
    //nothing done
  } else {
    nextAppointmentText += appointmentDates[0];
  }

  let scheduledTask = "";

  const time = `${date.getHours()}:${date.getMinutes()}`;

  const dailyChartList = localStorage.getItem("todos");

  useEffect(() => {
    if (dailyChartList !== null) {
      const dailyList = JSON.parse(dailyChartList);

      dailyList.forEach((task) => {
        if (task.time === time) {
          alert(task.text);
          scheduledTask = task.text;
        } else {
          scheduledTask = "You Have no task scheduled at this time";
        }
      });
    }
  });

  return (
    <div className="header-container">
      <Slider className="slider-container" {...settings}>
        <div className="appointment-container">
          <h1 className="appointment-heading">
            {appointmentDate === undefined
              ? `Your Next Appointment Date is on ${nextAppointmentText}`
              : `You Had An Appointment Today attend today`}
          </h1>
        </div>
        <div>
          <h1 className="appointment-heading">{scheduledTask}</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
