import React from "react";
import "./Skils.css";
export const Skils = () => {
  return (
    <div className="container_skill">
      <div className="container_skill_body">
        <div className="container_s">
          <div className="cardSkill">
            <div
              className="percent"
              style={{ "--clr": "#04fc43", "--num": "85" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
              </svg>
              <div className="number">
                <h2>
                  85<span>%</span>
                </h2>
                <p>Html</p>
              </div>
            </div>
          </div>
          <div className="cardSkill">
            <div
              className="percent"
              style={{ "--clr": "#f00c05", "--num": "72" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
              </svg>
              <div className="number">
                <h2>
                  72<span>%</span>
                </h2>
                <p>PHOTOSOP</p>
              </div>
            </div>
          </div>
          <div className="cardSkill">
            <div
              className="percent"
              style={{ "--clr": "#fee800", "--num": "60" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
              </svg>
              <div className="number">
                <h2>
                  60<span>%</span>
                </h2>
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="cardSkill">
            <div
              className="percent"
              style={{ "--clr": "#ff00be", "--num": "95" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
              </svg>
              <div className="number">
                <h2>
                  95<span>%</span>
                </h2>
                <p>JAVASCRIPT</p>
              </div>
            </div>
          </div>
          <div className="cardSkill">
            <div
              className="percent"
              style={{ "--clr": "#06ccff", "--num": "40" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
                <circle cx={"70"} cy={"70"} r={"70"}></circle>
              </svg>
              <div className="number">
                <h2>
                  40<span>%</span>
                </h2>
                <p>TYPESCRIPT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
