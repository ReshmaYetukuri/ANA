import styled from '@emotion/styled';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import { IconButtonTypes } from 'constants/commonTypes';
import { FC } from 'react';

type InputWithSearchIconProps = {
  textBoxOnChange: React.ChangeEventHandler<HTMLInputElement>;
  textBoxValue: string;
  textBoxWidth?: number;
};

const MainDiv = styled.div`
  display: flex;
`;

export const InputWithSearchIcon: FC<InputWithSearchIconProps> = ({
  textBoxOnChange,
  textBoxValue,
  textBoxWidth,
}) => (
  <MainDiv>
    <TextBox
      size={textBoxWidth}
      onChange={textBoxOnChange}
      value={textBoxValue}
    />
    <IconButton
      type={IconButtonTypes.search}
      width="27px"
      height="27px"
      isFullSize
    />
  </MainDiv>
);

InputWithSearchIcon.defaultProps = {
  textBoxWidth: 1,
};
