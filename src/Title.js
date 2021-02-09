import styled from 'styled-components';

//STYLED COMPONENTS
    //Styling Title
const Container = styled.div`
margin-top: 120px;
`


function Title () {
    return ( 
        <Container>
        <div id="home">
            <h1>Youssef Chardi</h1>
            <h4>A newbie Webdev</h4>
        </div>
        </Container>
    );
}
 
export default Title;