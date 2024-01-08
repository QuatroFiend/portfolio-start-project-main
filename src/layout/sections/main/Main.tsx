import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/Me.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import Typewriter from "typewriter-effect";
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <SmallText>
                            Hi There
                        </SmallText>
                        <NameTittle>I am <span>Aleh Salnikau</span></NameTittle>
                        <MainTittle>
                            <p>A Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.','A Frontend Developer.','A Web Designer'],
                                    autoStart: true,
                                    loop: true,
                                    delay:150
                                }}
                            />


                        </MainTittle>
                    </div>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                    <PhotoWrapper>
                        <Photo src={photo}></Photo>
                    </PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #252527;
  display: flex;
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${Theme.color.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${Theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${Theme.media.mobile} {
    width: 310px;
    height: 380px;

  }
`
const MainTittle = styled.h1`
  /*font-size: 27px;
  font-weight: 400;*/
  ${font({weight: 400, Fmax: 27, Fmin: 20})};
  p{
    display: none;
  }


`
const NameTittle = styled.h2`
  ${font({family: "Josefin Sans,sans-serif", weight:700, Fmax:50, Fmin:36})}
 /* font-size: 50px;*/
    /*  font-family: Josefin Sans,sans-serif;
  font-weight: 700;*/ letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 10px;
      background-color: ${Theme.color.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;

    }

  }

  @media ${Theme.media.mobile} {
    margin: 15px 0 22px;
    height: 14px;
  }

`
const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;

`