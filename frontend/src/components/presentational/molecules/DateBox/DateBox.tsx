import styled from '@emotion/styled';
import { Label } from 'components/presentational/atoms/Labels/Label';
import { FC } from 'react';

export type DateBoxProps={
    sliderInput : InputData;
    onClick: React.MouseEventHandler<HTMLDivElement>;    
}
export type InputData = {
    dateLabel:string;
    dayLabel:string;
    id :string;
    isActive?:boolean;
}

type ColorProps = {
    active?: boolean;
    fontColor?:string;
}

const CommonStyles= styled.div`
    padding:0 7px; 
    display:flex;
    flex-direction:column;
`

const DateBoxStyled = styled(CommonStyles)`
${(props:ColorProps) => 
props.active ? {
    background: "#304f8f",
    border: "2px solid #304f8f",
    label:{
        color: 'white'
    }
} :
 {
    border: "2px solid #2c8090",
    label:{
        color: 'black'
    }
}
}`

export const DateBox:FC<DateBoxProps> = ({sliderInput,onClick}) => (
    <DateBoxStyled active={sliderInput.isActive} onClick={onClick}>
        <Label label={sliderInput.dateLabel}  />
        <Label label={sliderInput.dayLabel}  />
    </DateBoxStyled>
)
