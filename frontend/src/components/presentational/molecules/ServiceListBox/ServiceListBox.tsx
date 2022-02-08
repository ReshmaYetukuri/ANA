import styled from '@emotion/styled';
import { FC } from 'react';
import ServiceListHeading from 'components/presentational/atoms/ServiceListHeading/ServiceListHeading';
import ServiceListContent from 'components/presentational/atoms/ServiceListContent/ServiceListContent';


const ScrollingArea = styled.div`
  height: 6rem;
  overflow-y: scroll;
  scrollbar-width: thin;
  border: 1px solid green;
`;
const Items = styled.div`
  padding: 6px 0;
  margin-left: 3rem;
  margin-right: 2rem;
  display: flex;
  font-size: 0.9rem;
`;
const ServiceListBoxWrapper = styled.div`
  max-width: 30vw;
`;

type ServiceListBoxProps = {
  MealIconSrc: JSX.Element;
  onClick: (value: string) => void;
  Heading: string;
  LinkList: {
    key: number;
    link: string;
    href: string;
  }[];
};

const ServiceListBox: FC<ServiceListBoxProps> = ({
  MealIconSrc,
  onClick,
  Heading,
  LinkList,
}) => (
  <ServiceListBoxWrapper>
    <ServiceListHeading icon={MealIconSrc} label={Heading} />
    <ScrollingArea>
      {LinkList.map((e) => 
        (
          <Items>
            <ServiceListContent link={e.link} href={e.href} onClick={onClick} />
          </Items>
        )
      )}
    </ScrollingArea>
  </ServiceListBoxWrapper>
);

export default ServiceListBox;
