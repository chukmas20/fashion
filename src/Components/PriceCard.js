import styled from "styled-components";

const Container = styled.div`
   padding: 20px;
   -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
   box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
   @media only screen and (max-width: 480px) {
     width: 50px
   };
   background-color: white;
   border-radius: 10px;
   display:flex;
   flex-direction: column;
   align-items: center;
   margin-right: 50px;
   @media only screen and (max-width: 480px) {
      margin-right : 0;
      margin-bottom: 10px;
      padding: 10px;
      width:100%;
   }
`;
const PriceContainer = styled.div`
   display: flex;
   align-items: center;  
`;
const Type = styled.li`
margin : 30px 0;
font-weight: bold;
@media only screen and (max-width: 480px) {
   margin: 10px;
   font-size: 16px;
   text-align: center;
}
`;
const List = styled.ul`
 list-style : none;
   
`;
const ListItem = styled.li`
   margin : 30px 0;
   @media only screen and (max-width: 480px) {
      margin: 10px;
      font-size: 12px;
   }
`;
const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    font-size:16px;
    padding: 15px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
      font-size:12px;
      padding:5px;
   }
`;
const Price = styled.span`
   font-weight: bold;
   font-size: 30px; 
   @media only screen and (max-width: 480px) {
     font-size: 30px;
   } 
`;
const PriceCard = ({price, type}) => {
    return (
       <Container>
             <PriceContainer>
                <Price> ₦{price} </Price>
            </PriceContainer>
                <List>
                    <Type> {type} </Type>
                </List>
                <Button> Price </Button>
       </Container>
    )
}

export default PriceCard
