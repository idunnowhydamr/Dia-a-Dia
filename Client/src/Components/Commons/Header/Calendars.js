import React from "react";

import { CalendarIcon } from "../../../Elements/HeaderElements";

import {
    faCalendar
  } from "@fortawesome/free-solid-svg-icons";

const Calendars = () => {

  return (
      <>
        <CalendarIcon icon={faCalendar}/>
      </>
  );
};

export default Calendars;