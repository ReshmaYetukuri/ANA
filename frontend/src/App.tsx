import 'App.scss';
// import { BootstrapPopUpButton } from './components/presentational/atoms/BootstrapPopUpButton/BootstrapPopUpButton';
import AvailabiltyScreen from './components/container/templates/Reservation/AvailabiltyScreen/AvailabiltyScreen';

export const App = () => (
  <>
    {/* <BootstrapPopUpButton />
    <br />
    <br /> */}
    <AvailabiltyScreen />
    {/* <PopUpWindow headingLabel="Enter Search Criteria (Revenue/Award)">
      <CRUMBDIV>
        <Breadcrumbs pages={breadcrumbsTitles} />
      </CRUMBDIV>
      <TABDIV>
        <TabsView defaultActiveKey="owrt" tabList={tabList} />
        <TABLEFTDIV />
      </TABDIV>
    </PopUpWindow> */}
  </>
);

export default App;
