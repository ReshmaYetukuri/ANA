import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import SearchDropdown from 'components/presentational/atoms/DropDown/Dropdown';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { IconButtonTypes } from 'constants/commonTypes';

const MainDiv = styled.div`
  display: flex;
  align-items: center;
`;

type DateInputFeildProps = {
  getDate: (date: { day: string; month: string }) => void;
  showYearInput?: boolean;
};

type Data = {
  id: string;
  name: string;
  value: string;
};

const datas = [
  {
    id: '1',
    name: 'January',
    value: 'January',
  },
  {
    id: '2',
    name: 'February',
    value: 'February',
  },
  {
    id: '3',
    name: 'March',
    value: 'March',
  },
  {
    id: '4',
    name: 'April',
    value: 'April',
  },
  {
    id: '5',
    name: 'May',
    value: 'May',
  },
  {
    id: '6',
    name: 'June',
    value: 'june',
  },
  {
    id: '7',
    name: 'July',
    value: 'July',
  },
  {
    id: '8',
    name: 'August',
    value: 'August',
  },
  {
    id: '9',
    name: 'September',
    value: 'September',
  },
  {
    id: '10',
    name: 'October',
    value: 'October',
  },
  {
    id: '11',
    name: 'November',
    value: 'November',
  },
  {
    id: '12',
    name: 'December',
    value: 'December',
  },
];

export const DateInputField: FC<DateInputFeildProps> = ({
  getDate,
  showYearInput,
}) => {
  const [date, setDate] = useState({ day: '', month: '', year: '' });
  const [dayInputValue, setDayInput] = useState('');
  const [yearInputValue, setYearInput] = useState(
    new Date().getFullYear().toString().substring(2)
  );
  const [initialValue, setInitialValue] = useState({
    id: '',
    name: '',
    value: '',
  });

  useEffect(() => {
    getDate(date);
  }, [date, getDate]);

  const handleInputChange = (
    selectedDayEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDayInput(selectedDayEvent.target.value);
    setDate({
      day: selectedDayEvent.target.value,
      month: initialValue.value,
      year: yearInputValue,
    });
  };

  const handleDropDownChange = (selectedMonth: Data) => {
    setInitialValue(selectedMonth);
    setDate({
      day: dayInputValue,
      month: selectedMonth.value,
      year: yearInputValue,
    });
  };

  const handleYearInputChange = (
    selectedYearEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setYearInput(selectedYearEvent.target.value);
    setDate({
      day: dayInputValue,
      month: initialValue.value,
      year: selectedYearEvent.target.value,
    });
  };

  return (
    <MainDiv>
      <TextBox
        width="40px"
        height="30px"
        value={dayInputValue}
        onChange={handleInputChange}
        maxLength={2}
      />
      <SearchDropdown
        values={datas}
        onChange={handleDropDownChange}
        initialSelectedValue={initialValue}
        width={10}
      />
      {showYearInput && (
        <TextBox
          width="40px"
          height="30px"
          value={yearInputValue}
          onChange={handleYearInputChange}
          maxLength={2}
        />
      )}
      <IconButton
        type={IconButtonTypes.help}
        width="30px"
        height="30px"
        isFullSize
      />
    </MainDiv>
  );
};

DateInputField.defaultProps={
showYearInput: false,
};
