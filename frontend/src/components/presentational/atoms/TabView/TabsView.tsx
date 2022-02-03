import { Tab, Tabs } from 'react-bootstrap';
import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

export const TabsWrapper = styled.div`
  width: 75%;
  padding-top: 0.6rem;
  padding-left: 0.5rem;
  .nav-link {
    line-height: 1rem;
    background-color: ${constants.basicBgColor};
    border-radius: 0;
    min-width: 7rem;
    height: 2rem;
    color: ${constants.standardTextColor};
    box-shadow: 0px 0px 1px;
    font-size: ${constants.breadCrumbsFontSize};
    font-weight: 700;
  }
  .nav-link.active {
    background: ${constants.PAXorSEGAddedBgColor2};
    line-height: 1rem;
  }
  .nav-tabs .nav-link.active {
    border-color: ${constants.PAXorSEGAddedBgColor2};
  }

  .nav-link.active:hover {
    background: ${constants.PAXorSEGAddedBgColor2};
  }
  .tab-content {
    border-left: 1px solid ${constants.PAXorSEGAddedBgColor2};
    border-right: 1px solid ${constants.PAXorSEGAddedBgColor2};
    border-bottom: 1px solid ${constants.PAXorSEGAddedBgColor2};
    padding: 10px;
    -webkit-box-shadow: inset 0 0em 0.3em 0em ${constants.PAXorSEGAddedBgColor2};
    height: 480px;
  }

  .nav-tabs {
    margin-bottom: 0;
  }
`;

export type TabViewProps = {
  onSelect?: () => void;
  defaultActiveKey?: string | number;
  tabList: {
    eventKey: string;
    title: JSX.Element | string;
    component?: JSX.Element | string;
  }[];
};

export const TabsView: FC<TabViewProps> = ({
  tabList,
  defaultActiveKey,
  onSelect,
}) => (
  <TabsWrapper>
    <Tabs defaultActiveKey={defaultActiveKey} onSelect={onSelect}>
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
