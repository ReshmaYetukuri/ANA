import styled from '@emotion/styled';
import { ErrorLabel } from '../Label/ErrorLabel';

type ErrorComponentProps = {
  errors: {
    errorMsg: string;
  }[];
};
const text = () => {
  console.log('error listed');
};

const BoxStyled = styled.div`
  background-color: rgb(255, 228, 227);
  border: 1px solid rgb(215, 203, 208);
  height: 2.5rem;
  width: 24rem;
  padding: 0 0.3rem;
  overflow-y: scroll;
`;

export const ErrorComponent = ({ errors }: ErrorComponentProps) => {
  if (errors.length === 0) return null;

  return (
    <BoxStyled>
      {errors?.map((label) => (
        <div key={label.errorMsg}>
          <ErrorLabel onClick={text} label={label.errorMsg} />
        </div>
      ))}
    </BoxStyled>
  );
};
