import React from "react";
import "./Project.css";
// import { IconButton } from '@material-ui/core';
import {GitHub} from "@material-ui/icons"
import {SiHeroku} from "react-icons/si"
import {SiNetlify} from "react-icons/si"
import * as SiIcons from "react-icons/si";


function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h5 className="heading__top" style={{fontSize: "40px"}}>My Works</h5> <br/>
        <p className="heading p__color" style={{fontSize: "20px"}}>
          Here a few of my projects
        </p>
       </div>
       {/* Starts */}
       <div className="container">
           <div className="row">
        {/* Sample  */}
        <div className="col__3">
                <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://www.bbvaapimarket.com/wp-content/uploads/2015/01/compra_online-1024x1024.jpg" alt="" className="project__img" />
                         </div>                   
                     <div className="project__meta absolute">
                     <h5 className="project__text" style={{color: "brown"}}><b>Ecommerce Site</b></h5>
                    <div>
                        <p style={{color: "white"}}><b>Designed an  e-com  website with feature of buying and viewing products for customer. <br/>
                        Developed this application with JWT Authentication along with roles of admin and User.</b></p> 
                          <div className='tech_used'>
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <SiIcons.SiExpress className='express' /> &nbsp;
                                <SiIcons.SiNodedotjs className='node' /> &nbsp;
                                <SiIcons.SiReact className='react' /><br/>
                                <p className='codeLinks text-center pt-3'>
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/ecomservice-frontend.git'  target='_blank' rel="noreferrer" ><GitHub/> Frontend </a>&nbsp;&nbsp;
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/ecomservice-backend.git' target='_blank' rel="noreferrer" ><GitHub/> Backend </a>&nbsp;&nbsp;&nbsp;
                                    {/* <a className="project__btn" href='https://ecom-site-sandy.herokuapp.com/' target='_blank' rel="noreferrer" ><SiHeroku/> Website</a> */}
                                </p>
                            </div><br/>
                            <div className="footer">
                         <a href="https://drive.google.com/file/d/1FhlOMalXZfp63Xfb5t8rwRhwLhnNPqQH/view?usp=sharing" target="_blank" rel="noreferrer" className="project__btn">Demo Credentials</a> <br/><br/>
                         </div>
                    </div>  
                </div>
             </div> 
             </div>
             <br/>
                 
             </div>
{/* Sample ends  */}

{/* Second Project starts */}
<div className="col__3">
                <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://venteskraft.net/wp-content/uploads/2020/07/Flipkart-starts-hyperlocal-service-Flipkart-Quick-1024x1024.jpg" alt="" className="project__img" />
                         </div>
                  <div className="project__meta absolute">
                     <h5 style={{color: "darkgreen"}}><b>Flipkart Clone</b></h5> <br/>
                    <div>
                        <p style={{color: "white"}}><b>Developed an flipkart clone with basic login authentication and designed a products with React UI </b></p> <br/>
                         
                            <div className='tech_used'>
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <SiIcons.SiExpress className='express' /> &nbsp;
                                <SiIcons.SiNodedotjs className='node' /> &nbsp;
                                <SiIcons.SiReact className='react' />  <br/>
                                <p className='codeLinks text-center pt-3'>
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/flipkart-frontend.git'  target='_blank' rel="noreferrer" ><GitHub/> Frontend </a>&nbsp;&nbsp;
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/flipkart-backend.git' target='_blank' rel="noreferrer" ><GitHub/> Backend </a>&nbsp;&nbsp;&nbsp;
                                    {/* <a className="project__btn" href='https://sandy-flipkart-clone.herokuapp.com/' target='_blank' rel="noreferrer" ><SiHeroku/> Website</a> */}
                                </p>
                            </div><br/>
                            <div className="footer">
                         <a href="https://drive.google.com/file/d/1IslW23oBkPWa0vyX_sQAB2RjzjO1_MAD/view?usp=sharing" target="_blank" rel="noreferrer" className="project__btn">Demo Credentials</a> <br/><br/>
                         </div>
                    </div>  
                </div>
             </div> 
             </div>
             <br/>
                 
             </div>
{/* Second Project ends */}

{/* Third Project start */}
<div className="col__3">
                <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://onlinechatus.com/wp-content/uploads/2021/07/onlinechat-logo.png" alt="" className="project__img" />
                         </div>
                         {/* <div className="mask__effect">
                         
                         </div> */}
                    
                     <div className="project__meta absolute">
                     <h4 className="project__text" style={{color: "black"}}> <strong>Chat Room</strong></h4>
                    <div>
                        <p style={{color: "white"}}><b>Created a full Realtime Chat Application and develpoed with React on the front end, with NodeJS + Socket.io web socket library on the back end.</b></p> <br/>
                         
                            <div className='tech_used'>
                                <SiIcons.SiSocketdotio className='socket' /> &nbsp;
                                <SiIcons.SiExpress className='express' /> &nbsp;
                                <SiIcons.SiNodedotjs className='node' /> &nbsp;
                                <SiIcons.SiReact className='react' />  <br/>
                                <p className='codeLinks text-center pt-3'>
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/chatroom-frontend.git'  target='_blank' rel="noreferrer" ><GitHub/> Frontend </a>&nbsp;&nbsp;
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/chatroom-backend.git' target='_blank' rel="noreferrer" ><GitHub/> Backend </a>&nbsp;&nbsp;&nbsp;
                                    <a className="project__btn" href='https://chatroom-sandy.netlify.app/' target='_blank' rel="noreferrer" > <SiNetlify/> Website</a>
                                </p>
                            </div><br/>
                            <div className="footer">
                         <a href="https://drive.google.com/file/d/1P9kCGSRnPxDGq_QKUwtx_BtU-p7D6D2I/view?usp=sharing" target="_blank" rel="noreferrer" className="project__btn">Demo Credentials</a> <br/><br/>
                         </div>
                            
                    </div>  
                </div>
             </div> 
             </div>
             <br/>
                 
             </div>
             {/* Third project ends */}

