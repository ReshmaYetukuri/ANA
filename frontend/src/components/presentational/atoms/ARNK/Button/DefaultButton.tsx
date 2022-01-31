import { FC } from 'react';
import styled from '@emotion/styled';

export interface DefaultButtonProps {
  className?: string;
  label?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BUTTON = styled.button`
  font-size: 0.8rem;
  height: 1.7rem;
  padding: 0.1rem 2.5rem;
  margin: 0.3rem;
  background: linear-gradient(
    rgb(203, 225, 236) 10%,
    #fff 40%,
    rgb(203, 225, 236)
  );
  border: 1px solid rgb(138, 134, 134);
  &::first-letter {
    text-decoration: underline;
  }
  &:hover {
    transform: scale(0.97);
  }
`;

export const DefaultButton: FC<DefaultButtonProps> = ({
  label,
  handleClick,
}) => <BUTTON type="button" onClick={handleClick}>
      {label}
    </BUTTON>
