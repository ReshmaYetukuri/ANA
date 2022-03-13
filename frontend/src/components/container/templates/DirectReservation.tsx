/* eslint-disable react/jsx-no-duplicate-props */
import 'App.scss';
import { ShortKeysRestrictService } from 'modules/service/shortkeys.restrict.service';
// import styled from '@emotion/styled';
import  { useEffect } from 'react';
import { IconButtonTypes } from 'constants/commonTypes';
import { PopUp } from 'components/presentational/molecules/PopUp/PopUp';
import { Label } from 'components/presentational/atoms/Labels/Label';
import { CommonButton } from 'components/presentational/atoms/Buttons/CommonButton';
import { TextBox } from 'components/presentational/atoms/Inputs/TextBox';
import IconButton from 'components/presentational/atoms/Buttons/IconButton';
import { InputWithSearchIcon } from 'components/presentational/molecules/InputWithSearchIcon/InputWithSearchIcon';
// import Table from './Table';
// import { p} from '../../../assets/svgr-components';

// import { DropdownWithSearchIcon } from 'components/presentational/molecules/DropdownWithSearchIcon/DropdownWithSearchIcon';
// import SvgIconCalender15 from 'assets/svgr-components/IconCalender15';
// import DateBox from 'components/presentational/molecules/DateBox/DateBox';
// import Footer from './components/presentational/molecules/Footer/Footer';

const DirectReservation = () => {
  // common function to restict broswer actions etc. do NOT remove
  useEffect(() => {
    ShortKeysRestrictService.restrictBrowserActions();
  }, []);
  const changeHandler = () => {
    // const chName = (e.target as HTMLInputElement).value;
    // setNoOfSeats(chName)
  };
  //  const tableData = [
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //    {fltNo: '02', cls: 'Y', date: '1/2/2022', depApo: 'hyd', arrApo: 'andhra', actionCode: 'B' },
  //  ];

//  const  tableHeading =[
//      'FLT NO', 'CLS','DATE','DEP APP','ARR APO','ACTION CODE'
//   ];
    
   
  return (
    <>
      <PopUp popupHeading="Enter Search Criteria" openPopUp>
       <div style={{ display: 'flex', flexDirection: 'column' }}>    
       
    
          {/* Top Header section Start */}
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            <b>*</b>
          </div>
          <div>
            <Label label="Number of seats" >Number of seats</Label>
          </div>
          <div>
            <TextBox value="" onChange={changeHandler} />
          </div>
         <div>
            <CommonButton name="MISC (X)" width="5em" />
          </div>
          <div>
            <IconButton
              type={IconButtonTypes.help}
              width="1em"
              height="1em"
              isFullSize
            />
          </div>
          <div>
            <a href="https://www.randomurl.com" style={{ overflow: 'clip' }}>
              Check out the deal classes from our partners here
            </a>
          </div>
          <div>
            <CommonButton name="Status Examples" width="9em" />
          </div>
          <div>
            <CommonButton name="Clear/Undo" width="6em" />
          </div>
        </div>
        {/* Top Header section End */}

        {/* Table Section Start */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            overflowY: 'hidden',
            flex:1
          }}
         >
           
        <InputWithSearchIcon textBoxOnChange={()=>{alert(231)}}textBoxValue="jjjj"/> 
        <InputWithSearchIcon textBoxOnChange={()=>{alert(231)}}textBoxValue="jjjj"/> 
       <IconButton
      type={IconButtonTypes.search}
      width="27px"
      height="27px"
      isFullSize
    />  
     
     {/* <Table tableData={tableData} tableHeading={tableHeading}/> */}
     

        </div>
        {/* Table Section End */}

        {/* Footer Section Start */}
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <CommonButton name="Find section by flight name" width="300px" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CommonButton name="Previous" /> {}
            <CommonButton name="Next" />
          </div>
          <div>
            <CommonButton name="Forest(A)" />
          </div>
          <div>
            <CommonButton name="Book" width="80px" />
          </div>
        </div>
        {/* Footer Section End */}
       </div>
      </PopUp>
    </>
  );
};

export default DirectReservation;


