import styled from '@emotion/styled';
import Section from 'components/presentational/atoms/Section/Section';
import { MouseEventHandler } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

const SectionContainerProps = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid ${constants.itemTitleBgColor2};
`;

export interface SegmentInformationsProps {
  data: {
    seatNo: string;
    flightNo: string;
    flightLink: string;
    date: string[];
    place: string[];
    time: string[];
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
    col6: string;
  };
  onFlightNumberClicked?: MouseEventHandler;
}

const SegmentInformationsBoarding = ({
  data,
  onFlightNumberClicked,
}: SegmentInformationsProps) => (
  <SectionContainerProps>
    <>
      <Section
        type="TextAndIcon"
        iconType="Plus"
        content={[data.seatNo]}
        backGroundColor={constants.PAXorSEGAddedBgColor1}
        color={constants.PAXorSEGDeletedBgColor2}
      />
      <Section
        type="Link"
        linkName={data.flightNo}
        linkUrl={data.flightLink}
        flightNumberClick={onFlightNumberClicked}
      />
      <Section type="Text" content={data.date} />
      <Section type="Text" content={data.place} flexValue={3} />
      <Section type="Text" content={data.time} />
      <Section type="Text" content={[data.col1]} />
      <Section type="Text" content={[data.col2]} />
      <Section type="Text" content={[data.col3]} />
      <Section type="Text" content={[data.col4]} />
      <Section type="Text" content={[data.col5]} />
      <Section type="Text" content={[data.col6]} />
      <Section type="Icon" iconType="Seat" />
    </>
  </SectionContainerProps>
);

export default SegmentInformationsBoarding;
