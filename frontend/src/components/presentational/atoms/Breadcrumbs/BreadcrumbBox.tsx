import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

type BreadcrumbBoxProps = {
  name: string;
  isActive?: boolean;
  onClick?: (MouseEvent: React.MouseEvent<HTMLAnchorElement>) => void;
};

type AProps = {
  activeOrNot?: boolean;
};

const A = styled.a`
  border: 1px solid ${constants.tableTitleColor};
  text-align: center;
  padding: 0 20px 2px 20px;
  text-decoration: none;
  width: 100%;
  font-size: ${constants.breadCrumbsFontSize};
  background-color: ${(props: AProps) =>
    props.activeOrNot
      ? constants.tableTitleColor
      : constants.basicBgColorInputField};
  color: ${(props: AProps) =>
    props.activeOrNot
      ? constants.basicBgColorInputField
      : constants.tableTitleColor};
  :hover {
    color: ${(props: AProps) =>
      props.activeOrNot
        ? constants.basicBgColorInputField
        : constants.tableTitleColor};
  }
`;

export const BreadcrumbBox: FC<BreadcrumbBoxProps> = ({
  isActive,
  onClick,
  name,
}) => (
  <A activeOrNot={isActive} onClick={onClick} href="#">
    {name}
  </A>
);

BreadcrumbBox.defaultProps = {
  isActive: false,
  onClick: () => {
    //
  },
};
