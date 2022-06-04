import React, {useState} from "react";

import { BellIcon } from "../../../Elements/HeaderElements";

import {
    faBell
  } from "@fortawesome/free-solid-svg-icons";

const Bell = () => {
  const [bellOn, bellOnChange] = useState(false);

  return (
      <>
        <BellIcon icon={faBell}/>
      </>
  );
};

export default Bell;
