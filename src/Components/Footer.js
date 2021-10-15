import styled from "styled-components";


const Container = styled.div`
  height: 10%;
  background-color: black;
  color: white
`;

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px;
   @media only screen and (max-width: 480px) {
     padding: 10px;
 }
`;

const List = styled.ul`
 padding: 0;
 margin: 0;
 list-style: none;
 display: flex;
`;

const ListItem = styled.li`
   margin-right : 20px;
   @media only screen and (max-width: 480px) {
     margin-right: 10px;
     font-size: 14px;
 }
`;

const CopyRight = styled.span`
@media only screen and (max-width: 480px) {
     font-size: 14px;
 }
`;


const Footer = () => {
    return (
         <Container>
              <Wrapper>
                   <List>
                       <ListItem>onixz</ListItem>
                   </List>
                   <CopyRight>  &copy; fashion 2021</CopyRight>
              </Wrapper>
         </Container>
    )
}

export default Footer
