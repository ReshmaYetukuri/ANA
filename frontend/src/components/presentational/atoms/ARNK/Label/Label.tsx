import styled from "@emotion/styled";

interface LabelProps {
  fontSize: string | number;
  children: React.ReactNode;
}

const LabelWrap = styled.label<LabelProps>`
  font-size: ${(props) => props.fontSize}px;
  color: #000;
  font-weight: 500;
`;

const Label = ({ fontSize, children }: LabelProps) => <LabelWrap fontSize={fontSize}>{children}</LabelWrap>

export default Label;
