import { Radio } from 'components/presentational/atoms/Radio/Radio';
import { Label } from 'components/presentational/atoms/Labels/Label';
import { FC } from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
  display: flex;
  align-items: center;
  label {
    padding-left: 5px;
  }
`;

type RadioWithLabelProps = {
  groupName: string;
  value: string;
  isSelected?: boolean;
  radioButtonChange?: React.ChangeEventHandler<HTMLInputElement>;
  radioFor?: string;
  label: string;
  fontColor?: string;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
};

export const RadioWithLabel: FC<RadioWithLabelProps> = ({
  groupName,
  value,
  isSelected,
  radioFor,
  radioButtonChange,
  label,
  fontColor,
  onClick,
}) => (
  <Div>
    <Radio
      groupName={groupName}
      value={value}
      radioFor={radioFor}
      isSelected={isSelected}
      radioButtonChange={radioButtonChange}
    />
    <Label
      label={label}
      labelFor={radioFor}
      fontColor={fontColor}
      onClick={onClick}
    />
  </Div>
);

RadioWithLabel.defaultProps = {
  isSelected: false,
  radioButtonChange: () => {
    // on change default function
  },
  fontColor: '',
  onClick: () => {
    // on click default function
  },
  radioFor:''
};
