import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from '@emotion/styled';
import { TabsView } from '../tab-view/TabsView';
import { Breadcrumbs } from '../../molecules/Breadcrumb/Breadcrumbs';
import { BootstrapPopUpSkeleton } from '../../molecules/BootstrapPopUpSkeleton/BootstrapPopUpSkeleton';

const tabList = [
  {
    eventKey: 'owrt',
    title: 'OW/RT',
    component: <Button className="nextButton">popup</Button>,
  },
  {
    eventKey: 'direct',
    title: 'Direct',
  },
  {
    eventKey: 'multiple',
    title: 'Multiple',
  },
  {
    eventKey: 'group',
    title: 'Group',
  },
  {
    eventKey: 'loadingList',
    title: 'Loading List',
  },
  {
    eventKey: 'fareQuoteDisplay',
    title: 'Fare Quote Display',
  },
];

const breadcrumbsTitles = [
  {
    pageName: 'Search',
    isActive: true,
  },
  {
    pageName: 'Book Flight',
    isActive: false,
  },
  {
    pageName: 'Fare Calc.',
    isActive: false,
  },
  {
    pageName: 'Result',
    isActive: false,
  },
];

const CRUMBDIV = styled.div`
  height: 70px;
  background: rgb(237, 256, 256);
`;
const TABDIV = styled.div`
  display: flex;
`;
const TABLEFTDIV = styled.div`
  width: 24%;
  height: 480px;
  margin-top: 42px;
  margin-left: 7px;
  border: 1px solid #357271;
`;

export const BootstrapPopUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="nextButton" onClick={() => setIsOpen(true)}>
        popup
      </Button>
      {isOpen ? (
        <BootstrapPopUpSkeleton
          openPopUp={isOpen}
          onClosePopUp={() => setIsOpen(false)}
        >
          <CRUMBDIV>
            <Breadcrumbs pages={breadcrumbsTitles} />
          </CRUMBDIV>
          <TABDIV>
            <TabsView defaultActiveKey="owrt" tabList={tabList} />
            <TABLEFTDIV />
          </TABDIV>
        </BootstrapPopUpSkeleton>
      ) : null}
    </>
  );
};
