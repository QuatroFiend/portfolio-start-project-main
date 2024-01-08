import React from 'react';
import styled from "styled-components";
import {SectionTittle} from "../../../components/SectionTittle";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
            <SectionTittle>I Am Available For Freelance</SectionTittle>
            <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan=styled.section`
  position: relative;

`