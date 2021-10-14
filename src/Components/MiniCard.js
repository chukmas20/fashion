import styled from "styled-components";
import  Search from "../images/search.png";
import Fashion from "../images/fashion3.jpg";

const  Container = styled.div`
   width: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
   box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
   @media only screen and (max-width: 480px) {
     width: 50px
   }
`;

const Image = styled.img`
    width: 80px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const MiniCard = () => {
    return (
         <Container>
              <Image src ={Fashion} />
              
         </Container>
    )
}

export default MiniCard
