import { FC } from 'react';

interface RadioProps {
  groupName: string;
  value: string;
  isSelected?: boolean;
  radioButtonChange?: React.ChangeEventHandler<HTMLInputElement>;
  radioFor: string;
}

export const Radio: FC<RadioProps> = ({
  groupName,
  radioButtonChange,
  value,
  isSelected,
  radioFor,
}) => (
  <input
    type="radio"
    name={groupName}
    value={value}
    defaultChecked={isSelected}
    onChange={radioButtonChange}
    id={radioFor}
  />
);

Radio.defaultProps = {
  isSelected: false,
  radioButtonChange: () => {
    // on change default function
  },
};
