import DropDown from  '../../atoms/DropDown/Dropdown';
import { IconButtonTypes } from 'constants/commonTypes';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import styled from '@emotion/styled';
import { FC } from 'react';

type DropdownWithSearchIconProps = {
  listValues: Data[];
  onChange: (e: Data) => void;
};

type Data = {
  id: string;
  name: string;
  value: string;
};

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.7rem;
`;

export const DropdownWithSearchIcon: FC<DropdownWithSearchIconProps> = ({
  listValues,
  onChange,
}) => (
  <MainDiv>
    <DropDown
      values={listValues}
      onChange={onChange}
      initialSelectedValue={{
        id: '',
        name: '',
        value: '',
      }}
      width={0}
    />
    <IconButton
      type={IconButtonTypes.search}
      width="32px"
      height="30px"
      isFullSize
    />
  </MainDiv>
);
