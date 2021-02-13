//IMPORTS
//import styled from 'styled-components';
import './App.css';

function Contact () {
    return (
        <div className="flex-items" id="contact">
            <h1 id="contact-title">Get in touch!</h1>
                <div className="email-text">
                    <a id="email-me" href="mailto:youssef.chardi@hotmail.com">Send me an email!
                    <p><i class="far fa-envelope"></i></p></a>
                </div>
            
            <div className="icon-container">
                
                <div className="icons" id="github">
                    <a href="https://github.com/Youssef-C" target="_blank" rel="noreferrer" title="Youssef-C on GitHub">
                        <i class="fab fa-github"></i> 
                    </a> 
                </div>

                <div className="icons" id="linkedin">
                    <a href="https://www.linkedin.com/in/youssef-chardi-1544b0173/" target="_blank" rel="noreferrer" title="My linked in page!"> 
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Contact;