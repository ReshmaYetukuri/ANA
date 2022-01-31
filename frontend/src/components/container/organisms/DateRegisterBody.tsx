import { useState } from 'react';
import styled from '@emotion/styled';
import { CommonButton } from 'components/presentational/atoms/Buttons/Button';
import Icon from 'components/presentational/atoms/ARNK/Icon/Icon';
import DateRange from 'components/presentational/molecules/ARNK/DateRange';
import fareComparisonImg from '../../../assets/images/fareComparisonTitle.png';

interface DateRangerProps {
  day: string | undefined;
  month: string | undefined;
  year: string | undefined;
}

interface DateRegisterBodyProps {
  errorData: {
    errorMsg: string;
  }[];
}

const bodyData = {
  bodyHeading: 'Input Date',
  months: [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

const DateFormData = {
  day: '',
  month: '',
  year: '',
};

const DateRegisterSection = styled.div`
  background-color: #eeeeee;
  padding: 0.6rem 0.9rem;
  div {
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 0.5rem;
  }
  h2 {
    margin: 0;
    color: #00909e;
    flex: 1;
  }
  .body-wrap {
    margin-bottom: 3.3rem;
  }
`;

const DateHeader = styled.div`
  img {
    margin-right: 0.5rem;
  }
  h5 {
    margin: 0;
    color: #00909e;
    flex: 1;
    font-weight: 900;
  }
`;

const DateBody = styled.div``;

const DateRegisterBody = ({ errorData }: DateRegisterBodyProps) => {
  const [dateValues, setDateValues] = useState<DateRangerProps>(DateFormData);
  const changeHandler = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    const Numeric = /^[0-9\b]+$/;
    if (Numeric.test(value) || value === '' || name === 'month') {
      setDateValues({ ...dateValues, [name]: value });
    }
  };

  const handleClear = () => {
    console.log('data cleared');

    setDateValues({ day: '', month: '', year: '' });
  };

  return (
    <DateRegisterSection>
      <DateHeader>
        <Icon width={25} height={25} src={fareComparisonImg} />
        <h5>{bodyData.bodyHeading}</h5>
        <CommonButton name="Clear" onclick={handleClear} />
      </DateHeader>
      <DateBody>
        <DateRange
          selectDatas={bodyData.months}
          dateValues={dateValues}
          errorData={errorData}
          changeHandler={changeHandler}
        />
      </DateBody>
    </DateRegisterSection>
  );
};
DateRegisterBody.defaultProps = {};
export default DateRegisterBody;
