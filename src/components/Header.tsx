import Emoji from "a11y-react-emoji";
import React, { useState } from "react";
import type { TFunction } from "react-i18next";
import { useTranslation } from "react-i18next";
import Switch from "react-switch";
import Typewriter from "typewriter-effect";

import codeCat from "../assets/codecat.gif";
import self from "../translate/basicInfo.json";

// eslint-disable-next-line react/display-name
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
  (props, prevProp) => true,
);

function Header() {
  const [checked, setChecked] = useState(false);
  const { i18n } = useTranslation();

  async function changeLanguageHandler(lang: string | undefined): Promise<TFunction> {
    return i18n.changeLanguage(lang);
  }

  function setTheme() {
    const dataThemeAttribute = "data-theme";
    const { body } = document;
    const newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";

    body.setAttribute(dataThemeAttribute, newTheme);
  }

  function onThemeSwitchChange() {
    setChecked(!checked);
    setTheme();
  }

  return (
    <>
      <header id="home" style={{ height: window.innerHeight - 140, display: "block" }}>
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              {/* <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span> */}
              <img src={codeCat} alt="coding cat" style={{ borderRadius: 16 }} />
              <br />
              <h1 className="mb-0">
                <Typewriter
                  onInit={typewriter => {
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
      <div className="col-md-12 mx-auto text-center language">
        <div onClick={async () => changeLanguageHandler("pt")} style={{ display: "inline" }}>
          <Emoji
            symbol="🇧🇷"
            label="brazilian flag"
            style={{
              height: "100%",
              fontSize: 36,
              textAlign: "center",
              marginRight: 24,
              cursor: "pointer",
            }}
          />
        </div>
        <div onClick={async () => changeLanguageHandler("en")} style={{ display: "inline" }}>
          <Emoji
            symbol="🇺🇸"
            onClick={async () => changeLanguageHandler("en")}
            label="sun"
            style={{
              height: "100%",
              fontSize: 36,
              textAlign: "center",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
