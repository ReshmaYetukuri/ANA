import 'App.scss';
import styled from '@emotion/styled';
import { TabsView } from './components/presentational/atoms/tab-view/TabsView';
import { PopUpWindow } from './components/presentational/molecules/PopUp-window-skeleton/PopUpWindowSkeleton';
import { Breadcrumbs } from './components/presentational/molecules/Breadcrumb/Breadcrumbs';

const tabList = [
  {
    eventKey: 'owrt',
    title: 'OW/RT',
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

export const App = () => (
  <>
    <PopUpWindow headingLabel="Enter Search Criteria (Revenue/Award)">
      <CRUMBDIV>
        <Breadcrumbs pages={breadcrumbsTitles} />
      </CRUMBDIV>
      <TABDIV>
        <TabsView defaultActiveKey="owrt" tabList={tabList} />
        <TABLEFTDIV />
      </TABDIV>
    </PopUpWindow>
  </>
);

export default App;
