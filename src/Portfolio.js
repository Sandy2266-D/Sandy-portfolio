import React from 'react'
import './Portfolio.css'
import * as SiIcons from "react-icons/si";
// import Invoice from '../../Images/Invoice.jpg'

function Portfolio() {
    return (
        <div id='portfolio'>
            <h1 className='logo-text'>Portfolio</h1>
            <div className='allProjects'>
                <div class="card"  data-aos="zoom-in-up">
                    <img src="https://venteskraft.net/wp-content/uploads/2020/07/Flipkart-starts-hyperlocal-service-Flipkart-Quick-1024x1024.jpg" class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Invoice Application</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Invoicejet</div>
                        <div className='img-description'>
                            <p>An invoice, bill or tab is a commercial document issued by seller to a buyer.</p>
                            <p>Implemented this application with complete authentication system along with varoius roles(Admin, Manager, Employee, Client)</p>
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/Preethi-ST/Invoicejet-Client'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/Preethi-ST/Invoicejet-Server'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://preethi-invoicejet.netlify.app/'>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="card" data-aos="zoom-in-up">
                    <img src="" class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Blog</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Blogzoid</div>
                        <div className='img-description'>
                            <p>Blog Application where the user can read, post, edit or delete articles. Edit and delete can only be performed by the respective article owner. Also, post can be categorized based on the tags or author</p>
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/Preethi-ST/Blog-Client'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/Preethi-ST/Blog-Server'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://preethi-blogzoid.netlify.app/'>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="card" data-aos="zoom-in-up">
                    <img src="" class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">URL Shortener</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Shortly</div>
                        <div className='img-description'>
                            <p>URL Shortener application where only logged in users can shorten URL and have access to the dashboard</p>
                            <p>Implemented this application with complete authentication system along with account verification via email</p>
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/Preethi-ST/URL_Shortener-Frontend'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/Preethi-ST/URL_Shortener-Backend'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://shortly-client.herokuapp.com/'>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio