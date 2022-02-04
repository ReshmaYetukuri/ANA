import styled from '@emotion/styled';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import { IconButtonTypes } from 'constants/commonTypes';
import { FC, MouseEventHandler, useState } from 'react';

const RlocWrapper = styled.div`
  display: flex;
  gap: 2px;
`;
type RlocInputProps={
handleHistory : MouseEventHandler<HTMLButtonElement> ;
handleCacao : MouseEventHandler<HTMLButtonElement> ;
}

export const RlocInput:FC<RlocInputProps> = ({
  handleHistory,
  handleCacao
}) => {
  const [state, setState] = useState('');

  return (
    <RlocWrapper>
      <TextBox
        size={12}
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <IconButton
        type={IconButtonTypes.history}
        isFullSize
        width='2rem'
        height='1.5rem'
        onclick={handleHistory}
      />
      <IconButton
        width='2rem'
        height='1.5rem'
        type={IconButtonTypes.cacao}
        isFullSize
        onclick={handleCacao}
      />
    </RlocWrapper>
  );
};
