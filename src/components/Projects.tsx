import React from 'react';
import { useTranslation } from 'react-i18next';

import translations from '../translate/en.json';

function Projects() {
  const { t } = useTranslation();
  const data = translations.projects;

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{t("info.basic_info.section_name.projects")}</span>
        </h1>
        <div className="container mx-auto">
          <div className="row mx-auto">
            {" "}
            {Object.entries(data).map((key, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                <span className="portfolio-item d-block">
                  <div className="foto">
                    <div>
                      <a
                        href={key[1].url}
                        rel="nofollow noreferrer"
                        target="_blank"
                      >
                        <img
                          src={key[1].images[0]}
                          alt="projectImages"
                          height="230"
                          style={{
                            marginBottom: 0,
                            paddingBottom: 0,
                            position: "relative",
                          }}
                        />
                      </a>
                      <span className="project-date">{key[1].startDate}</span>
                      <br />
                      <p className="project-title-settings mt-3">
                        {t(`info.projects.${index}.title`)}
                      </p>
                      <p className="modal-description">
                        {t(`info.projects.${index}.description`)}
                      </p>

                      <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto">
                          {key[1].technologies.map((item, index) => (
                            <li className="list-inline-item mx-3" key={index}>
                              <span>
                                <div className="text-center">
                                  <i
                                    className={item.class}
                                    style={{ fontSize: "300%" }}
                                  >
                                    <p
                                      className="text-center"
                                      style={{ fontSize: "30%" }}
                                    >
                                      {item.name}
                                    </p>
                                  </i>
                                </div>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
