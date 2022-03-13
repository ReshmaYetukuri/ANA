import { FC, useState } from 'react';
import './Confirm.scss';
import SvgIcnCheck from 'assets/svgr-components/IcnCheck';
import { Label } from 'components/presentational/atoms/Labels/Label';
import { CommonButton } from 'components/presentational/atoms/Buttons/CommonButton';
import { PopUp } from 'components/presentational/molecules/PopUp/PopUp';
import { CheckBoxWithLabel } from 'components/presentational/molecules/CheckBoxWithLabel/CheckBoxWithLabel';
import constants from '../../../../constants/styleConstants.module.scss';

type ConfirmationMessageProps = {
  children: JSX.Element | JSX.Element[] | string;
  showButtons: {
    yesButton?: boolean;
    noButton?: boolean;
    okButton?: boolean;
    cancelButton?: boolean;
  };
  onYesClicked?: () => void;
  onNoClicked?: () => void;
  onOkClicked?: () => void;
  onCancelClicked?: () => void;
  // setScreen: () => void;
  isVerification?: boolean;
  openFSHPopUp: boolean;
  setopenFSHPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmationHeader: FC<{ isVerification: boolean }> = ({
  isVerification,
}) => (
  <div className="confirmation-message-header">
    <SvgIcnCheck width={40} />
    <Label
      label={isVerification ? 'Confirm' : 'Confirmation Message'}
      fontColor={constants.basicBgColorInputField}
    />
  </div>
);

const ConfirmationMessage: FC<ConfirmationMessageProps> = ({
  children,
  showButtons,
  onCancelClicked,
  onNoClicked,
  onOkClicked,
  onYesClicked,
  // setScreen,
  isVerification = false,
  openFSHPopUp,
  setopenFSHPopUp,
}) => {
  const [checked, setChecked] = useState(false);

  const checkBoxClicked = () => {
    setChecked(!checked);
  };

  const VerificationFooter = () => (
    <div>
      <CheckBoxWithLabel
        checkBoxFor="link"
        label="Click if information advised"
        onChange={checkBoxClicked}
        isChecked={checked}
      />
    </div>
  );

  return (
    <div>
      <PopUp
        popupHeading={<ConfirmationHeader isVerification={isVerification} />}
        openPopUp={openFSHPopUp}
        onClosePopUp={() => {
          setopenFSHPopUp(!openFSHPopUp);
          // setScreen();
        }}
        popUpClassName="confirmation-modal"
        showCloseButton
        showStarButton={false}
        showInfoButton={false}
        modalSize="lg"
      >
        <div className="confirmation-message-modal-body">
          <div className="message-area">
            <div className="message-content">{children}</div>
          </div>

          <div
            className={
              isVerification ? 'verification-footer-content' : 'footer-content'
            }
          >
            {isVerification && <VerificationFooter />}
            <div className="footer-button-section">
              <div className="verification-button">
                {showButtons.yesButton && (
                  <div className="button-wrapper">
                    <CommonButton
                      name="Yes"
                      width="6rem"
                      onClick={onYesClicked}
                    />
                  </div>
                )}
                {showButtons.okButton && (
                  <div className="button-wrapper">
                    <CommonButton
                      name="Ok"
                      // disabled={isVerification ? !checked : false}
                      width="6rem"
                      onClick={onOkClicked}
                    />
                  </div>
                )}
                {showButtons.noButton && (
                  <div className="button-wrapper">
                    <CommonButton
                      name="No"
                      width="6rem"
                      onClick={onNoClicked}
                    />
                  </div>
                )}
                {showButtons.cancelButton && (
                  <div className="button-wrapper">
                    <CommonButton
                      name="Cancel"
                      width="6rem"
                      onClick={onCancelClicked}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </PopUp>
    </div>
  );
};

ConfirmationMessage.defaultProps = {
  isVerification: false,
  onYesClicked: () => {
    //
  },
  onNoClicked: () => {
    //
  },
  onOkClicked: () => {
    //
  },
  onCancelClicked: () => {
    //
  },
};

export default ConfirmationMessage;
