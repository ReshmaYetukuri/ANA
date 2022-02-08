import 'App.scss';
import Notice from 'components/presentational/atoms/Notice/Notice';
// import { useState } from 'react';

export const App = () => (
  // {
  //   // const [state, setState] = useState('');

  //   return
  <>
    <div style={{ width: 350, margin: 20 }}>
      <Notice
        title="Notice"
        content="jkdnksjn<br /> sakdhisadsadbsad"
        height="150px"
      />
      {/* <AmcNoInput handleCacao={()=>{alert('cacao')}} handleCardReader={()=>{alert('cacao1')}} handleWebMines={()=>{alert('cacao2')}} /> */}
    </div>
  </>
);
// };

export default App;
