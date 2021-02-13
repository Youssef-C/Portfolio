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
                        <p className="project-description">Project Description Goes here!</p>
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" target="_blank" rel="noreferrer" className="project-link">See more here</a>
                    </div>
                    <div className="project-title">
                        <h2>Quire</h2>
                    </div>
                </div>
                
                <div className="project-container">
                    <div className="overlay">
                        <p className="project-description">Project Description Goes here!</p>
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" target="_blank" rel="noreferrer" className="project-link">See more here</a>
                    </div>
                    <div className="project-title">
                        <h2>Progress Blog</h2>
                    </div>
                </div>

                <div className="project-container">
                    <div className="overlay">
                        <p className="project-description">Project Description Goes here!</p>
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" target="_blank" rel="noreferrer" className="project-link">See more here</a>
                    </div>
                    <div className="project-title">
                        <h2>3D Card</h2>
                    </div>
                </div>

                <div className="project-container">
                    <div className="overlay">
                        <p className="project-description">Project Description Goes here!</p>
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" target="_blank" rel="noreferrer" className="project-link">See more here</a>
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