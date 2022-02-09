import styled from '@emotion/styled';
import { FC } from 'react';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { IconButtonTypes } from 'constants/commonTypes';
import { DateBox, InputData } from '../DateBox/DateBox';

type DateSliderProps = {
  dates: InputData[];
  selected: (e: InputData) => void;
  leftArrowClick?: React.MouseEventHandler<HTMLButtonElement>;
  rightArrowClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const DateSliderStyled = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 3.29rem;
  }
`;

export const DateSlider: FC<DateSliderProps> = ({
  dates,
  selected,
  leftArrowClick,
  rightArrowClick,
}) => (
  <DateSliderStyled>
    <IconButton
      type={IconButtonTypes.arrowLeft}
      width="32px"
      height="50px"
      isFullSize
      onclick={leftArrowClick}
    />
    {dates.map((date) => (
      <div key={date.id}>
        <DateBox
          sliderInput={date}
          onClick={() => {
            selected(date);
          }}
        />
      </div>
    ))}
    <IconButton
      type={IconButtonTypes.arrowRight}
      width="32px"
      height="50px"
      isFullSize
      onclick={rightArrowClick}
    />
  </DateSliderStyled>
);
DateSlider.defaultProps = {
  leftArrowClick: () => {
    // Left Arrow Click default function
  },
  rightArrowClick: () => {
    // Right Arrow Click default function
  },
};
