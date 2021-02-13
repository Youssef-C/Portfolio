//IMPORTS
//import styled from 'styled-components';
import './App.css'; 


    //STYLED COMPONENTS
//The container for the education tab


//COMPONENTS

function Education () {
    return (
        <div className="flex-items" id="education">
        <h1 id="education-title">Education!</h1>
            <div className="school-images">
                <div className="schools">
                    <h2>KYH</h2>
                </div>

                <div className="schools">
                    <h2>KULTURAMA</h2>
                </div>

                <div className="schools">
                    <h2>MEDIAGYMNASIET</h2>
                </div>
            </div>
        </div>
    );
}

export default Education;