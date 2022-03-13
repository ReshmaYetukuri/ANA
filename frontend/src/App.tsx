 import DirectReservation from './components/container/templates/DirectReservation';

 export const App = () => <DirectReservation/>

 export default App; 

// import 'App.scss';
// import { ShortKeysRestrictService } from 'modules/service/shortkeys.restrict.service';
// // import styled from '@emotion/styled';
// import React, { useEffect } from 'react';
// import { IconButtonTypes } from 'constants/commonTypes';
// // import DropdownSelect from 'components/presentational/atoms/DropDown/Dropdown';
// import { PopUp } from './components/presentational/molecules/PopUp/PopUp';
// import { Label } from './components/presentational/atoms/Labels/Label';
// import { CommonButton } from './components/presentational/atoms/Buttons/CommonButton';
// import Table from './components/presentational/atoms/Tables/Table';
// import { TextBox } from './components/presentational/atoms/Inputs/TextBox';
// import IconButton from './components/presentational/atoms/Buttons/IconButton';
// // import Footer from './components/presentational/molecules/Footer/Footer';

// // const BookDiV=styled.div`



// // `

// export const App = () => {
//     // common function to restict broswer actions etc. do NOT remove
//     useEffect(() => {
//         ShortKeysRestrictService.restrictBrowserActions();
//     }, []);
//     const changeHandler = () => {
//         // const chName = (e.target as HTMLInputElement).value;
//         // setNoOfSeats(chName)
//     };
//     // const tableData = [
//     //     { date1: '', date2: '', dep: '', arr: '', select: '' },
//     //     { date1: '', date2: '', dep: '', arr: '', select: '' },
//     //     { date1: '', date2: '', dep: '', arr: '', select: '' },
//     //     { date1: '', date2: '', dep: '', arr: '', select: '' },
//     // ];

//     return (
//         <>
//             <PopUp popupHeading="Enter Search Criteria" openPopUp>
//                 {/* Top Header section Start */}
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//                     <div>
//                         <b>*</b>
//                     </div>
//                     <div>
//                         <Label label="Number of seats" >Number of seats</Label>
//                     </div>
//                     <div>
//                         <TextBox value="" onChange={changeHandler} />
//                     </div>
//                     <div>
//                         <CommonButton name="MISC (X)" width="5em" />
//                     </div>
//                     <div>
//                         <IconButton
//                             type={IconButtonTypes.help}
//                             width="1em"
//                             height="1em"
//                             isFullSize
//                         />
//                     </div>
//                     <div>
//                         <a href="https://www.randomurl.com" style={{ overflow: 'clip' }}>
//                             Check out the deal classes from our partners here
//                         </a>
//                     </div>
//                     <div>
//                         <CommonButton name="Status Examples" width="9em" />
//                     </div>
//                     <div>
//                         <CommonButton name="Clear/Undo" width="6em" />
//                     </div>
//                 </div>
//                 {/* Top Header section End */}

//                 {/* Table Section Start */}
//                 <div
//                     style={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         overflowY: 'hidden',
//                     }}
//                 >
//         {/* <thead>
//         <Label label='*FLT NO.'/>
//          <Label label='*CLS'/>
//          <Label label='*Date'/>
//          <Label label='*DEP APO'/>
//          <Label label='*ARR APO'/>
//          <span style={{float:'right',color:"#5f9ea0"}}><Label label='*ACTION CODE'/></span>
//          </thead> */}
         
//          <TextBox width="40px" value="" onChange={changeHandler} />
//          <TextBox width="15px" value="" onChange={changeHandler} />
//         <TextBox width="40px" value="" onChange={changeHandler} />
//          <TextBox width="15px" value="" onChange={changeHandler} />
//          <TextBox width="30px" value="" onChange={changeHandler} />
//          <TextBox width="80px" value="" onChange={changeHandler} />
//          <TextBox width="20px" value="" onChange={changeHandler} />
//          <TextBox width="20px" value="" onChange={changeHandler} />
//          <TextBox width="60px" value="" onChange={changeHandler} />
//          <TextBox width="20px" value="" onChange={changeHandler} />
//          <TextBox width="70px" value="" onChange={changeHandler} />
//          <TextBox width="60px" value="" onChange={changeHandler} />
//          <TextBox width="40px" value="" onChange={changeHandler} />
//          <TextBox width="40px" value="" onChange={changeHandler} />
//       {/* <DropdownSelect
//          values={[
//              {
//                   id :'1',
//                  name : 'resh',
//              },
//          ]}
//       /> */}
//                 </div>
//                 {/* Table Section End */}

//                 {/* Footer Section Start */}
//                 <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//                     <div>
//                         <CommonButton name="Find section by flight name" width="300px" />
//                     </div>
//                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                         <CommonButton name="Previous" /> { }
//                         <CommonButton name="Next" />
//                     </div>
//                     <div>
//                         <CommonButton name="Forest(A)" />
//                     </div>
//                     <div>
//                         <CommonButton name="Book" width="80px" />
//                     </div>
//                 </div>
//                 {/* Footer Section End */}
//             </PopUp>
//         </>
//     );
// };

// export default App;




