import styled from '@emotion/styled';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import { IconButtonTypes } from 'constants/commonTypes';
import { FC, MouseEventHandler, useState } from 'react';

const AmcNoWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

type AmcNoInput={
  handleCacao: MouseEventHandler<HTMLButtonElement>;
  handleCardReader: MouseEventHandler<HTMLButtonElement> ;
  handleWebMines: MouseEventHandler<HTMLButtonElement>;
}

export const AmcNoInput:FC<AmcNoInput>  = ({
  handleCacao,
  handleCardReader,
  handleWebMines
}) => {
  const [state, setState] = useState('');

  return (
    <AmcNoWrapper>
      <TextBox
        size={8}
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <IconButton
        type={IconButtonTypes.cacao}
        isFullSize
        width='2rem'
        height='1.5rem'  
        onclick={handleCacao}
  />
      <IconButton
        width='2rem'
        height='1.5rem'
        type={IconButtonTypes.cardReader}
        isFullSize
        onclick={handleCardReader}
      />
      <IconButton
        width='2rem'
        height='1.5rem'
        type={IconButtonTypes.webMinds}
        isFullSize
        onclick={handleWebMines}
      />
    </AmcNoWrapper>
  );
};
