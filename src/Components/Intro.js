import styled from "styled-components";
import tailor from "../images/tailor.jpg";
import AnimatedShapes from "./AnimatedShapes";
import {Link} from "react-scroll";


const Container = styled.div`
   height: calc(100vh - 50px);
   display:flex;
   padding: 20px;
   @media only screen and (max-width: 480px){
      flex-direction: column;
    }
`;

const Left = styled.div`
   width:60%;
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media only screen and (max-width: 480px) {
      width: 100%;
      height: 100%;
    }
`;

const Title = styled.h1`
   font-size: 60px;
   width: 50%;
   margin-right: 100px;
   @media only screen and (max-width: 480px) {
      width: 100%;
      font-size: 50px;
      margin-left: 30%
    }

`;

const Desc = styled.p`
   width: 60%;
   font-size: 20px;
   margin-top: 20px;
   @media only screen and (max-width: 480px){
      width:100%;
    }
`;

const Info = styled.div`
  width:60%;
  margin-top:50px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px){
    width:100%;
    flex-direction: column;
 }
  
   
  `;
  const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color:white;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    cursor:pointer;
    @media only screen and (max-width: 480px){
       margin-bottom: 20px;
    }
  `;
  const Contact = styled.div `
    display:flex;
    flex-direction: column;
  `;

  const Phone = styled.span`
     color: orange;
     font-weight: bold;
     font-size: 16px;
  `;

  const ContactText = styled.span`
  color: gray;
`;
const Right = styled.div`
  width:40%;
  display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media only screen and (max-width: 480px){
      
      width: 100%;
      height: 100%;
    }
`;

const Image =  styled.img`
  width:100%;
  opacity:0.7
`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title> We Create The best styles</Title>
                <Desc> Having your clothes in our care will be the best decision you made. Come lets make it happen</Desc>
                <Info>
                    <Button><Link to="contact" smooth={true} duration={1000}> Contact us </Link></Button>
                    <Contact>
                         <Phone> Call Us on +234 806 475 1014</Phone>
                         <ContactText> for any equiries </ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right> <Image src ={tailor}/></Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro
