import { Tab, Tabs } from 'react-bootstrap';
// import { TabsWrapper } from "./TabsWrapper";
import styled from '@emotion/styled';

export const TabsWrapper = styled.div`
  font-family: 'Noto Sans JP-100';
  width: 75%;
  padding-top: 0.6rem;
  padding-left: 0.5rem;
  .nav-link {
    line-height: 1rem;
    background-color: #efebef;
    border-radius: 0;
    min-width: 7rem;
    height: 2rem;
    color: black;
    box-shadow: 0px 0px 1px;
    font-size: 13px;
    font-weight: 700;
  }
  .nav-link.active {
    // border-top: 4px solid #fece4c;
    background: #c5d9f2;
    line-height: 1rem;
  }
  .nav-tabs .nav-link.active {
    border-color: #c5d9f2;
  }
  .nav-link:hover {
    // border-color: white white white white;
  }
  .nav-link.active:hover {
    background: #c5d9f2;
    // border-top: 4px solid #fece4c;
  }
  .tab-content {
    border-left: 1px solid #c5d9f2;
    border-right: 1px solid #c5d9f2;
    border-bottom: 1px solid #c5d9f2;
    padding: 10px;
    -webkit-box-shadow: inset 0 0em 0.3em 0em #c5d9f2;
    height: 480px;
  }

  .nav-tabs {
    margin-bottom: 0;
  }
`;

export type TabViewProps = {
  onSelect?: any;
  defaultActiveKey?: string | number;
  tabList: {
    eventKey: string | number;
    title: JSX.Element | string;
    component?: JSX.Element | string;
  }[];
  // onBtnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TabsView = ({ tabList, ...props }: TabViewProps) => (
  <TabsWrapper>
    <Tabs {...props}>
      {tabList.map((tab) => (
        <Tab
          eventKey={tab.eventKey}
          title={tab.title}
          key={`tabList-${tab.eventKey}`}
        >
          {tab.component}
        </Tab>
      ))}
    </Tabs>
  </TabsWrapper>
);

// TabsView.defaultProps = {
//   onBtnClick: null,
// };