import { FC } from "react";
import styled from "@emotion/styled";
import styles from '../../../../constants/constants.module.scss'
const Link = styled.a`
  color:rgb(0,30,135);  //linkColor
`;
type LinkProp = {
  hrefValue: string;
  text: string;
};
export const ExternalLink: FC<LinkProp> =({ hrefValue , text })=> {
  return (
    <div>
      <Link href={hrefValue}>{text}</Link>
    </div>
  );
};
