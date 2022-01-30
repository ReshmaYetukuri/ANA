import styled from '@emotion/styled';
import { FooterInput } from '../../atoms/Inputs/FooterInput';
import { FooterLabel } from '../../atoms/Labels/FooterLabel';

const DIVCONTAINER = styled.div`
  position: relative;
  display: inline;
  top: 16px;
  left: 55%;
`;

// type FooterLabelInputProps = {
//   onChange?: React.ChangeEventHandler<HTMLInputElement>;
// };
export const FooterLabelInput = () => (
  <>
    <DIVCONTAINER>
      <FooterLabel text="Item No. " />
      <FooterInput type="text" size={1} />
    </DIVCONTAINER>
  </>
);
