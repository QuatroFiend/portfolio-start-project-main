import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Items} from "../HeaderMenu/HeaderMenu";




export const MobileMenu = () => {
    const[menuIsOpen,setmenuIsOpen]=useState(false)
    const onBurgerBtnClick= ()=>{setmenuIsOpen(!menuIsOpen)}
    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span> </span>
            </BurgerButton>

            <MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
            <ul>
                {Items.map((item:string,index:number)=>{
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>

                })}
            </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
   display: none;
  @media ${Theme.media.tablet} {
    display:block;
    
  }
`

const MobileMenuPopup=styled.div<{isOpen:boolean}>`
   position: fixed;
  top: 0;left: 0;right: 0;bottom: 0;
  z-index: 99999;
  background-color:rgba(31,31,32, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 1s ease-in-out;
  
  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 1s ease-in-out;
  }

  ${props =>props.isOpen && css<{isOpen:boolean}> `
    transform: translateY(0);
    & ul{
      gap:30px;
      
    }
  `}
`
const BurgerButton=styled.button<{isOpen:boolean}>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index:9999999 ;
  
  span{
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.color.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    
    
      ${props =>props.isOpen && css<{isOpen:boolean}> `
        background-color: rgba(255, 255, 255, 0);
      `}

    
    &::before{
      content: "";
      display: block;
      width: 36px;
      height: 2px;
        background-color: ${Theme.color.font};
      position: absolute;
      transform: translateY(-10px);
        

        ${props =>props.isOpen && css<{isOpen:boolean}> `
          transform: rotate(-45deg) translateY(0);
      `}
        
    }
    &::after{
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${Theme.color.font};
      position: absolute;
      transform: translateY(10px);

      ${props =>props.isOpen && css<{isOpen:boolean}> `
        transform:  rotate(45deg) translateY(0);
        width: 36px;
      `}
      
    }
  }

`

const Link=styled.a`
  font-family: Josefin Sans,sans-serif;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: transparent;
  transition: ${Theme.animations.transition};
`
const Mask=styled.span`
position: absolute;
top: 0;left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
 /* outline: 1px solid red;*/
  color: ${Theme.color.accent};
  
  &+&{
    top:50%;
    span{
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem=styled.li`
position: relative;
  &::before{
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${Theme.color.accent};
    position: absolute;
    
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0);
  }
  &:hover{
    &::before{
      transform: scale(1);
    }
    
    ${Mask}{
   transform: skewX(12deg) translateX(5px);
      color: ${Theme.color.font};
      
     &+${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
  }
   
  }
`