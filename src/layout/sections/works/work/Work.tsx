import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {Theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";


type WorkPropsType = {
    tittle: string;
    text: string;
    src: string;


}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>VIEW PROJECT</Button>
            </ImageWrapper>


            <Description>

            <Tittle>{props.tittle}</Tittle>
            <Text>{props.text}</Text>
            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: ${Theme.color.secondaryBg};
  max-width: 540px;
  width: 330px;
  flex-grow: 1;
/* object-fit: cover;*/
  
  
  ${Link} {
    padding: 10px 0;
    
    &+${Link}{
      margin-left: 20px;
    }
  }
  
  @media${Theme.media.dekstop}{
  max-width: 540px;
}
`
const Description=styled.div`
 padding: 25px 20px;   
`

const Image = styled.img`
    width: 100%;
   height: 260px;
   object-fit: cover;
`



const Tittle = styled.h3`
  margin: 14px 0 0;
`
const Text = styled.p`
  margin: 14px 0 10px;
`
const ImageWrapper=styled.div`
 position: relative;
   
 
    ${Button}{
      opacity: 0;
      position: absolute;
      left: 50%;
      transform: translate(-50%,50%);
      top: 40%;
      transition: 0.5s ease-in-out; 

      &::before{
        width: 100%;
        height: 100%;
        
      }
    }

  &::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${Theme.animations.transition};
  }
  
  &:hover{
    &::before{
      opacity: 1;
    }
    ${Button}{
      opacity: 1;
    }
  }
  
  @media ${Theme.media.tablet}{
      &::before{
        opacity: 1;
      }
      ${Button}{
        opacity: 1;
      }
  
`
