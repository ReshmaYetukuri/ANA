import styled from '@emotion/styled';

type listTypeInputProps = {
  // label?: string;
  datas: string[];
  // handleChange?: React.FormEvent<HTMLInputElement>;
  changeHandler?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  name: string;
  selectedValue?: string;
  className?: string;
};
const Selectivity = styled.div`
  display: flex;
  flex-direction: row;
  select {
    outline: none;
    //padding: 0.3rem;
    //-webkit-appearance: none;
    //-moz-appearance: none;
    //appearance: none; /* Remove default arrow */
    //background-image: url(); /* Add custom arrow */
  }
`;

const Select = ({
  name,
  selectedValue,
  changeHandler,
  datas,
  className = 'select-default',
}: listTypeInputProps) => (
  <Selectivity>
    <select
      name={name}
      value={selectedValue}
      className={className}
      onChange={changeHandler}
    >
      {datas.map((ele: string, key) => (
        <option value={key} key={ele}>
          {ele}
        </option>
      ))}
    </select>
  </Selectivity>
);
Select.defaultProps = {
  changeHandler: false,
  selectedValue: false,
  className: '',
};
export default Select;
