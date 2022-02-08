import 'App.scss';
import { TabsView } from 'components/presentational/atoms/TabView/TabsView';
// import { useState } from 'react';

export const App = () => (
  // {
  //   // const [state, setState] = useState('');

  //   return
  <>
    <div style={{ width: 350, margin: 20 }}>
      <TabsView
        defaultActiveKey="string2"
        tabList={[
          {
            eventKey: 'string',
            title: 'title1',
            component: <div>Tab1 content</div>,
          },
          {
            eventKey: 'string1',
            title: 'title2',
            component: <div>Tab2 content</div>,
          },
          {
            eventKey: 'string2',
            title: 'title3',
            component: <div>Tab3 content</div>,
          },
          {
            eventKey: 'string3',
            title: 'title4',
            component: <div>Tab4 content</div>,
          },
        ]}
      />
      {/* <AmcNoInput handleCacao={()=>{alert('cacao')}} handleCardReader={()=>{alert('cacao1')}} handleWebMines={()=>{alert('cacao2')}} /> */}
    </div>
  </>
);
// };

export default App;
