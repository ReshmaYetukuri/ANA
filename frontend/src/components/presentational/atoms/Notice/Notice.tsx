import { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

type NoticeProps = {
  title: string;
  content: string;
  height?: string;
  width?: string;
};
type NoticeStyledProps = {
  height?: string;
  width?: string;
};

const Wrap = styled('div')<NoticeStyledProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: 1px solid ${constants.basicColor};
  color: ${constants.basicColor};
`;

const Head = styled('div')`
  border: 0;
  border-bottom: 1px solid ${constants.basicColor};
  background: ${constants.manualTitleBgColor};
  padding-left: 5px;
`;
const ContentBox = styled('div')`
  width: 100%;
`;

const Message = styled('p')`
  font-size: ${constants.breadCrumbsFontSize};
  padding: 5px 5px 10px;
  margin: 0;
`;

export const Notice: FC<NoticeProps> = ({ height, width, title, content }) => (
  <Wrap height={height} width={width}>
    <Head>{title}</Head>
    <ContentBox>
      <Message dangerouslySetInnerHTML={{ __html: content }} />
    </ContentBox>
  </Wrap>
);

Notice.defaultProps = {
  width: '',
  height: '',
};

export default Notice;
