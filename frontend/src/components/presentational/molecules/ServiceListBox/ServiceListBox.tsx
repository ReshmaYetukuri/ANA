import styled from '@emotion/styled';
import { FC } from 'react';
import ServiceListHeading from 'components/presentational/atoms/ServiceListHeading/ServiceListHeading';
import ServiceListContent from 'components/presentational/atoms/ServiceListContent/ServiceListContent';
import constants from '../../../../constants/styleConstants.module.scss';

const ScrollingArea = styled.div`
  height: 6rem;
  overflow-y: scroll;
  scrollbar-width: thin;
  border: 1px solid ${constants.itemTitleBgColor2};
`;
const Items = styled.div`
  padding: 6px 0;
  width: 80%;
  margin: 0 auto;
  display: flex;
  font-size: 0.85rem;
`;
const ServiceListBoxWrapper = styled.div`
  // max-width: 20rem;
`;

type ServiceListBoxProps = {
  iconSrc: JSX.Element;
  onClick: (value: string) => void;
  heading: string;
  linkList: {
    key: number;
    link: string;
    href: string;
  }[];
};

const ServiceListBox: FC<ServiceListBoxProps> = ({
  iconSrc,
  onClick,
  heading,
  linkList,
}) => (
  <ServiceListBoxWrapper>
    <ServiceListHeading icon={iconSrc} label={heading} />
    <ScrollingArea>
      {linkList.map((e) => (
        <Items>
          <ServiceListContent link={e.link} href={e.href} onClick={onClick} />
        </Items>
      ))}
    </ScrollingArea>
  </ServiceListBoxWrapper>
);

export default ServiceListBox;
