import styled from "styled-components";
import Log from "../images/logo.jpg";
import Toggle from "./Toggle";
import {Link}  from "react-scroll";



const Container = styled.div`
 height:50px;
`;
const Wrapper  = styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
align-items: center;
`
const Left = styled.div`
 width:60%;
 display:flex;
 align-Items: center;
 justify-content:space-between
`
const Image = styled.img`
 font-weight:bold;
 height: 40px;
 font-weight: bold;
 margin-left: 50px;
 border-radius: 15px;
 left: 10px;
 @media only screen and (max-width: 480px){
  margin-left: 10px;
}
`;
const Menu = styled.ul`
  display:flex;
  list-style:none;
  cursor: pointer;

  @media only screen and (max-width: 480px){
    display:none;
  }
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color:grey;
`;
const Button = styled.button`
   border: 2px solid black;
   padding: 10px 15px;
   background-color:orange;
    color:white;
    font-weight: bold;
    border-radius: 10px;
    cursor:pointer;
`;


const Navbar = () => {
   
    return (
         <Container>
             <Wrapper>
                <Left>
                 {/* <Logo> Awesome styles</Logo> */}
                 <Image src ={Log}/>
                 <Menu>
                     <MenuItem >Home</MenuItem>
                    <MenuItem ><Link to="feature" smooth={true} duration={1000}>About</Link></MenuItem>
                     <MenuItem > <Link to="service" smooth={true} duration={1000}>Designs</Link></MenuItem>
                     <MenuItem > <Link to="pricing" smooth={true} duration={1000}>Pricing</Link></MenuItem>
                     <MenuItem> <Link to="contact" smooth={true} duration={1000}>Contact </Link></MenuItem>
                 </Menu>
                 </Left>
             </Wrapper>
         </Container>
    )
}

export default Navbar
