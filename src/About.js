import React from "react";
import "./About.css";
import aboutImg from "./img/aboutImage.jpeg";

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" /> <br />
            <br />
            <div className="skillContainer_text">
              <h2>CODING SKILLS</h2>
              <div className="resumeCodingSkillContainer">
                <div className="resumeCodingSkill">
                  <div className="codingName">Laravel</div>
                  <div className="codingPercent">70%</div>
                </div>
                <div className="skillWidthContainer">
                  <div className="skillWidth" style={{ width: `${70}%` }}></div>
                </div>
              </div>
              <div className="resumeCodingSkillContainer">
                <div className="resumeCodingSkill">
                  <div className="codingName">React</div>
                  <div className="codingPercent">65%</div>
                </div>
                <div className="skillWidthContainer">
                  <div className="skillWidth" style={{ width: `${65}%` }}></div>
                </div>
              </div>
              <div className="resumeCodingSkillContainer">
                <div className="resumeCodingSkill">
                  <div className="codingName">JavaScript</div>
                  <div className="codingPercent">70%</div>
                </div>
                <div className="skillWidthContainer">
                  <div className="skillWidth" style={{ width: `${70}%` }}></div>
                </div>
              </div>
              <div className="resumeCodingSkillContainer">
                <div className="resumeCodingSkill">
                  <div className="codingName">HTML And CSS</div>
                  <div className="codingPercent">75%</div>
                </div>
                <div className="skillWidthContainer">
                  <div className="skillWidth" style={{ width: `${75}%` }}></div>
                </div>
              </div>
              <div className="resumeCodingSkillContainer">
                <div className="resumeCodingSkill">
                  <div className="codingName">AJAX And Jquery</div>
                  <div className="codingPercent">75%</div>
                </div>
                <div className="skillWidthContainer">
                  <div className="skillWidth" style={{ width: `${75}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col__2">
            <div className="about__me">
              <h2 className="about__heading" style={{ fontSize: "30px" }}>
                About Me
              </h2>{" "}
              <br />
              <p className="about__text p__color">
                A Fraud Analyst pursuing with 3 years of experience and have
                extensive knowledge on backend process in banking domain.
              </p>
              <p className="about__text p__color">
                Analyzing financial data in the financial services industry with
                expertise in fraud strategy development and experience using SQL
                programming languages.{" "}
              </p>
              <p className="about__text p__color">
                Proficient in MS Office with advanced MS Excel skills with
                ability to take ambiguous data questions translate them into
                clear plans and produce recommendations based upon core
                findings.
              </p>
              <p className="about__text p__color">
              Passionate about creating dynamic, user-centric web solutions that meet business objectives around 1.5 years experienced in Web technology.
              </p>
              <p className="about__text p__color">
              Strong problem-solving skills and a proactive attitude toward learning and adapting to new technologies
              </p>
              <p className="about__text p__color">
                {" "}
                I'm passoniate about web design and also interested to develop web based applications.
                I primarily choose MERN technology to learn and also developed some fullstack projects to enhance my software skills.
              </p>{" "}
              <br />
              <a href="#Project">
                <button className="about btn pointer">My Works</button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
