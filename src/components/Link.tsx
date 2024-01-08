import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Link=styled.a`
  padding: 10px;
font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  z-index: 0;
  
  &:hover{
    &::before{
      height: 10px;
     

    }
  }
 
    
  &::before{
    content: "";
    display: inline-block;
    /*height: 10px;*/
    background-color: ${Theme.color.accent};
   
    
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;
   z-index: -1;
    height: 0;
    transition: ${Theme.animations.transition};
  }
  
`