import { FC } from 'react';
import styled from "@emotion/styled";
import  LinkIcon  from "components/presentational/atoms/Icons/LinkIcon";
import  LinkLabel  from "components/presentational/atoms/Labels/LinkLabel";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 8px;
  padding-top: 5px;
`;

export interface LinkWithIconProps {
  src: string;
  alt:string;
  name:string;
  link:string;
};

const LinkWithIcon:FC<LinkWithIconProps> = ({src,alt,name,link}) =>  (
    <MainDiv>
      <LinkIcon src={src} alt={alt} />
      <a href={link}>
        <LinkLabel name={name} />
      </a>
    </MainDiv>
  )

export default LinkWithIcon;
