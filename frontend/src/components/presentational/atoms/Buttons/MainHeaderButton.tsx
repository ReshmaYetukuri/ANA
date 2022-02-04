import { FC } from "react";
import styled from "@emotion/styled";
import constants from '../../../../constants/styleConstants.module.scss';

const DivStyle = styled.div`
  border: 1px solid rgb(169, 169, 169);//unselectedRowBgColor
  width: auto;
  float: left;
  font-size: ${constants.standardTextSize};
`;

const MainHeaderButtonStyle = styled.button`
  
  color: ${constants.tableTitleColor};  
  background: ${constants.htmlBrowserDisplayBgColor4};
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
  }) => 
   (
    <DivStyle>
      <MainHeaderButtonStyle onClick={(event) => handleClick(event, 2)}>
        {text}
      </MainHeaderButtonStyle>
    </DivStyle>
  );
  

 export default MainHeaderButton;