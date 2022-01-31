import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import styled from '@emotion/styled';
import { ErrorComponent } from 'components/presentational/atoms/ARNK/Error/ErrorComponent';
import { RegisterButton } from 'components/presentational/atoms/Buttons/RegisterButton';
import { CommonButton } from '../../atoms/Buttons/Button';
import { FooterLabelInput } from '../FooterLabelInput/FooterLabelInput';
import iconHandy30 from '../../../../assets/images/icn_handy_30-30.png';
import iconHelp30 from '../../../../assets/images/icn_help_30-30.png';
import popUpCloseBtn from '../../../../assets/images/pop_up_close.png';

const Label = styled.label`
  font-size: 1.2rem;
  padding: 0rem 0 0 0.5rem;
  font-weight: bold;
  color: white;
`;

const Footer = styled.div`
  background: #c3c3c3;
  height: 3.5rem;
`;

const ButtonWrapper = styled.div`
  margin: 0rem -0.8rem 0rem 0rem;
  float: right;
  img {
    padding-right: 3px;
  }
`;

// eslint-disable-line
const Buttons = ({ onClosePopUp }: any) => (
  <ButtonWrapper>
    <img src={iconHandy30} alt="icon_handy" />
    <img src={iconHelp30} alt="icon_help" />
    <img
      src={popUpCloseBtn}
      alt="icon_handy"
      onClick={onClosePopUp} // eslint-disable-line
      role="presentation"
    />
  </ButtonWrapper>
);

type BootstrapPopUpSkeletonProps = {
  label?: string;
  popUpClassName?: string;
  openPopUp: boolean;
  showCloseBtn?: boolean;
  showSelectBtn?: boolean;
  showLabelInputBtn?: boolean;
  showRegisterBtn?: boolean;
  children: JSX.Element | JSX.Element[] | string;
  handleRegister?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClosePopUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  errorData?: {
    errorMsg: string;
  }[];
};

export const BootstrapPopUpSkeleton = ({
  label,
  popUpClassName,
  openPopUp,
  children,
  showCloseBtn,
  showSelectBtn,
  showLabelInputBtn,
  showRegisterBtn,
  onClosePopUp,
  errorData,
  handleRegister,
}: BootstrapPopUpSkeletonProps) => {
  const [show, setShow] = useState(openPopUp);
  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  if (!openPopUp) return null;

  return (
    <>
      <Modal
        show={show}
        size="xl"
        onHide={handleClose}
        backdrop="static"
        animation={false}
        className={popUpClassName}
      >
        <Modal.Header>
          <Label>{label}</Label>
          {!!errorData && <ErrorComponent errors={errorData} />}
          <Buttons onClosePopUp={onClosePopUp} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Footer>
          {showCloseBtn ? (
            <CommonButton name="Close" onclick={onClosePopUp} />
          ) : null}
          {showLabelInputBtn ? <FooterLabelInput /> : null}
          {showSelectBtn ? <CommonButton name="Select" /> : null}
          {showRegisterBtn ? (
            <RegisterButton name="Register" onclick={handleRegister} />
          ) : null}
        </Footer>
      </Modal>
    </>
  );
};
BootstrapPopUpSkeleton.defaultProps = {
  label: null,
  popUpClassName: null,
  onClosePopUp: null,
  showCloseBtn: false,
  showSelectBtn: false,
  showLabelInputBtn: false,
  showRegisterBtn: false,
  errorData: [],
  handleRegister: false,
};
export default BootstrapPopUpSkeleton;

// TODO
// -> Proper icons needs to be added inside of Buttons component
// -> Footer is optional, but is enabled by default, if u need u can set the footerStatus as false to avoid footer
