import { FC } from "react";
import styled from "@emotion/styled";
import constants from '../../../../constants/styleConstants.module.scss';

const MainHeaderButtonStyle = styled.button`
  
  color: ${constants.tableTitleColor};  
  background: ${constants.htmlBrowserDisplayBgColor4};
  border: 1px solid ${constants.itemTitleBgColor2};
  font-weight: bold;
  font-size: ${constants.breadCrumbsFontSize};
`;

type ButtonProp = {
  text: string;
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
};

export const MainHeaderButton: FC<ButtonProp>= ({
  handleClick = () => {
    //
  },
  text
}) => (
      <MainHeaderButtonStyle onClick={(event) => handleClick(event)}>
        {text}
      </MainHeaderButtonStyle>
);

MainHeaderButton.defaultProps={
  handleClick:()=>{
    // handleclick default function
  }
}

 export default MainHeaderButton;