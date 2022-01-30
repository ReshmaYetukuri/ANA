import styled from '@emotion/styled';

const FOOTERLABEL = styled.label({
  paddingLeft: '0.7rem',
  fontSize: '1rem',
});

type FooterLabelProps = {
  text: string;
};

export const FooterLabel = ({ text }: FooterLabelProps) => {
  return <FOOTERLABEL>{text}</FOOTERLABEL>;
};
