// eslint disable-next-line
import Iconify from '@iconify/iconify';
import { Icon } from '@iconify/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import profilepic from '../assets/profile.png';

// TODO tenho que importar o import Iconify from '@iconify/iconify'; mas sem usar

function About() {
  const { t } = useTranslation();
  console.log(Iconify);

  return (
    <section id="about">
      <div className="container">
        <h1 style={{ color: "black" }}>
          <span>{t("info.basic_info.section_name.about")}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img height="250px" src={profilepic} alt="Avatar placeholder" />

                <Icon
                  icon="logos:nodejs"
                  style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon="logos:react"
                  style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon="logos:typescript-icon"
                  style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">
                    {t("info.basic_info.description_header")} :){" "}
                  </span>
                  <br />
                  <br />
                  {t("info.basic_info.description")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
