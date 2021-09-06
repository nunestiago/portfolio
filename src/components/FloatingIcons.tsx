import "react-tiny-fab/dist/styles.css";

import React from "react";
import { Action, Fab } from "react-tiny-fab";

function FloatingIcons() {
  return (
    <Fab alwaysShowTitle={true} icon="🔗">
      <Action
        text="Whatsapp"
        onClick={() => window.open("https://api.whatsapp.com/send?phone=+5571999114791", "_blank")}
      >
        <i className="fab fa-whatsapp"></i>
      </Action>

      <Action text="Github" onClick={() => window.open("https://github.com/nunestiago", "_blank")}>
        <i className="fab fa-github"></i>
      </Action>

      <Action text="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/ntiagon/", "_blank")}>
        <i className="fab fa-linkedin"></i>
      </Action>
    </Fab>
  );
}

export default FloatingIcons;
