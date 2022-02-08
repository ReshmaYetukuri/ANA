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
  label {
    cursor:pointer;
  }
`;
export interface ExternalLinkWithInfoIconProps {
  label:string;
  link:string;
  
};
const ExternalLinkWithInfoIcon:FC<ExternalLinkWithInfoIconProps> = ({label,link}) =>  (
    <MainDiv>
     <div> 
      <SvgIcnHelp3030 />
     </div>
      <a href={link}>
        <Label label={label}/>
      </a>
    </MainDiv>
  )

export default ExternalLinkWithInfoIcon; 
