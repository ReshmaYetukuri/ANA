import styled from '@emotion/styled';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import { IconButtonTypes } from 'constants/commonTypes';
import { FC, MouseEventHandler } from 'react';

const RlocWrapper = styled.div`
  display: flex;
  gap: 2px;
`;
type RlocInputProps = {
  handleHistory: MouseEventHandler<HTMLButtonElement>;
  handleCacao: MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export const RlocInput: FC<RlocInputProps> = ({
  handleHistory,
  handleCacao,
  onChange,
  value,
}) => (
  <RlocWrapper>
    <TextBox size={7} onChange={onChange} value={value} />
    <IconButton
      type={IconButtonTypes.history}
      isFullSize
      width="1.5rem"
      height="1.3rem"
      onclick={handleHistory}
    />
    <IconButton
      width="1.5rem"
      height="1.3rem"
      type={IconButtonTypes.cacao}
      isFullSize
      onclick={handleCacao}
    />
  </RlocWrapper>
);
