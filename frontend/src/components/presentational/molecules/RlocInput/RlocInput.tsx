import styled from '@emotion/styled';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import { IconButtonTypes } from 'constants/commonTypes';
import { useState } from 'react';

const RlocWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const RLOCInput = () => {
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
        isFullSize={true}
        width={'1.5rem'}
        height={'1.5rem'}
      />
      <IconButton
        width={'1.5rem'}
        height={'1.5rem'}
        type={IconButtonTypes.cacao}
        isFullSize={true}
      />
    </RlocWrapper>
  );
};
