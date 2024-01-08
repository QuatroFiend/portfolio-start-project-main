import React from 'react';
import styled from "styled-components";
import {SectionTittle} from "../../../components/SectionTittle";
import Icon from "../../../components/Icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";
import {Container} from "../../../components/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
            <SectionTittle>Testimony</SectionTittle>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                <Icon iconId={"quote"}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  position: relative;
  min-height: 50vh;
  background-color: #1F1F20;
  ${IconWrapper}{
    margin: 38px 0 72px;
  }
`


