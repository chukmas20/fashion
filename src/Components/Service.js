import styled from "styled-components";
import {useState} from "react";
import Fashion from "../images/fashion5.jpeg";
import MiniCard from "./MiniCard";
import Play from "../images/play.png";
import Player from "../images/video1.mp4";

const Conatiner =  styled.div`
  display:flex;
  height: 100%;
`;

const Left =  styled.div`
width:50%;
position: relative;
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
   display: ${(props) => props.open && "none"};
   height: 100%;
   margin-left: 100px;
   border: 4px black solid purple;
   border-radius: 5px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;

`;

const Title = styled.h1`
  
`;
const Desc = styled.h1`
   font-size: 20px;
   margin-top: 20px;
   color: purple;
   opacity: 0.4;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
   width:180px;
   border: none;
   border-radius: 10px;
   color:white;
   background-color:darkblue;
   font-size: 20px;
   padding:15px;
   margin-top: 50px;
   cursor: pointer;
   display: flex;
   align-items: center;
`;

const Icon = styled.img`
   width: 20px;
   margin-right: 10px;
`;
const Service = () => {
   const [open, setOpen] = useState(false);
    return (
       <Conatiner>
           <Left>
             <Image  open={open} src={Fashion} />
             <Video
              open={open}
               autoPlay
               loop
               controls
               src={Player}
               />
           </Left>
           <Right>
                <Wrapper >
                    <Title> Click the button below to view clothes designed by us</Title>
                    <Desc>
                       Don't hestitate to make an order for a gorgeous dress to be made for you
                       by dialing 08099442608 or by using the contact form
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={()=> setOpen(true) }> <Icon src={Play} />our designs</Button>
                 </ Wrapper >
               </Right>
       </Conatiner>
    )
}

export default Service
