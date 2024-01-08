import React from 'react';
import Icon from "../../../../components/Icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Theme} from "../../../../styles/Theme";

type SkillPropsType={
    iconId:string
    title:string
    description:string

}
export const Skill = (props:SkillPropsType)=> {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
            <Icon iconId={props.iconId}/>
                </IconWrapper>
            <SkillTittle>{props.title}</SkillTittle>
            <SkillText>{props.description}</SkillText>

            </FlexWrapper>
        </StyledSkill>

    );
};

const StyledSkill =styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 62px 20px 40px;
  
  @media ${Theme.media.mobile}{
    padding: 62px 0 40px;

  }
`

export const IconWrapper=styled.div`
  position: relative;
  /*position: relative;
  width: 54px;
  box-sizing: content-box;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: red transparent;*/

  &::before{
   content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255,255,255, 0.1) ;
    transform: rotate(45deg) translate(-50%,-50%);
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left ;
/*
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: -85px;
    left: -18px;
    border-width: 0 45px 35px;
    border-style: solid;
    border-color: transparent transparent red;*/
    
    
  }
`

const SkillTittle =styled.h3`
    margin: 70px 0 10px;
  text-transform: uppercase;
`
const SkillText =styled.p`
    text-align: center;
`


