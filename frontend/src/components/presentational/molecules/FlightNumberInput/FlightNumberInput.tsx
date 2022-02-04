import styled from '@emotion/styled';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import { IconButtonTypes } from 'constants/commonTypes';
import { FC } from 'react';

type FlightNumberInputProps = {
  carrierTextBoxOnChange: React.ChangeEventHandler<HTMLInputElement>;
  flightNumberTextBoxOnChange: React.ChangeEventHandler<HTMLInputElement>;
  carrierTextBoxValue: string;
  flightNumberTextBoxValue: string;
  carrierTextBoxWidth?: number;
  flightNumberTextBoxWidth?: number;
};

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.7rem;
`;

export const FlightNumberInput: FC<FlightNumberInputProps> = ({
  carrierTextBoxOnChange,
  carrierTextBoxValue,
  flightNumberTextBoxOnChange,
  flightNumberTextBoxValue,
  carrierTextBoxWidth,
  flightNumberTextBoxWidth,
}) => (
  <MainDiv>
    <TextBox
      size={carrierTextBoxWidth}
      onChange={carrierTextBoxOnChange}
      value={carrierTextBoxValue}
    />
    <IconButton
      type={IconButtonTypes.search}
      width="32px"
      height="32px"
      isFullSize
    />
    <TextBox
      size={flightNumberTextBoxWidth}
      onChange={flightNumberTextBoxOnChange}
      value={flightNumberTextBoxValue}
    />
  </MainDiv>
);

FlightNumberInput.defaultProps = {
  carrierTextBoxWidth: 1,
  flightNumberTextBoxWidth: 9,
};
