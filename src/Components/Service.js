import styled from "styled-components";
import Fashion from "../images/fashion5.jpeg";
import MiniCard from "./MiniCard";

const Conatiner =  styled.div`
  display:flex;
`;

const Left =  styled.div`
width:50%;
`;

const Right =  styled.div`
  width:50%;
`;

const Wrapper = styled.div`
  padding:50px;
  display:flex;
  flex-direction:column
`;

const Image = styled.img`
   height: 100%;
   margin-left: 100px;
   border: 4px black solid purple;
   border-radius: 5px;
`;

const Title = styled.h1`
  
`;
const Desc = styled.h1`
   font-size: 20px;
   margin-top: 20px;
   color:#555;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;


const Service = () => {
    return (
       <Conatiner>
           <Left><Image src={Fashion} /></Left>
           <Right>
                <Wrapper >
                    <Title> Get started Here</Title>
                    <Desc> Simply Dial the number made available on the site to reach us</Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                 </ Wrapper >
               </Right>
       </Conatiner>
    )
}

export default Service
