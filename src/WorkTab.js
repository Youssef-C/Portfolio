//IMPORTS
import styled from 'styled-components';
import './App.css';
import Quire from './Images/Quire.png';
import ProgressBlog from './Images/Progress-Blog.png';
import ShoeCard from './Images/3D-Card.png';

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
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" className="project-title">Progress Blog!</a>
                    </div>
                    <a href="https://github.com/maxjander/fe20tp1_keyboard"> <img className="project-image" src={ProgressBlog} alt=""/></a>
                </div>

                <div className="project-container">
                    <div className="overlay">
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" className="project-title">3D Card!</a>
                    </div>
                    <a href="https://github.com/maxjander/fe20tp1_keyboard"> <img className="project-image" src={ShoeCard} alt=""/></a>
                </div>

                <div className="project-container">
                    <div className="overlay">
                        <a href="https://github.com/maxjander/fe20tp1_keyboard" className="project-title">This Portfolio</a>
                    </div>
                    <a href="https://github.com/maxjander/fe20tp1_keyboard"> <img className="project-image" src={Quire} alt=""/></a>
                </div>
            </div>
        </div>
    );
}
 
export default WorkTab;