import styled from '@emotion/styled';
import { FC } from 'react';

import ListIcon from '../../../../assets/svgr-components/IconBottomTitleTst';

const ListIconDiv = styled('div')`
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 1rem;
  align-self: center;
  display: flex;
`;
const Link = styled('a')`
  color: rgb(0, 60, 255);
  & :active {
    color: red;
  }
`;

type ServiceListContentProps = {
  link: string;
  href: string;
  onClick: (value: string) => void;
};

const ServiceListContent: FC<ServiceListContentProps> = ({
  link,
  href,
  onClick,
}) => (
  <>
    <ListIconDiv>
      <ListIcon />
    </ListIconDiv>
    <Link href={href} target="_blank" onClick={() => onClick(link)}>
      <b>{link}</b>
    </Link>
  </>
);

export default ServiceListContent;
