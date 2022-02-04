import styled from "@emotion/styled";
import { FC} from "react";
// import { JaAvailabilityDayofweekleftButton, JaAvailabilityDayofweekrightButton } from 'assets/svgr-components';
// import { ArrowLeft } from "../../atoms/ArrowLeft/ArrowLeft"
// import { ArrowRight } from "../../atoms/ArrowRight/ArrowRight"
import IconButton from "components/presentational/atoms/Buttons/IconButton";
import { IconButtonTypes } from "constants/commonTypes";
import { DateBox,InputData, } from "../DateBox/DateBox";

type DateSliderProps={
    dates:InputData[];
    selected: (e:InputData)=> void;
}

const DateSliderStyled= styled.div`
display: flex;
svg {
    height:3.29rem;
  }
`

export const DateSlider:FC<DateSliderProps> = ({dates,selected}) =>(
    <DateSliderStyled>
        <IconButton type={IconButtonTypes.arrowLeft} width="35px" height="52px" isFullSize />
        {dates.map((date) => (
            <div key={date.id}>
                <DateBox sliderInput={date} onClick={() => {
                    selected(date);
                } } />
            </div>
        )
        )}
        <IconButton type={IconButtonTypes.arrowRight} width="35px" height="52px" isFullSize />
    </DateSliderStyled>
)