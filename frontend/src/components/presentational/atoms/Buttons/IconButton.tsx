import styled from '@emotion/styled';
import SvgBtnHeaderRloc from 'assets/svgr-components/BtnHeaderRloc';
import SvgButtonWebMindsSmall from 'assets/svgr-components/ButtonWebMindsSmall';
import SvgIcnHandy3030 from 'assets/svgr-components/IcnHandy3030';
import SvgIcnHelp3030 from 'assets/svgr-components/IcnHelp3030';
import SvgIcnSwipe from 'assets/svgr-components/IcnSwipe';
import SvgIconCacao from 'assets/svgr-components/IconCacao';
import SvgIconPHtml from 'assets/svgr-components/IconPHtml';
import SvgLoupe from 'assets/svgr-components/Loupe';
import SvgMarvelCloseButton from 'assets/svgr-components/MarvelCloseButton';
import constants from '../../../../constants/constants.module.scss';

const Button = styled.button`
  background: linear-gradient(
    rgb(203, 225, 236) 10%,
    #fff 40%,
    rgb(203, 225, 236)
  );
  border-width: 1px;
  border-color: ${constants.basicBgColor};
  text-align: center;
  min-width: 2rem;
  :hover {
    -webkit-box-shadow: 0px 0px 5px 2px ${constants.basicBgColor};
    border-width: 1.5px;
  }
`;

type IconButtonProps = {
  type: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

const returnIcon = (type: string) => {
  switch (type) {
    case 'history':
      return <SvgBtnHeaderRloc />;
    case 'help':
      return <SvgIcnHelp3030 />;
    case 'PNRSearch':
      return <SvgIconPHtml />;
    case 'search':
      return <SvgLoupe />;
    case 'cacao':
      return <SvgIconCacao />;
    case 'cardReader':
      return <SvgIcnSwipe />;
    case 'webMinds':
      return <SvgButtonWebMindsSmall />;
    // case 'calendar':
    //   return <Sv />;
    case 'close':
      return <SvgMarvelCloseButton />;
    case 'usefulTools':
      return <SvgIcnHandy3030 />;

    default:
      return <span>No Image Found</span>;
  }
};

const IconButton: React.FC<IconButtonProps> = ({ type, onclick }) => (
  <Button onClick={onclick}>{returnIcon(type)}</Button>
);

export default IconButton;
