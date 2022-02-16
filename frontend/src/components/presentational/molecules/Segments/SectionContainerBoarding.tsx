import styled from '@emotion/styled';
import Section from 'components/presentational/atoms/Section/Section';
import { MouseEventHandler } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

const SectionContainerProps = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid ${constants.itemTitleBgColor2};
`;

export interface SectionContainerBoardingProps {
  data: {
    segmentNo:string;
    flightNo:string;
    date:string[];
    place:string[];
    time:string[];    
    col1:React.ReactNode;
    col2:React.ReactNode;
    col3:React.ReactNode;
    col4:React.ReactNode;
    col5:React.ReactNode;
    col6:React.ReactNode;
    col7:React.ReactNode;
  };
  onFlightNumberClicked?: MouseEventHandler;
}

const SectionContainerBoarding = ({
  data,
  onFlightNumberClicked,
}: SectionContainerBoardingProps) => (
  <SectionContainerProps>
    <>
      <Section
        type="TextAndIcon"
        iconType="Plus"
        content={[data.segmentNo]}
        backGroundColor={constants.PAXorSEGAddedBgColor1}
        color={constants.PAXorSEGDeletedBgColor2}
      />
      <Section
        type="Link"
        linkName={data.flightNo}
        linkUrl={data.flightNo}
        flightNumberClick={onFlightNumberClicked}
      />
      <Section type="Text" content={data.date} />
      <Section type="Text" content={data.place} flexValue={3} />
      <Section type="Text" content={data.time} />
      {data.col1}
      {data.col2}
      {data.col3}
      {data.col4}
      {data.col5}
      {data.col6}
      {data.col7}
    </>
  </SectionContainerProps>
);

export default SectionContainerBoarding;
