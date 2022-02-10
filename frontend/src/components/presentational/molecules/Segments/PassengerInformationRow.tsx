import styled from '@emotion/styled';
import Section from 'components/presentational/atoms/Section/Section';
import constants from '../../../../constants/styleConstants.module.scss';

const SectionContainerProps = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid ${constants.itemTitleBgColor2};
`;

export interface PassengerInformationProps {
  data: {
    passengerNumber: string;
    passengerName: string;
    col1:React.ReactNode;
    col2:React.ReactNode;
    col3:React.ReactNode;
    col4:React.ReactNode;
    col5:React.ReactNode;
    col6:React.ReactNode;
    col7:React.ReactNode;
    col8:React.ReactNode;
    col9:React.ReactNode;
  };
}

const PassengerInformationRow = ({ data }: PassengerInformationProps) => (
  <SectionContainerProps>
    <Section
      type="TextAndIcon"
      iconType="Plus"
      content={[data.passengerNumber]}
      backGroundColor={constants.PAXorSEGAddedBgColor1}
      color={constants.PAXorSEGDeletedBgColor2}
    />
    <Section type="Text" content={[data.passengerName]} flexValue={8} />
    {data.col1}
    {data.col2}
    {data.col3}
    {data.col4}
    {data.col5}
    {data.col6}
    {data.col7}
    {data.col8}
    {data.col9}
  </SectionContainerProps>
);

export default PassengerInformationRow;
