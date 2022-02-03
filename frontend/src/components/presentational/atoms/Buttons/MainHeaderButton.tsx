import { FC } from "react";
import styled from "@emotion/styled";
import styles from '../../../../constants/constants.module.scss'

const DivStyle = styled.div`
  border: 1px solid rgb(169, 169, 169);//unselectedRowBgColor
  width: auto;
  float: left;
  font-size: 20px;//$standardTextSize
`;

const MainHeaderButtonStyle = styled.button`
  font-size: 20px;//$standardTextSize
  color: rgb(0,124,133);  //tableTitleColor
  background: rgb(231, 253, 255);//htmlBrowserDisplayBgColor4
  cursor: pointer;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  float: left;
`;

type ButtonProp = {
  text: string;

  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export const MainHeaderButton: FC<ButtonProp>=
  ({handleClick = () => {},
  text = "",
  }) => {
  return (
    <DivStyle>
      <MainHeaderButtonStyle onClick={(event) => handleClick(event, 2)}>
        {text}
      </MainHeaderButtonStyle>
    </DivStyle>
  );
  };
