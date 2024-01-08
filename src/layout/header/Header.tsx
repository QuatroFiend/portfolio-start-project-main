import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {TabMenu} from "../sections/works/tabmenu/TabMenu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                <HeaderMenu />
                <MobileMenu />
{/*
                <Logo/>
*/}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;left: 0;right: 0;
  z-index: 99999;
`

