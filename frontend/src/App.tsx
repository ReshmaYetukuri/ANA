import 'App.scss';
import { ApplicationMenuButton } from 'components/presentational/atoms/ApplicationMenuButton/ApplicationMenuButton';
import { ApplicationMenuItem } from 'components/presentational/atoms/ApplicationMenuItems/ApplicationMenuItem';
import { ARNKSwitch } from 'components/presentational/atoms/ARNKswitch/ArnkSwitch';
import ApplicationMenu from 'components/presentational/molecules/ApplicationMenuComponent/ApplicationMenu';
import {AmcNoInput} from './components/presentational/molecules/AmcNo/AmcNoInput';


export const App = () => (

  <>
    <div>Hai</div>
    <div style={{width: 150}}>
      <ARNKSwitch onClick={(a)=>{alert(a)}} />
      <ApplicationMenu label='Signin/SignOut' menuList={[{key: 'keyeeeeeeee', name: "Signin"},{key: 'keyeeeeee2ee', name: "menu 1"},{key: 'keyeeeee1eee', name: "menu 1"}]} />
    <ApplicationMenuButton label='Transmit' />
    <ApplicationMenuItem label='label' onClick={()=>{alert(123)}} eventKey='label' />
    </div>
    <AmcNoInput handleCacao={()=>{alert('cacao')}} handleCardReader={()=>{alert('cacao1')}} handleWebMines={()=>{alert('cacao2')}} />
  </>
);

export default App;
