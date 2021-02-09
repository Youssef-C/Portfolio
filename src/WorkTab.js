//IMPORTS
import styled from 'styled-components';
import './App.css';
import Quire from './Images/Quire.png';

    //STYLED COMPONENTS
//The container for the ProjectsList tab

//COMPONENTS

function WorkTab () {
    return ( 
        <div className="flex-items" id="work-tab">
        <h1>Previous Projects</h1> 
            <div className="project-flex-container">
                <div className="project-container">
                    <div className="overlay">
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" className="project-title">QUIRE</a>
                    </div>
                    <a href="https://github.com/maxjander/fe20tp1_keyboard"> <img className="project-image" src={Quire} alt=""/></a>
                    
                </div>
                
                <div className="project-container">
                    <div className="overlay">
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" className="project-title">QUIRE</a>
                    </div>
                </div>

                <div className="project-container">
                    <div className="overlay">
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" className="project-title">QUIRE</a>
                    </div>
                </div>

                <div className="project-container">
                    <div className="overlay">
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" className="project-title">QUIRE</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default WorkTab;