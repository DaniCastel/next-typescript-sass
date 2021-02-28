import React, { useState } from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";

function Plugin() {
  const [active, setActive] = useState(false);

  return (
    <div className={cn("header", {
      "plugin__active": active === true,
    })}>
      This is the header
    </div>
  );
}

export default Plugin;
