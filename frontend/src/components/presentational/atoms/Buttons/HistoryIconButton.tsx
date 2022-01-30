import styled from '@emotion/styled';
import btnHeaderRloc from '../../../../assets/images/btn_header_rloc.png';

const ICONBUTTON = styled.button`
  background-image: url(${btnHeaderRloc});
  width: 26px;
  height: 23px;
  background-repeat: no-repeat;
  border: none;
`;

type HistoryIconButtonProps = {
  onBtnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const HistoryIconButton = ({ onBtnClick }: HistoryIconButtonProps) => (
  <ICONBUTTON onClick={onBtnClick} />
);

HistoryIconButton.defaultProps = {
  onBtnClick: null,
};

export default HistoryIconButton;
