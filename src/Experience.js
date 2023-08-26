import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const Experience = () => {
  return (
<div className="about component__space" id="Experience">
<div className="heading">
        <h5 className="heading__top" style={{fontSize: "40px"}}>Professional Experience</h5>
       </div>
    <div className="container">
      <div className="row">
        <div className="col__2">
            <div className="experience">
            <h1>  <WorkIcon /> Experience (Apr'22 to present)</h1> <br />                
                <div>
                  <h4 style={{ color: "green" }}>
                    Integra Global Solutions, Php Devloper
                  </h4>{" "}
                  <br />
                  <p style={{ fontSize: "15px", color: "grey" }}>
                    <h6>
                      {" "}
                      <b>
                        Work Highligths:
                        <br />
                      </b>{" "}
                    </h6>{" "}
                    <br />
                    <p>
                      <b> End-to-End Developement and Bugs Fixing.{" "}</b>
                    </p>
                    <br />
                    <p>
                      {" "}
                      <b>Monitoring Process : </b> To review,
                      analysis and monitor the flow of server.{" "}
                    </p>{" "}
                    <br />
                    <p>
                        <b>MySql Workbench : </b> Basic level execution on Sql Commands to run the query 
                    </p> <br/>
                  </p>
                </div>
          </div>
        </div>
        <div className="col__2">
          <div className="experience">
          <h1> <AssignmentTurnedInIcon/> Key Responsibilities :</h1> <br /> 
            <p style={{ fontSize: "15px", color: "grey" }}>
              {" "}
              Collaborated with cross-functional teams to gather requirements and deliver high-quality web solutions on time.
            </p>{" "}
            <br />
            <p style={{ fontSize: "15px", color: "grey" }}>
            Optimized website performance by applying best practices in HTML, CSS, Jquery and JavaScript.
            </p>{" "}
            <br />
            <p style={{ fontSize: "15px", color: "grey" }}>
            Developed and integrated APIs for seamless data exchange between front-end and back-end systems.
            </p>{" "}
            <br />
            <p style={{ fontSize: "15px", color: "grey" }}>
            Troubleshot and resolved compatibility issues across various browsers and devices, improving overall site
accessibility.
            </p> <br/>
            <p style={{ fontSize: "15px", color: "grey" }}>
            End to End Development process, bug fixing and site maintenance.{" "}
            </p>
            <br />
            <p style={{ fontSize: "15px", color: "grey" }}>
            Utilized version control systems (Git) to manage codebase and collaborate with team members effectively.
            </p>
            <br />
            
          </div>
        </div>
      </div>
  </div>
  <div className="heading">
        <h5 className="heading__top" style={{fontSize: "40px"}}>Professional Experience</h5>
       </div>
    <div className="container">
      <div className="row">
        <div className="col__2">
            <div className="experience">
            <h1>  <WorkIcon /> Experience (Jan'2019 to Apr'2022)</h1> <br />                
                <div>
                  <h4 style={{ color: "green" }}>
                    HDB Financial Service, Fraud Analyst
                  </h4>{" "}
                  <br />
                  <p style={{ fontSize: "15px", color: "grey" }}>
                    <h6>
                      {" "}
                      <b>
                        Work Highligths:
                        <br />
                      </b>{" "}
                    </h6>{" "}
                    <br />
                    <p>
                      <b>Risk Assestment : </b> To ensure the control
                      Measurements of Profile risk.{" "}
                    </p>
                    <br />
                    <p>
                      {" "}
                      <b>Fraud Monitoring And Investigation : </b> To review,
                      investigate and monitor the flow of online transactions.{" "}
                    </p>{" "}
                    <br /><br />
                    <p>
                        <b>Visual FoxPro Tool: </b> Basic level execution on Sql Commands to run the query 
                    </p> <br/>
                    <p> 
                    <b>Achievement: </b>Won the Star Employee of the Month(sep’19) for excellence in Monitoring process at HDB Financial Services.
                    </p> <br/>
                    <a
                      href="https://drive.google.com/file/d/1SpBaKMsogcxfrqhMvRjKXCXkf2kdVhA4/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="about btn pointer">Download Cv</button>
                    </a>
                  </p>
                </div>
          </div>
        </div>
        <div className="col__2">
          <div className="experience">
          <h1> <AssignmentTurnedInIcon/> Key Responsibilities :</h1> <br /> 
            <p style={{ fontSize: "15px", color: "grey" }}>
              {" "}
              Worked in different financial service Platforms like Proactive
              Risk Manager (PRM), Mastercard Internet Gateway Service (MIGS),
              CyberSource and Mastercard Payment Gateway Service (MPGS).
            </p>{" "}
            <br />
            <p style={{ fontSize: "15px", color: "grey" }}>
              Responsible for observing various customer transactions to flag or
              identify suspicious activity.
            </p>{" "}
            <br />
            <p style={{ fontSize: "15px", color: "grey" }}>
              Reviewing on online/POS/ATM live transactions based on certain
              criteria to prevent the fraudulent activity.
            </p>{" "}
            <br />
            <p style={{ fontSize: "15px", color: "grey" }}>
            Provided additional analyses where needed to determine inefficiencies within the department and implemented the
fixes to those problems on best-efforts basis.
            </p> <br/>
            <p style={{ fontSize: "15px", color: "grey" }}>
              Proactively monitored, prevention and minimization of losses
              through review of suspect transactions data as generated by
              transaction monitoring systems at our end.{" "}
            </p>
            <br />
            
          </div>
        </div>
      </div>
  </div>
</div>
  );
};

export default Experience;
