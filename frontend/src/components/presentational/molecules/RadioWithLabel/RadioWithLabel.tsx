import { Radio } from "components/presentational/atoms/Inputs/Radio"
import { Label } from "components/presentational/atoms/Labels/Label"
import { FC } from "react"

type RadioWithLabelProps={
    groupName:string;
    value:string;
    isSelected?: boolean;
    radioButtonChange?: React.ChangeEventHandler<HTMLInputElement>;
    radioFor:string;
    label:string;
    fontColor?:string;
    onClick?: React.MouseEventHandler<HTMLLabelElement>;
}

export const RadioWithLabel:FC<RadioWithLabelProps>= ({
    groupName,
    value,
    isSelected, 
    radioFor, 
    radioButtonChange, 
    label,
    fontColor,
    onClick,
})=>
    <>
        <Radio groupName={groupName} value={value} radioFor={radioFor} isSelected={isSelected} radioButtonChange={radioButtonChange} />
        <Label label={label} labelFor={radioFor} fontColor={fontColor} onClick={onClick}/>
    </>

RadioWithLabel.defaultProps={
    isSelected:false,
    radioButtonChange:()=>{
    // on change default function
},
    fontColor:'black',
    onClick:()=>{
        // on change default function
    },
    

}