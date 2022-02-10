import 'App.scss';
import DropdownSelect from 'components/presentational/atoms/Dropdown/Dropdown';
import { PassengerSeatSelectionRow } from 'components/presentational/molecules/PassengerSeatSelection/PassengerSeatSelection';
import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    id: '3',
    name: 'dlufhsdkfj',
    value: 'dsfjhfsdkfdk',
  });

  return (
    <>
      <div style={{ width: 350, margin: 20 }}>
        <DropdownSelect
          onChange={(e) => setState(e)}
          initialSelectedValue={state}
          width={70}
          values={[
            {
              id: '1',
              name: 'name',
              value: 'string',
            },
            {
              id: '2',
              name: 'name',
              value: 'string',
            },
            {
              id: '3',
              name: 'dsfjhfsdkfdk',
              value: 'dsfjhfsdkfdk',
            },
          ]}
        />
        <PassengerSeatSelectionRow
          data={[
            {
              label: 'string',
              name: 'string',
            },
            {
              label: 'string',
              name: 'string',
            },
            {
              label: 'string',
              name: 'string',
            },
          ]}
        />
      </div>
    </>
  );
};

export default App;
