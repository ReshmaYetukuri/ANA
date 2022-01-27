import styled from '@emotion/styled';

type BreadcrumbBoxProps = {
  name: string;
  isActive: boolean;
  onClick?: (MouseEvent: React.MouseEvent<HTMLAnchorElement>) => void;
};

type AProps = {
  activeOrNot?: 'active' | 'inactive';
};

const A = styled.a`
  border: 1px solid rgb(3, 115, 122);
  height: 30px;
  text-align: center;
  border-color: rgb(92, 151, 156);
  padding: 0 20px 0 20px;
  text-decoration: none;
  width: 100%;
  margin-left: 20px;
  font-size: 15px;
  line-height: 1.6rem;
  background-color: ${(props: AProps) =>
    props.activeOrNot === 'active' ? 'rgb(16,113,112)' : 'white'};
  color: ${(props: AProps) =>
    props.activeOrNot === 'active' ? 'white' : 'rgb(75, 138, 117)'};
  :hover {
    color: ${(props: AProps) =>
      props.activeOrNot === 'active' ? 'white' : 'rgb(75, 138, 117)'};
  }
`;

export const BreadcrumbBox = ({
  isActive,
  onClick,
  name,
}: BreadcrumbBoxProps) => (
  <A activeOrNot={isActive ? 'active' : 'inactive'} onClick={onClick} href="">
    {name}
  </A>
);

BreadcrumbBox.defaultProps = {
  onClick: false,
};
