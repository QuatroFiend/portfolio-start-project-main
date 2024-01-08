import React from 'react';
import styled from "styled-components";
import {SectionTittle} from "../../../components/SectionTittle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts id={"contact"}>
            <Container>
            <SectionTittle>Contact</SectionTittle>
            <StyledForm>
                <Field placeholder={"Name"}/>
                <Field placeholder={"Subject"}/>
                <Field as={"textarea"} placeholder={"Message"}/>
                <Button  type={"submit"}>Send Message</Button>
            </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts=styled.section`
  

`

const StyledForm=styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
    max-width:540px ;
    width: 100%;
    gap:16px ;
  margin: 0 auto;
  textarea{
    height: 155px;
    resize: none;
  }
`
const Field=styled.input`
    width: 100%;
  border: 1px solid ${Theme.color.borderColor};
  background-color: ${Theme.color.secondaryBg};
  padding: 7px  15px;


  font-family: Poppins,sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${Theme.color.font};

 
  
  &::placeholder{
    color:${Theme.color.placeholderColor}
  }
  
  &:focus-visible{
    outline: 1px solid ${Theme.color.placeholderColor};
  }
`
