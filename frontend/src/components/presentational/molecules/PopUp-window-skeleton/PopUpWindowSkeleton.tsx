// import "./Skeleton.scss";
import styled from '@emotion/styled';
// import { Breadcrumbs } from '../Breadcrumb/Breadcrumbs';

import iconHandy30 from '../../../../assets/images/icn_handy_30-30.png';
import iconHelp30 from '../../../../assets/images/icn_help_30-30.png';
import popUpCloseBtn from '../../../../assets/images/pop_up_close.png';

type PopUpWindowProps = {
  footerStatus?: boolean;
  headingLabel: string;
  children?: JSX.Element | JSX.Element[];
};

const Container = styled.div`
  // border: 0.1rem solid #b4cde7;
  margin: auto;
  max-height: 45.25rem;
  max-width: 78.5rem;

  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
`;
const Header = styled.div`
  // background: rgba(60,178,180,1);
  background: linear-gradient(
    89deg,
    rgba(0, 160, 155, 1) 0%,
    rgba(0, 160, 155, 1) 96%
  );
  height: 3.3rem;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  padding: 0.6rem 0 0 1.5rem;
  font-weight: bold;
  color: white;
`;

const Body = styled.div`
  background: #eeeeee;
  height: 38.25rem;
`;
const Footer = styled.div`
  background: #c3c3c3;
  height: 3.5rem;
`;
// const Button = styled.button`
//   background: ${(props) => props.color};
//   border: 1px solid white;
//   border-radius: 5px;
//   color: white;
//   float: right;
//   margin-right: 1px;
// `;
const ButtonWrapper = styled.div`
  margin: 0.5rem 0.5rem 0 0;
  float: right;
  img {
    padding-right: 3px;
  }
`;
const Buttons = () => (
  <ButtonWrapper>
    <img src={iconHandy30} alt="icon_handy" />
    <img src={iconHelp30} alt="icon_help" />
    <img src={popUpCloseBtn} alt="icon_handy" />
  </ButtonWrapper>
);

// const breadcrumbsTitles = [
//   {
//     pageName: 'Search',
//     isActive: true,
//   },
//   {
//     pageName: 'Book Flight',
//     isActive: false,
//   },
//   {
//     pageName: 'Fare Calc.',
//     isActive: false,
//   },
//   {
//     pageName: 'Result',
//     isActive: false,
//   },
// ];

export const PopUpWindow = ({
  children,
  headingLabel,
  footerStatus = true,
}: PopUpWindowProps) => (
  <Container>
    <Header>
      <Label>{headingLabel}</Label>
      <Buttons />
    </Header>
    <Body>{children}</Body>
    {footerStatus && <Footer />}
  </Container>
);

PopUpWindow.defaultProps = {
  footerStatus: null,
  children: null,
};

// TODO
// -> Proper icons needs to be added inside of Buttons component
// -> Footer is optional, but is enabled by default, if u need u can set the footerStatus as false to avoid footer
