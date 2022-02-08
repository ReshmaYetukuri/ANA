import styled from '@emotion/styled';
import Section from 'components/presentational/atoms/Section/Section';
import constants from '../../../../constants/styleConstants.module.scss'

const SectionContainerProps = styled.div`
 width:100%;
 display:flex;
 border: 2px solid #052d91;
`;

export interface SegmentInformationsProps  {
    data: {
    Pno: string;
      text: string;
    };
  };
  
const SectionContainerPnr = ({ data }: SegmentInformationsProps) => <SectionContainerProps>
        <>
           <Section type='Text&Icon' iconType='Plus' content={[data.Pno]} backGroundColor={constants.PAXorSEGAddedBgColor1} color={constants.PAXorSEGDeletedBgColor2}/>           
           <Section type='Text' content={[data.text]} flexValue={3}/>
           <Section type='Icon' iconType='NoFFP'/>
           <Section type='Icon' iconType='NoFFP'/>
           <Section type='Text' content={['']}/>
           <Section type='Text' content={['']}/>
           <Section type='Text' content={['']}/>
           <Section type='Text' content={['']}/>
           <Section type='Text' content={['']}/>
           <Section type='Text' content={['']}/>
           <Section type='Text' content={['']}/>
        </>
</SectionContainerProps>

export default SectionContainerPnr;

