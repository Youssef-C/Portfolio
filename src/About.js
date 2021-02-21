//IMPORTS
//import styled from 'styled-components';//
import './App.css'; 


    //STYLED COMPONENTS
//The container for the education tab


//COMPONENTS

function About () {
    return (
        <div className="flex-items" id="about-me">
            <h1 id="about-title">About the developer!</h1>
            <p className="description-me">
                I'm Youssef, a new and excited webdev student. My webdev journey so far has been a lot of fun but not without it's hitches. 
            </p>

            <p className="description-me">
                The best part about it has been learning to find information. Cause even though I might not always know how to do something - someone is guaranteed to know. 
            </p>

            <p className="description-me">
                Learning to use GIT and github was a very cool experience and something I still have barely scratched the surface off. JavaScript has probably been my greatest challenge,
                and remains to be to this day. But so far I've eventually been able to make whatever I need or want to happen, happen! With perserverance and patience anything is possible. 
            </p>

        </div>
    );
}

export default About;