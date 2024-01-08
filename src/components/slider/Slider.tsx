import styled from "styled-components";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css'
import {Theme} from "../../styles/Theme";

type SlidePropsType={
    text:string,
    userName:string,

}
const Slid=(props:SlidePropsType)=>{
    return (
        <Slide>
            <Text>
                {props.text}
            </Text>
            <Name>
                @{props.userName}
            </Name>
        </Slide>
    )
}


const items = [
    <Slid  userName={"Polina Bondarik"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utabore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slid   userName={"Viktor Gallant"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utabore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slid   userName={"Gleb Kombinizon"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utabore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
];

export const Slider = () => (

    <StyledSlider>
    <AliceCarousel
        mouseTracking
        items={items}
    />
    </StyledSlider>
);

const StyledSlider = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2%;
  
`
const Name = styled.span`
font-family: Josefin Sans,sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`
const Slide = styled.div`

  text-align: center;
`
const Text = styled.p`


`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 20px;
    
    &+span{
      margin-left: 5px;
    }
    
    &.active{
      background-color:${Theme.color.accent} ;
     width: 20px;
    }
  }
`









