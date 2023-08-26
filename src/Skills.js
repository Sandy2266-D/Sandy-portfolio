import React from "react";
import "./Skills.css";
import aboutImg from "./img/aboutImg.jpg";

function Skills() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });

    return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
              <div className="skillContainer_text" >
                        <h2>SKILLSET</h2>
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
                <img src={aboutImg} alt="" className="about__img" /> <br/><br/>    
           </div>
      </div>
 </div>
</div>
  );
}

export default Skills;
