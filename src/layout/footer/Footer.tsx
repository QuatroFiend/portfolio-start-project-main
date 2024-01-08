import React from 'react';
import styled from "styled-components";
import Icon from "../../components/Icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"} >
            <Name>Aleh</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} iconId={"inst"}/>
                    </SocialLink>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} iconId={"telegram"}/>
                    </SocialLink>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} iconId={"link"}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>© 2023 Aleh Salnikau, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: ${Theme.color.primaryBg};
 padding: 40px 0 ;
`

const Name = styled.span`
  ${font({family:"Josefin Sans,sans-serif",weight:700,Fmax:22,Fmin:16})}
/*  font-family: Josefin Sans,sans-serif;
  font-size: 22px;
  font-weight: 700;*/
  letter-spacing: 3px;
 
`
const SocialItem = styled.div`
  display: flex;
  gap: 20px;
`

const SocialList = styled.ul`
display: flex;
  gap: 20px;
  margin: 30px 0;
  
`

const SocialLink = styled.a`
 background-color: rgba(255,255,255,0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${Theme.animations.transition};
  
  color: ${Theme.color.accent};
  
  &:hover{
    color: ${Theme.color.primaryBg};
    transform: translateY(-4px);
  }
`
const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  opacity: 0.5;
  
 
  
`