{/* Fourth Project start */}
<div className="col__3">
                <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://loopofwords.in/wp-content/uploads/2021/07/blog-writing-1024x1024.png" alt="" className="project__img" />
                         </div>                   
                     <div className="project__meta absolute">
                     <h4 className="project__text" style={{color: "yellow"}}> <b>Insta Blog</b></h4>
                    <div>
                        <p style={{color: "white"}}><b>Designed an insta-clone application with complete JWT Authentication,that allows you to Read,edit,and create posts. You can create posts with picture, update user profile,follow other people and also delete your posts only.</b></p> <br/>
                         
                            <div className='tech_used'>
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <SiIcons.SiExpress className='express' /> &nbsp;
                                <SiIcons.SiNodedotjs className='node' /> &nbsp;
                                <SiIcons.SiReact className='react1' />  <br/>
                                <p className='codeLinks text-center pt-3'>
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/insta-blog-frontend.git'  target='_blank' rel="noreferrer" ><GitHub/> Frontend </a>&nbsp;&nbsp;
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/insta-blog-backend.git' target='_blank' rel="noreferrer" ><GitHub/> Backend </a>&nbsp;&nbsp;&nbsp;
                                    {/* <a className="project__btn" href='https://insta-blog-sandy.herokuapp.com/signin' target='_blank' rel="noreferrer" ><SiHeroku/> Website</a> */}
                                </p>
                            </div><br/>
                            <div className="footer">
                         <a href="https://drive.google.com/file/d/1c8nZqKq3bQttSsWJQKFZx-ZII2mKBHUx/view?usp=sharing" target="_blank" rel="noreferrer" className="project__btn">Demo Credentials</a> <br/><br/>
                         </div>
                    </div>  
                </div>
             </div> 
             </div>
             <br/>
                 
             </div>
             {/* Fourth Project Ends */}

{/* Fifth Project Starts  */}
<div className="col__3">
                <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://thedeclarationatcoloniahigh.com/wp-content/uploads/2019/01/Netflix_icon.svg-900x900.png" alt="" className="project__img" />
                         </div>
                                            
                     <div className="project__meta absolute">
                     <h4 className="project__text" style={{color: "lightblue"}}><b>Netflix Clone - React UI</b></h4>
                    <div>
                        <p style={{color: "white"}}><b>Build Netflix Clone application with the help of React JS and developed Landing Page and Netflix Show page in this application</b></p> <br/>
                         
                            <div className='tech_used'>
                               
                                <SiIcons.SiReact className='react2' />  <br/>
                                <p className='codeLinks text-center pt-3'>
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/Netflix-clone.git'  target='_blank' rel="noreferrer" ><GitHub/> Frontend </a>&nbsp;&nbsp;
                                    <a className="project__btn" href='https://sandy-netflix.netlify.app/' target='_blank' rel="noreferrer" ><SiNetlify/> Website</a>
                                </p>
                            </div><br/>
                            
                    </div>  
                </div>
             </div> 
             </div>
             <br/>
                 
             </div>
{/* Fifth Project ends */}

{/* Sixth Project Starts */}
<div className="col__3">
                <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://www.pngplay.com/wp-content/uploads/8/Twitter-PNG-Clipart-Background.png" alt="" className="project__img" />
                         </div>
                                            
                     <div className="project__meta absolute">
                     <h4 className="project__text" style={{color: "darkgreen"}}><b>Twitter Clone - React UI</b></h4>
                    <div>
                        <p style={{color: "white"}}><b>Created the twitter design clone using the react js library to  showcase home page.</b></p> <br/>
                         
                            <div className='tech_used'>
                                 <SiIcons.SiReact className='react3' />  <br/>
                                <p className='codeLinks text-center pt-3'>
                                    <a className="project__btn" href='https://github.com/Sandy2266-D/twitter-clone.git'  target='_blank' rel="noreferrer" ><GitHub/> Frontend </a>&nbsp;&nbsp;
                                    <a className="project__btn" href='https://sandy-twitter-clone-react.netlify.app/' target='_blank' rel="noreferrer" ><SiNetlify/> Website</a>
                                </p>
                            </div><br/>
                            
                    </div>  
                </div>
             </div> 
             </div>
             <br/>
                 
             </div>
{/* Sixth Propject ends */}

{/* ENclosings divs three*/}
           </div>
       </div>
    </div>
    // ends
  );
}

export default Project;
