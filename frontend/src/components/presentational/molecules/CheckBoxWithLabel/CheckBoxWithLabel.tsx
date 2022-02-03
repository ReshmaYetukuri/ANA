import { CheckBox } from "components/presentational/atoms/CheckBox/CheckBox"
import { Label } from "components/presentational/atoms/Labels/Label"
import { FC } from "react"

type CheckBoxWithLabelProps={
    value : string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    isChecked?: boolean;
    checkBoxFor:string;
    label:string;
    fontColor?:string;
    onClick?: React.MouseEventHandler<HTMLLabelElement>;
}

export const CheckBoxWithLabel:FC<CheckBoxWithLabelProps>=({value,
    onChange,
    isChecked,
    checkBoxFor,
    label,
    fontColor,
    onClick})=>
        <>
            <CheckBox value={value} checkBoxFor={checkBoxFor} isChecked={isChecked} onChange={onChange}/>
            <Label label={label} fontColor={fontColor} onClick={onClick} />
        </>
CheckBoxWithLabel.defaultProps={
    onChange:()=>{
        // on change default function
        },
    isChecked:false,
    fontColor:'black',
    onClick:()=>{
        // on click default function
        },
}
