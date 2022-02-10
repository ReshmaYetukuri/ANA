import styled from '@emotion/styled';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import { IconButtonTypes } from 'constants/commonTypes';
import { FC, MouseEventHandler } from 'react';

const AmcNoWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

type AmcNoInput = {
  handleCacao: MouseEventHandler<HTMLButtonElement>;
  handleCardReader: MouseEventHandler<HTMLButtonElement>;
  handleWebMines: MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export const AmcNoInput: FC<AmcNoInput> = ({
  handleCacao,
  handleCardReader,
  handleWebMines,
  onChange,
  value,
}) => (
  <AmcNoWrapper>
    <TextBox size={20} onChange={onChange} value={value} />
    <IconButton
      type={IconButtonTypes.cacao}
      isFullSize
      width="2rem"
      height="1.35rem"
      onclick={handleCacao}
    />
    <IconButton
      width="2rem"
      height="1.35rem"
      type={IconButtonTypes.cardReader}
      isFullSize
      onclick={handleCardReader}
    />
    <IconButton
      width="2rem"
      height="1.35rem"
      type={IconButtonTypes.webMinds}
      isFullSize
      onclick={handleWebMines}
    />
  </AmcNoWrapper>
);
