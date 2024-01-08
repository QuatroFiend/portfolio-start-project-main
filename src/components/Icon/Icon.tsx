import React from 'react';
import IconsSprite from '../../assets/images/Sprite.svg'

type IconPropsType = {
    iconId?: string
    width?:string
    height?:string
    viewBox?:string

}
export const Icon = (props: IconPropsType) => {
    return (
        <svg   width={props.width|| "50"}  height={props.height||"47"} /*viewBox={props.viewBox||"0 10 50 20"}*/  xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};

export default Icon;