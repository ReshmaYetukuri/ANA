import styled from '@emotion/styled';

const Button = styled.button`
  background: linear-gradient(
    rgb(203, 225, 236) 10%,
    #fff 40%,
    rgb(203, 225, 236)
  );
  border-width: 0.01px;
  border-color: WindowFrame;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  width: 12%;
  margin: 1rem;
  border-style: outset;
  :hover {
    border-color: #c5d9f2;
    -webkit-box-shadow: 0px 0px 5px 2px #c5d9f2;
  }
`;

type ButtonProps = {
  name: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const CommonButton = ({ name, onclick }: ButtonProps) => (
  <Button className={`button-${name}`} onClick={onclick}>
    {name}
  </Button>
);

CommonButton.defaultProps = {
  onclick: null,
};
