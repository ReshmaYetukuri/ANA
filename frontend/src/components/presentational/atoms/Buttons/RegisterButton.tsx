import { FC } from 'react';
import styled from '@emotion/styled';

export interface RegisterButtonProps {
  name: string;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BUTTON = styled.button`
  font-size: 0.9rem;
  height: 2.4rem;
  padding: 0.3rem 2.5rem;
  margin: 0.3rem;
  color: #fff;
  background-image: linear-gradient(
    to bottom,
    #5295ff,
    #458dff,
    #3784ff,
    #287cff,
    #1673ff
  );
  border: 1px solid #8a8686;
  //transition: all 0.2s ease-in-out;
  &:hover {
    border: 2px solid #77a3e4;
    transform: scale(1);
  }
`;

export const RegisterButton: FC<RegisterButtonProps> = ({
  name,
  onclick,
}) => (
  <BUTTON type="button" className={`button-${name}`} onClick={onclick}>
    {name}
  </BUTTON>
);
