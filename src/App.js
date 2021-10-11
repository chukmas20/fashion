import './App.css';
import styled, { css } from "styled-components";
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Feature from './Components/Feature';
import Service from './Components/Service';
import Price from './Components/Price';

const Container = styled.div`
    height: 100vh;
    overflow:hidden;
    position: relative;
`;

const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top:0;
bottom:0;
z-index: -1;
`;

const IntroShape = styled.div`
${Shape}
clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
background-color: pink
`;


const FeatureShape = styled.div`
${Shape}
clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
background-color: purple;
opacity: 0.4;
`;


const ServiceShape = styled.div`
${Shape}
clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
background-color: purple;
opacity: 0.4;
`;

function App() {
  return (
       <>
        <Container> 
           <Navbar />
           <Intro />
           <IntroShape />
        </Container>
        <Container>
          <Feature />
          <FeatureShape />
        </Container> 
        <Container>
          <Service />
          <ServiceShape />
        </Container> 
        <Container>
          <Price />
        </Container> 
        
      </>
  );
}

export default App;
