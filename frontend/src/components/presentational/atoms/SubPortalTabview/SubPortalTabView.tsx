import { Tab, Tabs } from 'react-bootstrap';
import { TabsContainer } from './TabStyle';

export type SubPortalTabViewProps = {
  onSelect?: any;
  defaultActiveKey?: string | number;
  tabList: {
    eventKey: string | number;
    title: string;
    component?: JSX.Element;
  }[];
};

export const SubPortalTabView = ({
  tabList,
  ...props
}: SubPortalTabViewProps) => (
  <TabsContainer>
    <Tabs {...props}>
      {tabList.map((ele) => (
        <Tab eventKey={ele.eventKey} title={ele.title} key={ele.eventKey}>
          {ele.component}
        </Tab>
      ))}
    </Tabs>
  </TabsContainer>
);
