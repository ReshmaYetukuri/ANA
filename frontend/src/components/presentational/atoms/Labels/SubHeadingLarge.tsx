import styled from '@emotion/styled';
import { FareComparisonTitle } from 'assets/svgr-components';
import { FC } from 'react';
import { Label } from './Label';
import constants from '../../../../constants/styleConstants.module.scss';

const Div = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: ${constants.standardTextSize};
  svg {
    height: 1.6rem;
  }
  label {
    font-size: ${constants.standardTextSize};
    margin-left: 10px;
  }
`;

interface SubHeadingLargeProps {
  label: string;
}

export const SubHeadingLarge: FC<SubHeadingLargeProps> = ({ label }) => (
  <Div>
    <FareComparisonTitle />
    <Label label={label} fontColor={constants.itemTitleBgColor1} />
  </Div>
);
