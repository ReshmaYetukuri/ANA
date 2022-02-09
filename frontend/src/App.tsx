import 'App.scss';
import RouteDisplayCard from 'components/presentational/molecules/RouteDisplayComponents/RouteDisplayCard/RouteDisplayCard';
// import { useState } from 'react';
const data = {
  heading: {
    data1: 'S2',

    data2: 'NH837',
  },

  date: {
    date: '30DEC',

    day: 'THU',
  },

  codes: {
    code1: 'C(J)',

    code2: 'HK8',
  },

  time: {
    timeCode1: 'HND',

    time1: '10:15',

    timeCode2: 'DEL',

    time2: '17:05',
  },
};
export const App = () => (
  // {
  //   const [state, setState] = useState('');

  //   return (
  <>
    <div style={{ width: 350, margin: 20 }}>
      <RouteDisplayCard routeDisplayData={data} isCloseButton />
    </div>
  </>
);
// };

export default App;
