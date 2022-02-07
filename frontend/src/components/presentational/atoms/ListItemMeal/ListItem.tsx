import styled from "@emotion/styled";
import { FC } from "react";

import ListIcon from "../../../../assets/svgr-components/IconBottomTitleTst";

const ListIconDiv = styled("div")`
width: 0.5rem;
height: 0.5rem;
margin-right: 2rem;
align-self: center;
display: flex;
 
`;
const Link = styled("a")`
  font-family: "NotoSans-light";
  color: rgb(0, 60, 255);
  & :active {
    color: red;
  }
`;

type ListItemProps = {
  link: string;
  href: string;
  onClick: (value: string) => void;
};

const ListItem:FC<ListItemProps> = ({
  link,
  href,
  onClick
}) => 
  (
    <>
      <ListIconDiv>
        <ListIcon />
      </ListIconDiv>
      <Link href={href}
      target="_blank"
      onClick={() => onClick(link)}>
        <b>{link}</b>
      </Link>
    </>
  );


export default ListItem;
