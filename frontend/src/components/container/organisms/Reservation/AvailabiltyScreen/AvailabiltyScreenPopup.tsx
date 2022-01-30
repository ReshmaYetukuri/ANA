import { useState } from 'react';
import styled from '@emotion/styled';
import PopupButton from '../../../../presentational/atoms/Buttons/PopupButton';
import HistoryIconButton from '../../../../presentational/atoms/Buttons/HistoryIconButton';
import { TabsView } from '../../../../presentational/atoms/tab-view/TabsView';
import { Breadcrumbs } from '../../../../presentational/molecules/Breadcrumb/Breadcrumbs';
import { BootstrapPopUpSkeleton } from '../../../../presentational/molecules/BootstrapPopUpSkeleton/BootstrapPopUpSkeleton';
import FlightSearchHistory from './FlightSearchHistory';

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

export const AvailabiltyScreenPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFSHOpen, setIsFSHOpen] = useState(false);
  const tabList = [
    {
      eventKey: 'owrt',
      title: 'OW/RT',
      component: <HistoryIconButton onBtnClick={() => setIsFSHOpen(true)} />,
    },
    {
      eventKey: 'direct',
      title: 'Direct',
      component: <HistoryIconButton onBtnClick={() => alert('Direct')} />,
    },
    {
      eventKey: 'multiple',
      title: 'Multiple',
      component: <HistoryIconButton onBtnClick={() => alert('Multiple')} />,
    },
    {
      eventKey: 'group',
      title: 'Group',
      component: <HistoryIconButton onBtnClick={() => alert('Group')} />,
    },
    {
      eventKey: 'loadingList',
      title: 'Loading List',
      component: <HistoryIconButton onBtnClick={() => alert('Loading List')} />,
    },
    {
      eventKey: 'fareQuoteDisplay',
      title: 'Fare Quote Display',
      component: (
        <HistoryIconButton onBtnClick={() => alert('Fare Quote Display')} />
      ),
    },
  ];

  return (
    <>
      <PopupButton label="Availabilty" onClick={() => setIsOpen(true)} />
      {isOpen ? (
        <BootstrapPopUpSkeleton
          label="Enter Search Criteria (Revenue/Award)"
          openPopUp={isOpen}
          onClosePopUp={() => setIsOpen(false)}
          popUpClassName="ESCModalContent"
        >
          <CRUMBDIV>
            <Breadcrumbs pages={breadcrumbsTitles} />
          </CRUMBDIV>
          <TABDIV>
            <TabsView
              defaultActiveKey="owrt"
              tabList={tabList}
              //   onBtnClick={() => alert('hi')}
            />
            <TABLEFTDIV />
          </TABDIV>
        </BootstrapPopUpSkeleton>
      ) : null}

      {isFSHOpen ? (
        <FlightSearchHistory
          openFSHPopUp={isFSHOpen}
          onCloseFSHPopUp={() => setIsFSHOpen(false)}
        />
      ) : null}
    </>
  );
};
