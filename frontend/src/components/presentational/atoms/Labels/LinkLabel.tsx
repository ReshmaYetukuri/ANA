import { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

const LinkLabelStyle = styled.label`
  font-size: ${constants.breadCrumbsFontSize};
`;

export interface LinkelementProps {
  name: string;
}
const LinkLabel: FC<LinkelementProps> = ({ name }) => (
  <LinkLabelStyle>{name}</LinkLabelStyle>
);
export default LinkLabel;
