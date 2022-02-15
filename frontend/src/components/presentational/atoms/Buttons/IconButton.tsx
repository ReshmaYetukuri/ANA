import { IconButtonTypes } from 'constants/commonTypes';
import styled from '@emotion/styled';
import SvgBtnHeaderRloc from 'assets/svgr-components/BtnHeaderRloc';
import SvgButtonWebMindsSmall from 'assets/svgr-components/ButtonWebMindsSmall';
import SvgIcnHandy3030 from 'assets/svgr-components/IcnHandy3030';
import SvgIcnHelp3030 from 'assets/svgr-components/IcnHelp3030';
import SvgIcnSwipe from 'assets/svgr-components/IcnSwipe';
import SvgIconCacao from 'assets/svgr-components/IconCacao';
import SvgIconPHtml from 'assets/svgr-components/IconPHtml';
import SvgLoupe from 'assets/svgr-components/Loupe';
import SvgIconCalender15 from 'assets/svgr-components/IconCalender15';
import { JaAvailabilityDayofweekleftButton, JaAvailabilityDayofweekrightButton } from 'assets/svgr-components';
import SvgIcnClose3030 from 'assets/svgr-components/IcnClose3030';
import constants from '../../../../constants/styleConstants.module.scss';


const Button = styled.button<ButtonProps>`
  background: ${constants.commonButtonGradient};
  border-width: 1px;
  border-color: ${constants.basicBgColor};
  text-align: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => (props.isFullSize ? '0px' : '3px')};
  display: flex;
  :hover {
    -webkit-box-shadow: 0px 0px 5px 2px ${constants.basicBgColor};
  }
  svg,img {
    width: 100%;
    height: 100%;
  }
`;

type IconButtonProps = {
  width: string;
  height: string;
  type: IconButtonTypes;
  isFullSize: boolean;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonProps = {
  width: string;
  height: string;
  isFullSize: boolean;
};

const returnIcon = (type: IconButtonTypes) => {
  switch (type) {
    case IconButtonTypes.history:
      return <SvgBtnHeaderRloc />;
    case IconButtonTypes.help:
      return <SvgIcnHelp3030 />;
    case IconButtonTypes.PNRSearch:
      return <SvgIconPHtml />;
    case IconButtonTypes.search:
      return <SvgLoupe />;
    case IconButtonTypes.cacao:
      return <SvgIconCacao />;
    case IconButtonTypes.cardReader:
      return <SvgIcnSwipe />;
    case IconButtonTypes.webMinds:
      return <SvgButtonWebMindsSmall />;
    case IconButtonTypes.calendar:
      return <SvgIconCalender15/>
    case IconButtonTypes.close:
      return <SvgIcnClose3030 />;
    case IconButtonTypes.usefulTools:
      return <SvgIcnHandy3030 />;
    case IconButtonTypes.arrowLeft:
      return <JaAvailabilityDayofweekleftButton />;
    case IconButtonTypes.arrowRight:
      return <JaAvailabilityDayofweekrightButton />;

    default:
      return <span>No Image Found</span>;
  }
};

const IconButton: React.FC<IconButtonProps> = ({
  type,
  onclick,
  height,
  width,
  isFullSize,
}) => (
  <Button
    onClick={onclick}
    width={width}
    height={height}
    isFullSize={isFullSize}
  >
    {returnIcon(type)}
  </Button>
);

export default IconButton;
