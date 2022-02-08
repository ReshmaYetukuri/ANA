import styled from '@emotion/styled';
import { IcnDeskNoffp, IconDSeatBlue, ListAdd } from 'assets/svgr-components';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

export interface flexProps {
  flexValue: number | undefined;
  backGroundColor: string | undefined;
  color: string | undefined;
}

const SectionDiv = styled.div<flexProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  color: ${(props) => (props.color ? props.color : constants.vacantSeatMain)};
  flex: ${(props) => (props.flexValue ? props.flexValue : 1)};
  background-color: ${(props) =>
    props.backGroundColor
      ? props.backGroundColor
      : constants.htmlBrowserDisplayBgColor1};
  border-right: 1px solid #cbbcbc;
  padding: 0.2rem;
  div {
    border-right: 0px;
  }
`;

const LinkElement = styled.a``;

/* content will be text , cion, link  */
export interface SectionProps {
  type: string;
  content?: string[] | null;
  iconType?: string;
  linkName?: string;
  linkUrl?: string;
  flexValue?: number;
  backGroundColor?: string;
  color?: string;
}

const Section: FC<SectionProps> = ({
  type,
  content,
  iconType,
  linkName,
  linkUrl,
  flexValue,
  backGroundColor,
  color,
}) => (
  <SectionDiv
    color={color}
    backGroundColor={backGroundColor}
    flexValue={flexValue}
  >
    {type === 'Text' &&
      content !== null &&
      content &&
      content.map((v) => (
        <SectionDiv
          color={color}
          backGroundColor={backGroundColor}
          flexValue={flexValue}
          key="v"
        >
          {v}
        </SectionDiv>
      ))}
    {type === 'Text&Icon' &&
      iconType === 'Plus' &&
      content !== null &&
      content && (
        <>
          <SectionDiv
            color={color}
            backGroundColor={backGroundColor}
            flexValue={flexValue}
            key="v"
          >
            {content[0]}
          </SectionDiv>
          <ListAdd />
        </>
      )}
    {type === 'Icon' && iconType === 'Seat' && <IconDSeatBlue />}
    {type === 'Icon' && iconType === 'NoFFP' && <IcnDeskNoffp />}
    {type === 'Link' && linkUrl && linkName && (
      <LinkElement href={linkUrl}>{linkName}</LinkElement>
    )}
  </SectionDiv>
);

export default Section;
