import styled from "styled-components";
import Fashion from "../images/fashion4.jpeg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
   display: flex;
   @media only screen and (max-width: 480px){
      flex-direction: column;
      padding: 10px;
    }
`;

const Left = styled.div`
   width:50%;
   @media only screen and (max-width: 480px){
      padding : 30px 20px;
    }
`;

const Image = styled.img`
   width: 80%;
   object-fit: cover;
   

`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
   font-size: 20px;
 }
  
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;

`;
const Desc = styled.p`
 font-size: 20px;
 color:#777;
 margin-top: 30px;
 
`;
const Button = styled.button`
   width:150px;
   border: none;
   padding: 15px 20px;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   border-radius: 20px;
   margin-top: 20px;
   cursor: pointer;
`;


const Right = styled.div`
   width:50%;
   display:flex;
   flex-direction: column;
   justify-content: center;
   @media only screen and (max-width: 480px) {
      width: 100%;
    }
`;

const Feature = () => {
    return (
       <Container>
           <Left><Image src ={Fashion}/></Left>
           <Right>
               <Title>
                  <b> great designs</b> <br />
                   <b>great Wears  For Women and Children</b>
               </Title>
               <SubTitle> We Know you love it just the way we make it</SubTitle>
                 <Desc>We don't just make clothes that slay, we make you smile when you dress up</Desc>
               <Button> Learn More</Button>
           </Right>
           <AnimatedShapes />
       </Container>
    )
}

export default Feature
