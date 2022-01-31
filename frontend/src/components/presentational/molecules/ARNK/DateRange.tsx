import styled from '@emotion/styled';
import Icon from 'components/presentational/atoms/ARNK/Icon/Icon';
import Input from 'components/presentational/atoms/ARNK/Input/Input';
import Label from 'components/presentational/atoms/ARNK/Label/Label';
import Select from 'components/presentational/atoms/ARNK/Select/Select';
import Calender from '../../../../assets/images/icon-calender.gif';

interface DateRangerProps {
  day: string | undefined;
  month: string | undefined;
  year: string | undefined;
}

interface DateProps {
  selectDatas: string[];
  dateValues: DateRangerProps;
  errorData: {
    errorMsg: string;
  }[];
  changeHandler?: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
}

const DateForm = styled.div<any>`
  display: flex;
  align-items: center;
  margin: 1.5rem;
  .label-wrap {
    width: 24%;
    position: relative;
  }
  .label-wrap label {
    padding-left: 1.25rem;
  }
  .label-wrap img {
    position: absolute;
    top: 0;
  }
`;

const DateLabelSection = styled.div`
  width: 24%;
  position: relative;
  margin-bottom: 0.3rem;
  label {
    padding-left: 1.25rem;
  }
`;

const DateFormSection = styled.div`
  padding: 0.25rem;
  input {
    font-size: 15px;
    margin-right: 0.11rem;
    border: 1px solid #707070;
    // background-color: #fff;
    width: 7%;
    height: 1.4rem;
    outline: none;
    &:focus {
      background-color: #fffd92;
    }
  }
  select {
    //padding: 0.1rem;
    margin-right: 0.11rem;
    height: 1.4rem;
    width: 9.3rem;
    font-size: 0.87rem;
  }
  img {
    margin-right: 0.3rem;
    border: 1px solid #707070;
  }
  img:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  select.error,
  input.error {
    color: red;
    background-color: #ffe1e1;
  }
`;

const RequiredSymbol = styled.span`
  color: #da1212;
  font-size: 2rem;
  position: absolute;
  bottom: 0px;
  font-weight: 700;
`;

const CalenderSection = styled.div`
  height: 10px;
`;

const DateRange = ({
  selectDatas,
  dateValues,
  errorData,
  changeHandler,
}: DateProps) => {
  // console.log("DateRange rendered");
  const isError = errorData !== undefined;

  const calenderHandler = () => {
    console.log('calender opened');
  };

  return (
    <DateForm>
      <DateLabelSection>
        <RequiredSymbol>*</RequiredSymbol>
        <Label fontSize={18}>Date</Label>
      </DateLabelSection>
      <DateFormSection>
        <Input
          type="text"
          name="day"
          value={dateValues.day}
          inputLength={2}
          className={isError ? `error` : ``}
          changeHandler={changeHandler}
        />
        <Select
          datas={selectDatas}
          name="month"
          selectedValue={dateValues.month}
          className={isError ? `error` : ``}
          changeHandler={changeHandler}
        />
        <Input
          type="text"
          name="year"
          value={dateValues.year}
          inputLength={2}
          changeHandler={changeHandler}
        />
        <CalenderSection onClick={calenderHandler}>
          <Icon width={27} height={22} src={Calender} />
        </CalenderSection>
      </DateFormSection>
    </DateForm>
  );
};
DateRange.defaultProps = {
  changeHandler: false,
};
export default DateRange;
