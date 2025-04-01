import React from 'react';
import { FaGithub, FaInstagram, FaDiscord, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function About() {
    return (
        <div className="container">
            <div className="container1 my-4">
                <h4><strong>About NeXus News App</strong></h4>
            </div>

            <div className="accordion" id="accordionExample">
                {/* Functionality Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Functionality</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            NeXus News is a React-based single-page application (SPA) designed to deliver the latest news in a seamless and engaging manner.
                            It fetches real-time news using the Fetch API and provides a dynamic browsing experience with multiple news categories integrated directly into the API.
                            <br /><br />
                            <strong>Key Functionalities:</strong>
                            <ul>
                                <li>Real-time News Fetching – Retrieves and displays up-to-date news articles efficiently.</li>
                                <li>Categorized News – Supports multiple categories such as Technology, Business, Sports, Health, and more.</li>
                                <li>Class-Based Components – Built with React class components for better state and lifecycle management.</li>
                                <li>Props & State Management – Implements props for reusability and state for dynamic content updates.</li>
                                <li>Best-in-Class UX/UI – A visually appealing interface with an intuitive design and smooth navigation.</li>
                                <li>Pagination System – Allows users to explore articles across multiple pages with Next & Previous buttons for a structured reading experience.</li>
                                <li>Multi-Page Structure – Enhanced routing for better organization and ease of navigation.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* About Creator Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>About Creator</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Muhammad Hunain is a passionate Software Engineering student with a strong foundation in web development, Java, and DevOps.
                            He actively enhances his skills by working on HTML, CSS, and JavaScript projects and has a keen interest in modern technologies and UI/UX design.
                            As a Microsoft Learn Student Ambassador (MLSA) Strategist, he is committed to learning, networking, and contributing to the tech community.
                            
                            {/* Social Media Icons Inside About Creator Section */}
                            <div className="social-icons text-center mt-3 text-center"> 
                                <a href="https://github.com/M-HUNAIN-RIASAT" target="_blank" rel="noopener noreferrer"  className="mx-3">
                                    <FaGithub size={36} color='#71a3c9'/>
                                </a>
                                <a href="https://www.instagram.com/nain.riasat/" target="_blank" rel="noopener noreferrer"  className="mx-3">
                                    <FaInstagram size={36} color='#71a3c9'/>
                                </a>
                                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"  className="mx-3">
                                    <FaDiscord size={36} color='#71a3c9'/>
                                </a>
                                <a href="https://www.facebook.com/nain.riasat/" target="_blank" rel="noopener noreferrer"  className="mx-3">
                                    <FaFacebook size={36} color='#71a3c9'/>
                                </a>
                                <a href="https://www.linkedin.com/in/m-hunain-riasat-756080329" target="_blank" rel="noopener noreferrer"  className="mx-3" >
                                    <FaLinkedin size={36}  color='#71a3c9'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
