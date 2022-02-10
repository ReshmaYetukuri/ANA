import { MouseEventHandler, useState } from 'react';
import { Modal } from 'react-bootstrap';
import styled from '@emotion/styled';
import { IconButtonTypes } from '../../../../constants/commonTypes';
import IconButton from '../../atoms/Buttons/IconButton';

import { ErrorComponent } from '../Error/ErrorComponent';

const Label = styled.label`
  font-size: 1.2rem;
  padding: 0rem 0 0 0.5rem;
  font-weight: bold;
  color: white;
`;

const Footer = styled.div`
  background: #c3c3c3;
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  float: right;
  gap: 2px;
  img {
    padding-right: 3px;
  }
`;
type ButtonType = {
  onClosePopUp: MouseEventHandler<HTMLButtonElement>;
  onHelpClicked?: MouseEventHandler<HTMLButtonElement>;
  onStarClicked?: MouseEventHandler<HTMLButtonElement>;
  showStar: boolean;
  showClose: boolean;
  showQuestion: boolean;
};

const Buttons = ({
  onClosePopUp,
  onHelpClicked,
  onStarClicked,
  showStar,
  showClose,
  showQuestion,
}: ButtonType) => (
  <ButtonWrapper>
    {showStar ? (
      <IconButton
        onclick={onStarClicked}
        type={IconButtonTypes.usefulTools}
        width="40px"
        height="40px"
        isFullSize
      />
    ) : null}
    {showQuestion ? (
      <IconButton
        onclick={onHelpClicked}
        type={IconButtonTypes.help}
        width="40px"
        height="40px"
        isFullSize
      />
    ) : null}
    {showClose ? (
      <IconButton
        onclick={onClosePopUp}
        type={IconButtonTypes.close}
        width="40px"
        height="40px"
        isFullSize
      />
    ) : null}
  </ButtonWrapper>
);

type PopUpProps = {
  popupHeading?: string;
  modalSize?: 'xl' | 'sm' | 'lg';
  popUpClassName?: string;
  modelErrorType?: string;
  openPopUp: boolean;
  showStarButton?: boolean;
  showCloseButton?: boolean;
  showInfoButton?: boolean;
  children: JSX.Element | JSX.Element[] | string;
  onClosePopUp?: () => void;
  onHelpClicked?: () => void;
  onStarClicked?: () => void;
  errorData?: {
    errorMsg?: string;
  }[];
  footerContent?: JSX.Element | JSX.Element[] | string;
};

export const PopUp = ({
  popupHeading,
  modalSize,
  popUpClassName,
  modelErrorType,
  openPopUp,
  children,
  showStarButton = true,
  showCloseButton = true,
  showInfoButton = true,
  onStarClicked = () => {
    //
  },
  onHelpClicked = () => {
    //
  },
  onClosePopUp = () => {
    //
  },
  errorData,
  footerContent,
}: PopUpProps) => {
  const [show, setShow] = useState(openPopUp);
  const handleClose = () => setShow(false);
  const showError = errorData !== undefined && !!errorData[0]?.errorMsg;
  if (!openPopUp) return null;

  return (
    <>
      <Modal
        show={show}
        size={modalSize}
        onHide={handleClose}
        backdrop="static"
        animation={false}
        className={popUpClassName}
      >
        <Modal.Header>
          <Label>{popupHeading}</Label>
          {showError && (
            <ErrorComponent
              modelErrorType={modelErrorType}
              errors={errorData}
            />
          )}
          <Buttons
            showStar={showStarButton}
            showClose={showCloseButton}
            showQuestion={showInfoButton}
            onClosePopUp={onClosePopUp}
            onHelpClicked={onHelpClicked}
            onStarClicked={onStarClicked}
          />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {footerContent ? <Footer>{footerContent}</Footer> : null}
      </Modal>
    </>
  );
};

Buttons.defaultProps = {
  onHelpClicked: () => {
    //
  },
  onStarClicked: () => {
    //
  },
};

PopUp.defaultProps = {
  popupHeading: null,
  modalSize: 'xl',
  popUpClassName: null,
  modelErrorType: null,
  onHelpClicked: () => {
    //
  },
  onStarClicked: () => {
    //
  },
  onClosePopUp: () => {
    //
  },
  showStarButton: true,
  showCloseButton: true,
  showInfoButton: true,
  errorData: [],
  footerContent: null,
};
export default PopUp;
