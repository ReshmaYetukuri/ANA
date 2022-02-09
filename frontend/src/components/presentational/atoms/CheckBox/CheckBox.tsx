import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

type CheckBoxProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isChecked?: boolean;
  checkBoxFor?: string;
  border?: boolean;
  background?: boolean;
};
type CheckBoxStyledProps = {
  border?: boolean;
  background?: boolean;
};

const CheckBoxStyled = styled.div<CheckBoxStyledProps>`
  .check {
    visibility: hidden;
  }

  .check:before {
    border: ${(props) =>
      props.border ? `.5px solid ${constants.itemTitleBgColor2}` : 'none'};
    display: inline-block;
    font: 13px/1em sans-serif;
    height: 13px;
    border-radius: 0.5px;
    background: ${(props) =>
      props.background ? `${constants.commonButtonGradient}` : 'white'};
    padding: 0;
    vertical-align: top;
    width: 13px;
    line-height: 13px;
    visibility: visible;
    content: '';
  }

  .check:checked:before {
    background: ${(props) =>
      props.background ? `${constants.commonButtonGradient}` : 'white'};
    content: '✔';
    visibility: visible;
  }
`;

export const CheckBox: FC<CheckBoxProps> = ({
  value,
  onChange,
  isChecked,
  checkBoxFor,
  background,
  border,
}) => (
  <CheckBoxStyled background={background} border={border}>
    <input
      type="checkbox"
      defaultChecked={isChecked}
      value={value}
      onChange={onChange}
      id={checkBoxFor}
      className="check"
    />
  </CheckBoxStyled>
);

CheckBox.defaultProps = {
  isChecked: false,
  onChange: () => {
    // on change default function
  },
  background: true,
  border: true,
  checkBoxFor: '',
};
