import React from "react";
import "./Progress.css";
import chat from "./img/chat.jpg"
import flipkart from "./img/flipkart.png"
import {SiGithub} from "react-icons/si"
import {FiLink} from "react-icons/fi"
import * as SiIcons from "react-icons/si";


function Progress() {
  return (
    <div className="project component__space" id="Project">
       {/* Starts */}
       <div id='portfolio'>
       <h5  style={{fontSize: "40px",textAlign: "center"}}>My Works</h5> <br/>
        <p className="heading p__color" style={{fontSize: "20px"}}>
          Here a few of my projects
        </p>
       <div className='allProjects'>
        {/* Sample  */}
        <div class="card"  data-aos="zoom-in-up">
            <img src="https://thumbs.dreamstime.com/b/e-commerce-online-shopping-digital-marketing-sales-business-technology-concept-137074336.jpg" alt="" className="project__img" />
               <div className="project__meta absolute">
                     <h4 className="project__text"  style={{color: "white", fontSize: "30px"}}><b>Ecommerce Site</b></h4>
                <div className='img-description'>
                        <p style={{color: "white"}}>Designed an  e-com  website with feature of buying and viewing products for customer.<br/><br/>
                        Developed this application with JWT Authentication along with roles of admin and User.</p><br/>
                          <div className='tech_used'>
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <SiIcons.SiReact className='react' />&nbsp;&nbsp;
                                <SiIcons.SiNodedotjs className='node' /> <br/><br/>
                                <p className='codeLinks text-center pt-3'>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/ecomservice-frontend.git'  target='_blank' rel="noreferrer" ><SiGithub className="git"/> Frontend</a>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/ecomservice-backend.git' target='_blank' rel="noreferrer" ><SiGithub className="git"/> Backend</a>
                                {/* <a className="project__btn" href='https://ecom-site-sandy.herokuapp.com/' target='_blank' rel="noreferrer" ><FiLink className="git" /> Website </a> */}
                                </p>
                            </div><br/>
                            <div className="footer">
                                <a href="https://drive.google.com/file/d/1FhlOMalXZfp63Xfb5t8rwRhwLhnNPqQH/view?usp=sharing" target="_blank" rel="noreferrer" className="project__btn">Demo Credentials</a> <br/><br/>
                            </div>
                        </div> 
                    </div><br/>
                </div>
{/* Sample ends  */}

{/* Second Project starts */}

<div class="card"  data-aos="zoom-in-up">
            <img src={flipkart} alt="" className="project__img" />
               <div className="project__meta absolute">
                     <h4 className="project__text"  style={{color: "white", fontSize: "30px"}}><b>Flipkart Clone</b></h4>
                <div className='img-description'>
                        <p style={{color: "white"}}>Designed an flipkart clone with basic login authentication and also imported a products to site.<br/><br/>
                        Developed this application with user to add cart and also view the products.</p><br/>
                          <div className='tech_used'>
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                {/* <SiIcons.SiExpress className='express' /> &nbsp; */}
                                <SiIcons.SiReact className='react' />&nbsp;&nbsp;
                                <SiIcons.SiNodedotjs className='node' /> <br/><br/>
                                <p className='codeLinks text-center pt-3'>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/flipkart-frontend.git'  target='_blank' rel="noreferrer" ><SiGithub className="git"/> Frontend</a>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/flipkart-backend.git' target='_blank' rel="noreferrer" ><SiGithub className="git"/> Backend</a>
                                {/* <a className="project__btn" href='https://sandy-flipkart-clone.herokuapp.com/' target='_blank' rel="noreferrer" ><FiLink className="git" /> Website</a> */}
                                </p>
                            </div><br/>
                            <div className="footer">
                                <a href="https://drive.google.com/file/d/1IslW23oBkPWa0vyX_sQAB2RjzjO1_MAD/view?usp=sharing" target="_blank" rel="noreferrer" className="project__btn">Demo Credentials</a> <br/><br/>
                            </div>
                        </div> 
                    </div><br/>
                </div>                
{/* Second Project ends */}

{/* Third Project start */}
<div class="card"  data-aos="zoom-in-up">
            <img src={chat} alt="" className="project__img" />
               <div className="project__meta absolute">
                     <h4 className="project__text"  style={{color: "white", fontSize: "30px"}}><b>Chat Room</b></h4>
                <div className='img-description'>
                        <p style={{color: "white"}}>Created a full Realtime Chat Application and developed with React on the front end, with NodeJS + Socket.io web socket library on the back end.</p><br/>
                          <div className='tech_used'>
                                {/* <SiIcons.SiMongodb className='mongodb' /> &nbsp; */}
                                <SiIcons.SiSocketdotio className='socket' /> &nbsp;
                                {/* <SiIcons.SiExpress className='express' /> &nbsp; */}
                                <SiIcons.SiReact className='react' />&nbsp;&nbsp;
                                <SiIcons.SiNodedotjs className='node' /> <br/><br/>
                                <p className='codeLinks text-center pt-3'>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/chatroom-frontend.git'  target='_blank' rel="noreferrer" ><SiGithub className="git"/> Frontend</a>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/chatroom-backend.git' target='_blank' rel="noreferrer" ><SiGithub className="git"/> Backend</a>
                                <a className="project__btn" href='https://chatroom-sandy.netlify.app/' target='_blank' rel="noreferrer" ><FiLink className="git" /> Website</a>
                                </p>
                            </div><br/>
                            <div className="footer">
                                <a href="https://drive.google.com/file/d/1P9kCGSRnPxDGq_QKUwtx_BtU-p7D6D2I/view?usp=sharing" target="_blank" rel="noreferrer" className="project__btn">Demo Credentials</a> <br/><br/>
                            </div>
                        </div> 
                    </div><br/>
                </div>
{/* Third project ends */}

{/* Fourth Project start */}
<div class="card"  data-aos="zoom-in-up">
            <img src="https://loopofwords.in/wp-content/uploads/2021/07/blog-writing-1024x1024.png" alt="" className="project__img" />
               <div className="project__meta absolute">
                     <h4 className="project__text"  style={{color: "white", fontSize: "30px"}}><b>Insta Blog</b></h4>
                <div className='img-description'>
                        <p style={{color: "white"}}>Develop this application with complete JWT Authentication,where user can read,create and comment on posts.<br/><br/>
                        User can update profile,follow other people and also delete their posts only.</p><br/>
                          <div className='tech_used'>
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                {/* <SiIcons.SiSocketdotio className='socket' /> &nbsp; */}
                                {/* <SiIcons.SiExpress className='express' /> &nbsp; */}
                                <SiIcons.SiReact className='react' />&nbsp;&nbsp;
                                <SiIcons.SiNodedotjs className='node' /> <br/><br/>
                                <p className='codeLinks text-center pt-3'>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/insta-blog-frontend.git'  target='_blank' rel="noreferrer" ><SiGithub className="git"/> Frontend</a>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/insta-blog-backend.git' target='_blank' rel="noreferrer" ><SiGithub className="git"/> Backend</a>
                                {/* <a className="project__btn" href='https://insta-blogpost.herokuapp.com/signin' target='_blank' rel="noreferrer" ><FiLink className="git" /> Website</a> */}
                                </p>
                            </div><br/>
                            <div className="footer">
                                <a href="https://drive.google.com/file/d/1c8nZqKq3bQttSsWJQKFZx-ZII2mKBHUx/view?usp=sharing" target="_blank" rel="noreferrer" className="project__btn">Demo Credentials</a> <br/><br/>
                            </div>
                        </div> 
                    </div><br/>
                </div>             
{/* Fourth Project Ends */}

{/* Fifth Project Starts  */}
 <div class="card"  data-aos="zoom-in-up">
            <img src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/_340594_resumeanatomy.hero.jpg" alt="" className="project__img" />
               <div className="project__meta absolute">
                     <h4 className="project__text"  style={{color: "white", fontSize: "30px"}}><b>CV Generator - CMS</b></h4>
                <div className='img-description'>
                        <p style={{color: "white"}}>Develop this application with complete JWT Authentication,where user can create and browser our templates  to generate the resume.</p><br/>
                          <div className='tech_used'>
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                {/* <SiIcons.SiExpress className='express' /> &nbsp; */}
                                <SiIcons.SiReact className='react' /> &nbsp;
                                <SiIcons.SiNodedotjs className='node' /><br/><br/>
                                <p className='codeLinks text-center pt-3'>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/Resume-Genertaor-CMS-Frontend.git'  target='_blank' rel="noreferrer" ><SiGithub className="git"/> Frontend</a>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/Resume-Genertaor-CMS-Backend.git' target='_blank' rel="noreferrer" ><SiGithub className="git"/> Backend</a>
                                {/* <a className="project__btn" href='https://resume-generator-sandy.herokuapp.com/' target='_blank' rel="noreferrer" > <FiLink className="git" /> Website</a> */}
                                </p>
                            </div><br/>
                            <div className="footer">
                                <a href="https://drive.google.com/file/d/1cJv1gz2TW0-E8-cv_4pycQQYFbuv3B3E/view?usp=sharing" target="_blank" rel="noreferrer" className="project__btn">Demo Credentials</a> <br/><br/>
                            </div>
                         </div> 
                    </div><br/>
                </div>
{/* Fifth Project ends */}

{/* Sixth Project Starts */}

<div class="card"  data-aos="zoom-in-up">
            <img src="https://thedeclarationatcoloniahigh.com/wp-content/uploads/2019/01/Netflix_icon.svg-900x900.png" alt="" className="project__img" />
               <div className="project__meta absolute">
                     <h4 className="project__text"  style={{color: "white", fontSize: "30px"}}><b>Netflix Clone - React UI</b></h4>
                <div className='img-description'>
                        <p style={{color: "white"}}>Build Netflix Clone application with the help of React JS and developed Landing Page and Netflix Show page in this application</p><br/>
                          <div className='tech_used'>
                                {/* <SiIcons.SiMongodb className='mongodb' /> &nbsp; */}
                                {/* <SiIcons.SiSocketdotio className='socket' /> &nbsp; */}
                                {/* <SiIcons.SiExpress className='express' /> &nbsp; */}
                                <SiIcons.SiReact className='react' /><br/><br/>
                                {/* <SiIcons.SiNodedotjs className='node' />  */}
                                <p className='codeLinks text-center pt-3'>
                                <a className="project__btn" href='https://github.com/Sandy2266-D/Netflix-clone.git'  target='_blank' rel="noreferrer" ><SiGithub className="git"/> Frontend</a>
                                <a className="project__btn" href='https://sandy-netflix.netlify.app/' target='_blank' rel="noreferrer" ><FiLink className="git" /> Website</a>
                                </p>
                            </div><br/>
                         </div> 
                    </div><br/>
                </div> 
                
{/* Sixth Propject ends */}

{/* ENclosings divs three*/}
           </div>
       </div>
    </div>
    // ends
  );
}

export default Progress;
