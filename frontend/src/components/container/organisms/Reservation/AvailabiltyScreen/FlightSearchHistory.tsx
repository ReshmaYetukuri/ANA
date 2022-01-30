import { useState } from 'react';
import Table from '../../../../presentational/atoms/Tables/Table';
import { BootstrapPopUpSkeleton } from '../../../../presentational/molecules/BootstrapPopUpSkeleton/BootstrapPopUpSkeleton';
import { CommonButton } from '../../../../presentational/atoms/Buttons/Button';

type FlightSearchHistoryProps = {
  openFSHPopUp: boolean;
  onCloseFSHPopUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const data = [
  {
    date1: '10JUN',
    date2: '20JUN',
    dep: 'HND   /TYO',
    arr: ' FRA',
    select: 'search',
  },
  {
    date1: '15MAY',
    date2: '25MAY',
    dep: 'NRT   /TYO',
    arr: ' BKK',
    select: 'search',
  },
];

const FlightSearchHistory = ({
  openFSHPopUp,
  onCloseFSHPopUp,
}: FlightSearchHistoryProps) => {
  const [tableData, setTableData] = useState(data);
  const clearTableData = () => {
    setTableData([]);
  };

  return (
    <BootstrapPopUpSkeleton
      label="Flight Search History"
      openPopUp={openFSHPopUp}
      onClosePopUp={onCloseFSHPopUp}
      popUpClassName="FSHModalContent"
      showCloseBtn
      showSelectBtn
      showLabelInputBtn
    >
      <CommonButton name="Clear" onclick={clearTableData} />
      <Table
        tableHeading={[
          'No.',
          'O/B Date',
          'I/B Date',
          'DEP APO',
          'ARR APO',
          'Select',
        ]}
        tableData={tableData}
      />
    </BootstrapPopUpSkeleton>
  );
};
FlightSearchHistory.defaultProps = {
  onCloseFSHPopUp: null,
};
export default FlightSearchHistory;
