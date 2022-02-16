import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

const Button = styled.button<ButtonProp>`
  background: ${constants.commonButtonGradient};
  border-width: 1px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  border-style: outset;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-color: ${constants.itemTitleBgColor2};
  :hover {
    border-color: ${constants.popupWindowStanadardBgColor};
    box-shadow: 0px 0px 3px 1px ${constants.popupWindowStanadardBgColor};
  }
`;

type ButtonProp = {
  height?: string;
  width?: string;
};

type ButtonProps = {
  name: string;
  height?: string;
  width?: string;
  onClick?: () => void;
};

export const CommonButton = ({
  name,
  onClick = () => {
    //
  },
  height,
  width,
}: ButtonProps) => (
  <Button
    className={`button-${name}`}
    height={height}
    width={width}
    onClick={onClick}
  >
    {name}
  </Button>
);

CommonButton.defaultProps = {
  height: '',
  width: '',
  onClick: () => {
    //
  },
};
