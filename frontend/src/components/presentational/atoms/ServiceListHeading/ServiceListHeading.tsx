import styled from "@emotion/styled";
import { FC } from "react";


const HeadingDiv = styled("div")`
display: grid;
  grid-template-columns: auto 1fr; */
  align-items: center;
 text-align: center;
padding: 3px; 
background: rgb(0,160,155);
background: linear-gradient(153deg, rgba(0,160,155,1) 0%, rgba(0,160,155,1) 18%, rgba(19,88,92,1) 100%);

`;
const HeadingText = styled("h2")`
  align-self: center;
  color: white;
  font-family: sans-serif;
  margin: 0;
  font-size: 1.1rem;
  padding-right: 2rem;
`;

type ServiceListHeadingProps = {
  label: string;
  icon: JSX.Element;
};

const ServiceListHeading:FC<ServiceListHeadingProps> = ({
  label,
  icon
}) => 
   (
    <>
      <HeadingDiv>
        {icon}
        <HeadingText className="headingText">{label}</HeadingText>
      </HeadingDiv>
    </>
  );


export default ServiceListHeading;
