import { useState } from 'react';
import styled  from "@emotion/styled";
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

interface DropdownSelectProps {
  values: Data[];
}

export interface Data {
  id: string,
  name:string,
  value:string
}

//TODO -> need to check width and height
//TODO -> need to change the background color of options on hover, check the background color of select(yellow), add caret button to the dropdown
// TODO - > check Eslint issues
// TODO -> can type (editable dropdown) 

const Toggle = styled(DropdownToggle)`
background-color:yellow;
color:black;
font-weight:bold;
width:12em;
height:30px;
&:hover{
  background-color:yellow;
  color:black;
}
&.dropdown-toggle.btn:focus{
  background-color:yellow;
  box-shadow:none;

}

&:hover{
  background-color: #aeb5bb;
}
&.dropdown-toggle.btn{
  background-color:yellow;
  color:black;
  border-radius: 0px;
  box-shadow:none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .375rem .5rem;
  
}
`
const Menu = styled(DropdownMenu)`
background-color:yellow;
width: 12rem;
border-radius: 0px;
border:1px solid black;

`
const DefaultOption = styled(DropdownItem)`
height: 30px;
&:hover{
  background-color: #aeb5bb;
}`
const Options = styled(DropdownItem) `
font-weight:bold;
padding: 5px ;
&:hover{
  background-color: #aeb5bb;
}
&.dropdown-item:active {
  color:black;
}
&.selected-item{
  background-color:#aeb5bb;
}
`



const DropdownSelect: React.FunctionComponent<DropdownSelectProps> = (
  props,
) => {
  const [selectedValueObj,setSelectedValueObj] = useState <Data> (Object);

  return (
    <>
  <Dropdown>
  <Toggle >
    <span>{selectedValueObj.name}</span>
    </Toggle>

  <Menu>
  
  <DefaultOption></DefaultOption>
  {props.values.map((data) => (
          <Options className={` ${data.value === selectedValueObj.value && "selected-item"}`} onClick={(e) => setSelectedValueObj(data)} key={data.id}>{data.name}</Options>
        ))}
    
    </Menu>
    </Dropdown>
             
    </>
  );
};

export default DropdownSelect;
