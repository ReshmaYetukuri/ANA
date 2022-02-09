import styled from '@emotion/styled';
import Section from 'components/presentational/atoms/Section/Section';
import constants from '../../../../constants/styleConstants.module.scss';

const SectionContainerProps = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid ${constants.itemTitleBgColor2};
`;

export interface SegmentInformationsProps {
  data: {
    pno: string;
    text: string;
  };
}

const SegmentInformationsPnr = ({ data }: SegmentInformationsProps) => (
  <SectionContainerProps>
    <Section
      type="TextAndIcon"
      iconType="Plus"
      content={[data.pno]}
      backGroundColor={constants.PAXorSEGAddedBgColor1}
      color={constants.PAXorSEGDeletedBgColor2}
    />
    <Section type="Text" content={[data.text]} flexValue={8} />
    <Section type="Icon" iconType="NoFFP" alignBottom />
    <Section type="Icon" iconType="NoFFP" alignBottom />
    <Section type="Text" content={['']} />
    <Section type="Text" content={['']} />
    <Section type="Text" content={['']} />
    <Section type="Text" content={['']} />
    <Section type="Text" content={['']} />
    <Section type="Text" content={['']} />
    <Section type="Text" content={['']} />
  </SectionContainerProps>
);

export default SegmentInformationsPnr;
