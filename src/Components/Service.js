import styled from "styled-components";
import {useState} from "react";
import Fashion from "../images/fashion5.jpeg";
import MiniCard from "./MiniCard";
import Play from "../images/play.png";
import Player from "../images/video1.mp4";

const Conatiner =  styled.div`
  display:flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
   flex-direction: column;
 }
`;

const Left =  styled.div`
width:50%;
position: relative;
@media only screen and (max-width: 480px) {
   display: none;
 }
`;

const Right =  styled.div`
  width:50%;
  @media only screen and (max-width: 480px) {
   width:100%;
 }
`;

const Wrapper = styled.div`
  padding:50px;
  display:flex;
  flex-direction:column;
  @media only screen and (max-width: 480px) {
   padding: 20px;
 }
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
  @media only screen and (max-width: 480px) {
   width: 100%;
}

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

const CloseButton = styled.div`
   position: absolute;
   background-color: white;
   padding: 5px;
   border: none;
   border-radius: 5px;
   right: 5px;
   topp: 30%;
`;

const Modal = styled.div`
   width: 100vw;
   height: 100vh;
   position: absolute;
   top:0;
   left:0;
   background-color: rgba(0,0,0,0.5);
`;
const Service = () => {
   const [open, setOpen] = useState(false);
   const smallScreen = window.screen.width <= 480 ? true : false

    return (
       <Conatiner id="service">
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
                       by dialing +234 806 475 1014 or by using the contact form
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={()=> setOpen(true) }> <Icon src={Play} />our designs</Button>
                 </ Wrapper >
               </Right>
               { smallScreen && open && (
                  <Modal>
                     <Video 
                         open={open}
                         autoPlay
                         loop
                         controls
                         src={Player}     
                     />
                     <CloseButton onClick={()=> setOpen(false)}> Close </CloseButton>
                  </Modal>
               )}
       </Conatiner>
    )
}

export default Service
