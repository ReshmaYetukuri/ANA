import { FC } from 'react';
import styled from "@emotion/styled";
import  {Label}  from "components/presentational/atoms/Labels/Label";
import SvgIcnHelp3030 from 'assets/svgr-components/IcnHelp3030';

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 8px;
  padding-top: 5px;
  svg {
    height:1.4rem
  }
`;

enum IconButtonTypes { // eslint-disable-line

  'help',
}

export interface ExternalLinkWithInfoIconProps {
  src: string;
  alt:string;
  name:string;
  link:string;
};
const ExternalLinkWithInfoIcon:FC<ExternalLinkWithInfoIconProps> = ({name,link}) =>  (
    <MainDiv>
     <div> 
      <SvgIcnHelp3030 />
     </div>
      <a href={link}>
        <Label label={name}/>
      </a>
    </MainDiv>
  )

export default ExternalLinkWithInfoIcon;
