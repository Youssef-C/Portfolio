import styled from 'styled-components';
import './App.css';

//STYLED COMPONENTS
    //Styling Title
const Container = styled.div`
margin-top: 120px;
`


function Title () {
    return ( 
        <Container>
        <div id="home">
            <h1 id="name-tag">Youssef Chardi</h1>
            <h4 id="subtitle">A newbie Webdev</h4>
        </div>
        </Container>
    );
}
 
export default Title;