import styled from '@emotion/styled';

const INPUT = styled.input`
  height: 23px;
  width: 50px;
  margin-left: 8px;
  outline: none;
  :focus {
    background: yellow;
  }
`;

type FooterInputProps = {
  size: number;
  type: string;
  // onchange?: React.ChangeEventHandler<HTMLInputElement>;
  // value?: string;
};

export const FooterInput = ({
  type,
  size,
}: // onchange,
// value,
FooterInputProps) => <INPUT maxLength={3} type={type} size={size} />;

FooterInput.defaultProps = {
  // onChange: null,
  // value: '',
};
