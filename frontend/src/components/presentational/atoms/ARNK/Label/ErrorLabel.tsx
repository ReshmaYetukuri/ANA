import styled from "@emotion/styled";

type ErrorLabelProps = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLLabelElement>) => void;
};
const LabelStyled = styled.label`
  color: rgb(235 61 101);
`;

export const ErrorLabel = ({ onClick, label }: ErrorLabelProps) =>
  <LabelStyled onClick={onClick}> {label} </LabelStyled>;
