import { FC } from "react"
    
type CheckBoxProps ={
    value : string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    isChecked?: boolean;
}

export const CheckBox:FC<CheckBoxProps> = ({value,onChange,isChecked}) => 
    <input 
        type='checkbox' 
        defaultChecked={isChecked} 
        value={value}
        onChange={onChange}
          />
CheckBox.defaultProps={
    isChecked:false,
    onChange:()=>{
        // on change default function
    },
}

