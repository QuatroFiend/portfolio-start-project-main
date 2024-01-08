import React from 'react';
import Icon from "../Icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
        <a href="">
            <Icon iconId={'treelines'}/>
        </a>
        </StyledLogo>
    );
};

const StyledLogo=styled.div`
margin-top: 10px;
`
