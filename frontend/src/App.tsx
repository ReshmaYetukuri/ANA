import 'App.scss';
// import { CommonButton } from 'components/presentational/atoms/Buttons/CommonButton';
import MainHeaderButton from 'components/presentational/atoms/Buttons/MainHeaderButton';
// import { BreadcrumbBox } from 'components/presentational/atoms/Breadcrumbs/BreadcrumbBox';

export const App = () => (

  <>
    <div style={{width: 350, margin: 20}}>
      {/* <CommonButton name="Close" /> */}
      <MainHeaderButton text="Main header button" />
      {/* <BreadcrumbBox name="ddsfsdf" isActive /> */}
    {/* <AmcNoInput handleCacao={()=>{alert('cacao')}} handleCardReader={()=>{alert('cacao1')}} handleWebMines={()=>{alert('cacao2')}} /> */}
  </div>
  </>
);

export default App;
