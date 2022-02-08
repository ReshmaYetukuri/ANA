import { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

const Link = styled.a`
  color: ${constants.linkColor};
  font-size: ${constants.breadCrumbsFontSize};
`;
type LinkProp = {
  hrefValue: string;
  text: string;
};

export const ExternalLink: FC<LinkProp> = ({ hrefValue, text }) => (
  <div>
    <Link href={hrefValue} target="_blank">
      {text}
    </Link>
  </div>
);

export default ExternalLink;
