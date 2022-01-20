import React from "react";

import translations from "../translate/basicInfo.json";

function Footer() {
  const { name } = translations.basic_info;
  const { social } = translations.basic_info;

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">
          {social.map((network, i) => (
            <span key={i} className="m-4">
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                <i className={network.class} style={{ fontSize: "3.5rem" }}></i>
              </a>
            </span>
          ))}
        </div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy; template:{" "}
              <a href="https://github.com/Dorota1997" rel="noopener noreferrer">
                Dorota Gil
              </a>{" "}
              || Recode in TS : <a href="https://github.com/nunestiago">{name}</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
