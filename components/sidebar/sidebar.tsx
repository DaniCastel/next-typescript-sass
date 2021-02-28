import React, { useState } from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";

function Plugin() {
  const [active, setActive] = useState(false);

  return (
    <div className={cn("sidebar", {
      "plugin__active": active === true,
    })}>
      This is the sidebar
    </div>
  );
}

export default Plugin;
