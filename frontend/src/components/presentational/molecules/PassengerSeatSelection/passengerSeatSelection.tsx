import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import { Label } from 'components/presentational/atoms/Labels/Label';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';
import { RadioWithLabel } from '../RadioWithLabel/RadioWithLabel';

const Main = styled.div`
  width: 100%;
  border: 3px solid ${constants.basicColor};
  display: flex;
  font-size: ${constants.standardSubTextsize};
`;
const PassengerId = styled.div`
  width: 12%;
  align-items: center;
  display: flex;
  padding: 4px;
  background-color: ${constants.popupWindowHeaderColor};
  label {
    color: ${constants.basicBgColorInputField};
  }
`;
const SeatSelection = styled.div`
  width: 88%;
  background-color: ${constants.htmlBrowserDisplayBgColor4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    align-items: center;
    padding-left: 3px;
  }
`;
const PassengerName = styled.span`
font-size: ${constants.standardSubTextsize};
label{
  line-height: 1.85rem;
}  
}`;
const SeatNo = styled.span`
  padding-right: 1rem;
  align-items: center;
  display: flex;
  label {
    padding-left: 5px;
  }
  input{
    height: 1.25rem;
    margin-left: 5px;
  }
  svg{
    width: 1.7rem;
  }
`;
type PassengerSeatSelectionProps = {
  handleRadioClick: React.ChangeEventHandler<HTMLInputElement>;
  textboxState: string;
  setTextboxState: React.Dispatch<React.SetStateAction<string>>;
  children: JSX.Element | JSX.Element[] | string;
  data: {
    id: string;
    name: string;
    seatNo: string;
  };
};

export const PassengerSeatSelection: FC<PassengerSeatSelectionProps> = ({
  data,
  children,
  handleRadioClick,
  textboxState,
  setTextboxState,
}) => (
  <Main>
    <PassengerId>
      <RadioWithLabel
        groupName=""
        value=""
        radioFor="passengerId"
        label="p1"
        radioButtonChange={handleRadioClick}
      />
    </PassengerId>
    <SeatSelection>
      <PassengerName>
        <Label label={data.name} />
      </PassengerName>
      <SeatNo>
        {children}
        <TextBox
          size={1}
          width="2rem"
          onChange={(e) => setTextboxState(e.target.value)}
          value={textboxState}
        />
        <Label label={data.seatNo} />
      </SeatNo>
    </SeatSelection>
  </Main>
);
