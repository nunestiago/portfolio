import 'react-tiny-fab/dist/styles.css';

import React from 'react';
import { Action, Fab } from 'react-tiny-fab';

function FloatingIcons() {
  return (
    <Fab alwaysShowTitle={true} icon="🔗">
      <Action text="Whatsapp" onClick={() => console.log("fire")}>
        <i className="fab fa-whatsapp"></i>
      </Action>

      <Action text="Github" onClick={() => console.log("Up")}>
        <i className="fab fa-github"></i>
      </Action>

      <Action text="LinkedIn" onClick={() => console.log("Down")}>
        <i className="fab fa-linkedin"></i>
      </Action>
    </Fab>
  );
}

export default FloatingIcons;
