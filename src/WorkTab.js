//IMPORTS
//import styled from 'styled-components';
import './App.css';

    //STYLED COMPONENTS
//The container for the ProjectsList tab

//COMPONENTS

function WorkTab () {
    return ( 
        <div className="flex-items" id="work-tab">
        <h1 id="work-tab-title">Previous Projects</h1> 
            <div className="project-flex-container">
                <div className="project-container">
                    <div className="overlay">
                        <p className="project-description" id="quire">Quire - A team project, where we created a all in one note taking website. I worked on pretty much equal parts HTML, CSS and JS here.</p>
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" target="_blank" rel="noreferrer" className="project-link">See more here</a>
                    </div>
                    <div className="project-title">
                        <h2>Quire</h2>
                    </div>
                </div>
                
                <div className="project-container">
                    <div className="overlay">
                        <p className="project-description" id="progress-blog">My own progress blog - one of my first "bigger" projects. My main focus was solidifying my understanding of basic CSS, HTML and use to very little JS.</p>
                        <a href="https://github.com/Youssef-C/ProgressBlog" target="_blank" rel="noreferrer" className="project-link">See more here</a>
                    </div>
                    <div className="project-title">
                        <h2>Progress Blog</h2>
                    </div>
                </div>

                <div className="project-container">
                    <div className="overlay">
                        <p className="project-description" id="threeD-card">A 3D card website, followed a tutorial to deepen my understanding and knowledge with CSS. Was a lot of fun, and happy with the end result.</p>
                        <a href="https://github.com/Youssef-C/3D-Card" target="_blank" rel="noreferrer" className="project-link">See more here</a>
                    </div>
                    <div className="project-title">
                        <h2>3D Card</h2>
                    </div>
                </div>

                <div className="project-container">
                    <div className="overlay">
                        <p className="project-description">Project Description Goes here!</p>
                        <a href="https://github.com/Youssef-C/Portfolio" target="_blank" rel="noreferrer" className="project-link">See more here</a>
                    </div>
                    <div className="project-title">
                        <h2>My Portfolio</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default WorkTab;