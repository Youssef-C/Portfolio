//IMPORTS
//import styled from 'styled-components';
import './App.css';

function Contact () {
    return (
        <div className="flex-items" id="contact">
            <h1>Get in touch!</h1>
            <p className="email"><a href="mailto:youssef.chardi@hotmail.com">Send me an email!</a></p>
            
            <div className="icons">
                <a href="https://github.com/Youssef-C" target="_blank" rel="noreferrer" title="Youssef-C on GitHub"><i className="social-icon" class="fab fa-github"> </i> </a>
                <a href="https://www.linkedin.com/in/youssef-chardi-1544b0173/" target="_blank" rel="noreferrer" title="My linked in page!"> <i className="social-icon" class="fab fa-linkedin"> </i></a>
            </div>
        </div>
    );
}

export default Contact;