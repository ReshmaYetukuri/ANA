import { FC } from 'react';
import styled from '@emotion/styled';
import SvgIcnHelp3030 from 'assets/svgr-components/IcnHelp3030';
import ExternalLink from 'components/presentational/atoms/ExternalLink/ExternalLink';

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 8px;
  padding-top: 5px;
  div {
    display: flex;
    align-self: flex-end;
  }
  svg {
    height: 0.9rem;
  }
  label {
    cursor: pointer;
    font-size: ;
  }
`;
export interface ExternalLinkWithInfoIconProps {
  label: string;
  link: string;
}
const ExternalLinkWithInfoIcon: FC<ExternalLinkWithInfoIconProps> = ({
  label,
  link,
}) => (
  <MainDiv>
    <SvgIcnHelp3030 />
    <ExternalLink text={label} hrefValue={link} />
  </MainDiv>
);

export default ExternalLinkWithInfoIcon;
