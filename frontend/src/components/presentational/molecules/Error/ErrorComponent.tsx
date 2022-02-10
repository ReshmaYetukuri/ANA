import styled from '@emotion/styled';
import { Label } from '../../atoms/Labels/Label';
import constants from '../../../../constants/styleConstants.module.scss';

type ErrorComponentProps = {
  modelErrorType?: string | undefined;
  errors: {
    errorMsg?: string;
  }[];
};

interface ErrorHeadProps {
  errorType?: string;
}

const clickOnError = () => {
  console.log('error clicked');
};

const BoxStyled = styled.div<ErrorHeadProps>`
  width: ${(props: ErrorHeadProps) =>
    props.errorType === 'ARNK' ? 16 : 20}rem;
  background-color: ${constants.errorMessageBgColor};
  border: 1px solid ${constants.itemTitleBgColor2};
  height: 2.5rem;
  padding: 0 0.3rem;
  overflow-y: scroll;
`;

export const ErrorComponent = ({
  errors,
  modelErrorType,
}: ErrorComponentProps) => {
  if (errors.length === 0) return null;

  return (
    <BoxStyled errorType={modelErrorType}>
      {errors?.map((label) => (
        <div data-type={modelErrorType} key={label.errorMsg}>
          {label.errorMsg && (
            <Label
              onClick={clickOnError}
              label={label.errorMsg}
              fontColor={constants.errorMessageFontColor}
            />
          )}
        </div>
      ))}
    </BoxStyled>
  );
};
ErrorComponent.defaultProps = {
  modelErrorType: null,
};
