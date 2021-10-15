import styled from "styled-components";
import PriceCard from "./PriceCard";


const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
      flex-direction: column;
      padding: 50px;
  }
`;


const Price = () => {
    return (
        <Container id="pricing">
            <PriceCard price="6000" type="Ankara skirt and blouse"/>
            <PriceCard  price="8000" type="Lace skirt and blouse" />
            <PriceCard price="4000" type=" A shape gown" />
            <PriceCard price="8000" type=" Children gown" />
        </Container>
    )
}

export default Price
