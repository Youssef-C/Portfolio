import './App.css';
import TopMenu from './TopMenu';
import WorkTab from './WorkTab';
import Title from './Title'
import About from './About';
import Education from './Education';
import styled from 'styled-components';
import Contact from './Contact';
import WeatherApp from './WeatherApp';

const FontContainer = styled.div`
font-family: 'Montserrat', sans-serif;  
`

const Container = styled.div` 
  display: flex;
  flex-direction: column;
  background-color: #04047a;
  color: #f2e9e4;
`

function App() {
  return (
    <div className="App">
      <FontContainer>
      <TopMenu />
      <WeatherApp />
      <Container>
        <Title />
        <WorkTab /> 
        <Education />   
        <About />
        <Contact />
      </Container>
      </FontContainer>
    </div>
  );
}

export default App;
