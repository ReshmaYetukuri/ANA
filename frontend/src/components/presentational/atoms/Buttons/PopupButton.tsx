import { Button } from 'react-bootstrap';

type PopupButtonProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const PopupButton = ({ label, onClick }: PopupButtonProps) => (
  <Button className="nextButton" onClick={onClick}>
    {label}
  </Button>
);

PopupButton.defaultProps = {
  onClick: null,
};

export default PopupButton;
