import styled from '@emotion/styled';
import { IcnDeskNoffp, IconDSeatBlue, ListAdd } from 'assets/svgr-components';
import { FC, MouseEventHandler } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';
import LinkLabel from '../Labels/LinkLabel';

export interface flexProps {
  flexValue: number | undefined;
  backGroundColor: string | undefined;
  color: string | undefined;
  alignBottom: boolean;
}

const SectionDiv = styled.div<flexProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  justify-content: ${(props) => (props.alignBottom ? 'flex-end' : '')};
  align-items: ${(props) => (props.alignBottom ? 'center' : '')};
  color: ${(props) => (props.color ? props.color : constants.vacantSeatMain)};
  flex: ${(props) => (props.flexValue ? props.flexValue : 1)};
  background-color: ${(props) =>
    props.backGroundColor
      ? props.backGroundColor
      : constants.htmlBrowserDisplayBgColor1};
  border-right: 1px solid ${constants.itemTitleBgColor2};
  padding: 0.2rem;
  div {
    border-right: 0px;
  }
`;

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
  alignBottom?: boolean;
  flightNumberClick?: MouseEventHandler;
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
  flightNumberClick,
  alignBottom = false,
}) => (
  <SectionDiv
    color={color}
    backGroundColor={backGroundColor}
    flexValue={flexValue}
    alignBottom={alignBottom}
  >
    {type === 'Text' &&
      content !== null &&
      content &&
      content.map((v, index) => (
        <SectionDiv
          color={color}
          backGroundColor={backGroundColor}
          flexValue={flexValue}
          key={v + index.toString()}
          alignBottom={alignBottom}
        >
          {v}
        </SectionDiv>
      ))}
    {type === 'TextAndIcon' &&
      iconType === 'Plus' &&
      content !== null &&
      content && (
        <>
          <SectionDiv
            color={color}
            backGroundColor={backGroundColor}
            flexValue={flexValue}
            alignBottom={alignBottom}
          >
            {content[0]}
          </SectionDiv>
          <ListAdd />
        </>
      )}
    {type === 'Icon' && iconType === 'Seat' && <IconDSeatBlue />}
    {type === 'Icon' && iconType === 'NoFFP' && (
      <IcnDeskNoffp height="27px" width="27px" />
    )}
    {type === 'Link' && linkUrl && linkName && (
      <LinkLabel label={linkName} onClick={flightNumberClick} />
    )}
  </SectionDiv>
);

export default Section;
