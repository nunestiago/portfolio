import Emoji from 'a11y-react-emoji';
import React, { useState } from 'react';
import Switch from 'react-switch';
import Typewriter from 'typewriter-effect';

import codeCat from '../assets/codecat.gif';
import self from '../translate/basicInfo.json';

const HeaderTitleTypeAnimation = React.memo(
  () => {
    return (
      <div className="title-styles">
        <Typewriter
          options={{
            strings: self.basic_info.titles,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    );
  },
  (props, prevProp) => true
);

function Header() {
  const [checked, setChecked] = useState(false);

  function onThemeSwitchChange() {
    setChecked(!checked);
    setTheme();
  }

  function setTheme() {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }
  return (
    <header
      id="home"
      style={{ height: window.innerHeight - 140, display: "block" }}
    >
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <img src={codeCat} alt="coding cat" style={{ borderRadius: 16 }} />
            <br />
            <h1 className="mb-0">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(self.basic_info.name).start();
                }}
              />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            {/* TODO o boxsizing ::before e ::after do bootstrap fazem o switch sumir */}
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <Emoji
                  symbol="🌞"
                  label="sun"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 27,
                    textAlign: "center",
                  }}
                />
              }
              checkedIcon={
                <Emoji
                  symbol="🌙"
                  label="moon"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 27,
                    textAlign: "center",
                  }}
                />
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
