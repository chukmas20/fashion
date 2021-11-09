import styled from "styled-components";
import {useRef, useState} from "react";
import Map from "../images/map.png";
import Phone from "../images/phone.png";
import emailjs from 'emailjs-com';





const Container = styled.div`
   height:90%;
   background: url("https://image.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg");
`;

const Wrapper = styled.div`
   height: 100%;
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   @media only screen and (max-width: 480px) {
    flex-direction: column;
 }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
      width: 100%;
  }
`;
const Form = styled.form`
    height: 250px;
    display:flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
     }
`;

const Done = styled.div`
   color: green;
   padding: 5px;
   font-size 16px;
`;

const Title = styled.h1`
   margin: 50px;
  margin-top : 0px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    margin:20px;
 }
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;  
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        height: 50%;
        margin-right : 0;
     }
`;

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        width: 50%;
     }    
`;

const Input = styled.input`
    width: 200px;
    padding: 20px;
    outline:none;
    border:none;
    font-size: 20px;
    font-size:16px;
    @media only screen and (max-width: 480px) {
        padding: 5px;
        margin: 5px;
        margin-left: 50px;
       
     }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  border:none;
  outline: none;
  font-size: 20px;
  @media only screen and (max-width: 480px) {
      padding: 5px;
      margin-top: 20px;
      font-size:16px;
 }

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
@media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
 }

`;

const AddressContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 10px;
 }
`;

const AddressItem = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 50px;
   @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
 }
`;

const Icon = styled.img`
   width: 20px;
   margin-right: 20px;
   @media only screen and (max-width: 480px) {
     width:15px;
 }
`;

const Text = styled.span`
   font-size: 20px;
   margin-right: 15px;
   @media only screen and (max-width: 480px) {
 }
`;


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false);


    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_fbw4xi8',
             'template_nmkl1wo',
             formRef.current, 
            'user_AmdjZkDE9OtrBDgpjgoSm'
            )
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <Container id="contact">
            <Wrapper>
                 <FormContainer>
                   <Done>{done &&  "Thank you for contacting us, we will reply soon"}</Done>
                   <Title> Contact Us </Title>
                     <Form ref={formRef} onSubmit={handleSubmit}>
                     <LeftForm>
                         <Input  placeholder="Your Name " name="user_name" required/>
                         <Input  placeholder="Your Email" name="user_email" required/>
                         <Input  placeholder=" Subject " name="user_subject" required/>
                     </LeftForm>
                     <RightForm>
                         <TextArea  placeholder=" Your Message" name="message" required />
                         <Button type="submit"> Send </Button>
                     </RightForm>   
                     </Form>
                 </FormContainer>
                 <AddressContainer>
                      <AddressItem>
                          <Icon src={Map}/>
                          <Text>Block G flat 2,<br /> Phil Kruz estate Kubwa, Abuja.</Text>
                      </AddressItem>
                      <AddressItem>
                          <Icon src={Phone}/>
                          <Text> +234 806 475 1014</Text>
                      </AddressItem>
                      <AddressItem>
                          <Text>
                                  <a href="https://www.instagram.com/creamydelacream4/" target="_blank">
                                     <i class="fab fa-instagram" style={{margin:"20px", color:"red"}}> </i>
                                   </a>
                               <i class="fab fa-whatsapp" style={{margin:"20px", color:"green"}}>
                               </i>
                               <i class="fab fa-facebook-square" style={{margin:"20px", color:"blue"}}>
                               </i>                  
                        </Text>
                      </AddressItem>
                 </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact
