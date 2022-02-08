import styled from '@emotion/styled';
import { IconBottomTitle } from 'assets/svgr-components';
import { FC } from 'react';
import { Label } from './Label';
import constants from '../../../../constants/styleConstants.module.scss';

const Div = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  svg {
    height: 1.3rem;
  }
  label {
    margin-left: 10px;
  }
`;

interface SubHeadingSmallProps {
  label: string;
}

export const SubHeadingSmall: FC<SubHeadingSmallProps> = ({ label }) => (
  <Div>
    <IconBottomTitle />
    <Label label={label} fontColor={constants.itemTitleBgColor1} />
  </Div>
);
