import React from 'react';
import styled from "styled-components";
import {SectionTittle} from "../../../components/SectionTittle";
import {TabMenu} from "./tabmenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/WorksFirst.png"
import timerImg from "./../../../assets/images/WorksSecond.png"
import {Container} from "../../../components/Container";

const worksitems=["All","landing page","React","spa",]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTittle> My Works</SectionTittle>
                <TabMenu menuItems={worksitems}/>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"flex-start"}>
                <Work tittle={"Social Network"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                      src={timerImg}/>

            <Work tittle={"Timer"}
                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                  src={socialImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
 ${FlexWrapper}{
   gap: 30px;
 }
`
