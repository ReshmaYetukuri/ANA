import styled from '@emotion/styled';
import { Label } from 'components/presentational/atoms/Labels/Label';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

export type DateBoxProps = {
  sliderInput: InputData;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};
export type InputData = {
  dateLabel: string;
  dayLabel: string;
  id: string;
  isActive?: boolean;
};

type ColorProps = {
  active?: boolean;
  fontColor?: string;
};

const CommonStyles = styled.div`
  padding: 0 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const DateBoxStyled = styled(CommonStyles)`
  ${(props: ColorProps) =>
    props.active
      ? {
          background: `${constants.htmlBrowserDisplayBgColor5}`,
          border: `2px solid ${constants.htmlBrowserDisplayBgColor5}`,
          label: {
            color: constants.basicBgColorInputField,
          },
        }
      : {
          border: `2px solid ${constants.basicColor}`,
          label: {
            color: constants.standardTextColor,
          },
        }}
`;

export const DateBox: FC<DateBoxProps> = ({ sliderInput, onClick }) => (
  <DateBoxStyled active={sliderInput.isActive} onClick={onClick}>
    <Label label={sliderInput.dateLabel} />
    <Label label={sliderInput.dayLabel} />
  </DateBoxStyled>
);
