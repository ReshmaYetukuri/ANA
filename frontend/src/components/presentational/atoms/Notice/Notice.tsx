import React, { FC } from "react";
import styled from "@emotion/styled";
import constants from '../../../../constants/styleConstants.module.scss';


type NoticeProps = {
  title: string;
  content: string;
  height:string;
};
type NoticeStyledProps={
  height:string;
}

const Wrap = styled("div")<NoticeStyledProps>`
  height :${props=>props.height};
  border: 1px solid ;
  margin: 8px;
  color: ${constants.basicColor};
  max-width: 400px;
  min-height:300px;
`;

const Head = styled("div")`
  border: 0;
  border-bottom: 1px solid ${constants.basicColor};
  background: ${constants.manualTitleBgColor};
  padding: 1px;
`;
const ContentBox = styled("div")`
  width: 100%;
`;

const Message = styled("p")`
  margin: 1px;
  margin-top: 5px;
  font-size: 16px;
  padding: 1px 5px 10px 5px;
`;

export const Notice :FC<NoticeProps> =({ height, title, content }) => 
  <Wrap  height={height} >
    <Head>{title}</Head>
    <ContentBox>
      <Message dangerouslySetInnerHTML={{__html:content}} />
    </ContentBox>
  </Wrap>

export default Notice;