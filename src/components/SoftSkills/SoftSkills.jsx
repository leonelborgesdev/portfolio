import React from "react";
import "./SoftSkills.css";
import { useSelector } from "react-redux";

export const SoftSkills = () => {
  const { language } = useSelector((state) => state);
  return (
    <div className="softskills_all">
      <div className="softskills_body">
        <div className="container_keyword">
          <div className="keyword">
            <h4>{language === "español" ? "Trabajo en equipo" : "Teamwork"}</h4>
          </div>
        </div>
        <div className="softskills_container">
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <i />
          </div>
          <div className="loader">
            <i />
          </div>
        </div>
      </div>
      <div className="softskills_body">
        <div className="container_keyword">
          <div className="keyword">
            <h4>
              {language === "español"
                ? "Capacidad de análisis"
                : "Analysis capacity"}
            </h4>
          </div>
        </div>
        <div className="softskills_container" id="red">
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <i />
          </div>
          <div className="loader">
            <i />
          </div>
        </div>
      </div>
      <div className="softskills_body">
        <div className="container_keyword">
          <div className="keyword">
            <h4>{language === "español" ? "Comunicación" : "Communication"}</h4>
          </div>
        </div>
        <div className="softskills_container" id="yellow">
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <i />
          </div>
          <div className="loader">
            <i />
          </div>
        </div>
      </div>
      <div className="softskills_body">
        <div className="container_keyword">
          <div className="keyword">
            <h4>{language === "español" ? "Compañerismo" : "Fellowship"}</h4>
          </div>
        </div>
        <div className="softskills_container" id="blue">
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <i />
          </div>
          <div className="loader">
            <i />
          </div>
        </div>
      </div>
      <div className="softskills_body">
        <div className="container_keyword">
          <div className="keyword">
            <h4>
              {language === "español" ? "Responsabilidad" : "Responsibility"}
            </h4>
          </div>
        </div>
        <div className="softskills_container" id="grey">
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <i />
          </div>
          <div className="loader">
            <i />
          </div>
        </div>
      </div>
      <div className="softskills_body">
        <div className="container_keyword">
          <div className="keyword">
            <h4>{language === "español" ? "Perseverancia" : "Perseverance"}</h4>
          </div>
        </div>
        <div className="softskills_container" id="purple">
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <i />
          </div>
          <div className="loader">
            <i />
          </div>
        </div>
      </div>
      <div className="softskills_body">
        <div className="container_keyword">
          <div className="keyword">
            <h4>
              {language === "español"
                ? "Resolucion de Problemas"
                : "Problem resolution"}
            </h4>
          </div>
        </div>
        <div className="softskills_container" id="pink">
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <span />
          </div>
          <div className="loader">
            <i />
          </div>
          <div className="loader">
            <i />
          </div>
        </div>
      </div>
    </div>
  );
};
