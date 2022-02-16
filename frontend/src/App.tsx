import Section from 'components/presentational/atoms/Section/Section';
import PassengerInformationRow from 'components/presentational/molecules/Segments/PassengerInformationRow';
import SectionContainerBoarding from 'components/presentational/molecules/Segments/SectionContainerBoarding';

const data = {
  passengerNumber:'P1',
  passengerName:'Rathilesh C',
  col1:<Section type="Icon" iconType="NoFFP" alignBottom />,
  col2:<Section type="Icon" iconType="NoFFP" alignBottom />,
  col3:<Section type="Text" content={['']} />,
  col4:<Section type="Text" content={['']} />,
  col5:<Section type="Text" content={['']} />,
  col6:<Section type="Text" content={['']} />,
  col7:<Section type="Text" content={['']} />,
  col8:<Section type="Text" content={['']} />,
  col9:<Section type="Text" content={['']} />
  
}

const data1 = {
  segmentNo:'K36',
  flightNo:'NH376',
  date:['JAN20', 'JAN25'],
  place:['Tokyo', 'New York'],
  time:['10.15pm', '01:40PM'],
  col1:<Section type="Text" content={['']} />,
  col2:<Section type="Text" content={['']} />,
  col3:<Section type="Text" content={['']} />,
  col4:<Section type="Text" content={['']} />,
  col5:<Section type="Text" content={['']} />,
  col6:<Section type="Text" content={['']} />, 
  col7:<Section type="Icon" iconType="Seat" flightSeatClick={()=>console.log('Flight seat clicked')} />,  
  
}

export const App = () => (

  <>
    <div style={{ width: 800, margin: 20 }}>

      <PassengerInformationRow data={data}/>

      {/* <RouteDisplayCard routeDisplayData={data} isCloseButton /> */}
    </div>
    <div style={{ width: 800, margin: 20 }}>

      <SectionContainerBoarding data={data1} onFlightNumberClicked={()=>console.log('Flight number clicked')}/>
      {/* <RouteDisplayCard routeDisplayData={data} isCloseButton /> */}
    </div>
  </>
);

export default App; 
