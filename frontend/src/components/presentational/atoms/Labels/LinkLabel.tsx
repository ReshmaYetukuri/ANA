import { FC, MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

const LinkLabelStyle = styled.div`
  color: ${constants.linkColor};
  font-size: ${constants.standardSubTextsize};
  text-decoration: underline;
  cursor: pointer;
`;

export interface LinkelementProps {
  label: string;
  onClick?: MouseEventHandler;
}
const LinkLabel: FC<LinkelementProps> = ({ label, onClick }) => (
  <LinkLabelStyle onClick={onClick}>{label}</LinkLabelStyle>
);

export default LinkLabel;
