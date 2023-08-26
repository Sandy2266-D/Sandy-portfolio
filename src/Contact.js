import React from 'react';
import './Contact.css';
import { IconButton } from '@material-ui/core';
import {Email,ContactPhone} from "@material-ui/icons"
import emailjs from 'emailjs-com';
import { useState } from 'react';


// const Result = () =>{
//     return(
//         <p style={{color: "Green"}}><b>Your Message has been successfully sent.</b></p>
//     )
// }
function Contact() {
    // const[result,showResult] = useState(false);
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm("service_cjz1rei",'template_i95hq9b',e.target,"user_3EbRehbIM8DscDZd79D9F")
        .then(res=>{
            // console.log(res);
        }).catch(err=> console.log(err))
        e.target.reset()
        // showResult(true);
    }
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                <div className="contact__meta">
                    <h3>CONTACT DETAILS</h3><br />
                            <p className="hire__text white"><strong>Connect with me via </strong> <br/>
                            <IconButton>
                                <ContactPhone/>&nbsp; 9750752577 <br/>
                            </IconButton> 
                            <IconButton>   
                                <Email/>&nbsp; santhoshdura@gmail.com 
                            </IconButton> 
                            </p>
                    </div>
                    <div className="contact__box">
                        <form onSubmit={sendEmail}>
                       <div className="input__box">
                           <input type="text" name="name" className="contact name" placeholder="Your name *" />
                           <input type="text" name="user_email" className="contact email" placeholder="Your Email *" />
                           <input type="text" name="subject" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit"  >Submit</button>

                            {/* <div className="row">{
                                result ? <Result /> : null
                            } </div> */}
                        </div>
                        
                        <br/>
                        </form>
                    </div>
                </div>
                {/* <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div> */}
            </div>
        </div>
    )
}

export default Contact
