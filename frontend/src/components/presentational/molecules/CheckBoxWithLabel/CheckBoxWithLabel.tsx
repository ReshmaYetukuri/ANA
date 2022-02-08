import { CheckBox } from "components/presentational/atoms/CheckBox/CheckBox";
import { Label } from "components/presentational/atoms/Labels/Label";
import { FC } from "react";
import styled from '@emotion/styled';

type CheckBoxWithLabelProps={
    value : string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    isChecked?: boolean;
    checkBoxFor:string;
    label:string;
    fontColor?:string;
    onClick?: React.MouseEventHandler<HTMLLabelElement>;
    border?:boolean;
    background?:boolean;
}

const Div=styled.div`
    display: flex;
`
export const CheckBoxWithLabel:FC<CheckBoxWithLabelProps>=({value,
    onChange,
    isChecked,
    checkBoxFor,
    label,
    fontColor,
    onClick,
    background,
    border})=>
        <Div>
            <CheckBox value={value} 
            checkBoxFor={checkBoxFor} 
            isChecked={isChecked} 
            onChange={onChange} 
            background={background} 
            border={border}
            />
            <Label label={label} fontColor={fontColor} onClick={onClick} />
        </Div>
CheckBoxWithLabel.defaultProps={
    onChange:()=>{
        // on change default function
        },
    isChecked:false,
    fontColor:'black',
    onClick:()=>{
        // on click default function
        },
    background:true,
    border:true
}
