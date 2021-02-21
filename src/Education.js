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
            <div className="schools">
                <div className="school">
                    <h2 className="school-title">KYH</h2>
                    <p className="school-description">
                    KYH is where I am currently studying Frontend Development. 
                    There I've been learning HTML, CSS, JavaScript and React. 
                    We work in both individual projects and team projects.  
                    </p>
                </div>

                <div className="school">
                    <h2 className="school-title">Kulturama</h2>
                    <p className="school-description">
                    For one year I studied Film Production at Kulturama. That year taught me a whole lot, 
                    but the most relevant was working in teams. 
                    Making movies on your own is essentially impossible on your own 
                    so teamwork was vital. Another thing I learnt a lot about was 
                    leading a project and making sure 
                    we’re on track and that everyone in a team knows what’s going on. 
                    </p>
                </div>

                <div className="school">
                    <h2 className="school-title">Mediagymnasiet</h2>
                    <p className="school-description">
                    I studied video game graphics/3D design at mediagymnasiet, a three year education. 
                    There I learned a lot about pre production and teamwork. We made a lot of different 
                    projects in a lot of different programs. Here I first encountered working with code. 
                    I took a 6 month long course in C++ 
                    and worked with it on my final year project, using it in the Unreal Game Engine. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;