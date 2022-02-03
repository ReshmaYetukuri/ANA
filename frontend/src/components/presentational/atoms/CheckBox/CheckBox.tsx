import { FC } from "react"
    
type CheckBoxProps ={
    value : string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    isChecked?: boolean;
    checkBoxFor:string;
}

export const CheckBox:FC<CheckBoxProps> = ({value,onChange,isChecked,checkBoxFor}) => 
    <input 
        type='checkbox' 
        defaultChecked={isChecked} 
        value={value}
        onChange={onChange}
        id={checkBoxFor}
          />
CheckBox.defaultProps={
    isChecked:false,
    onChange:()=>{
        // on change default function
    },
}

