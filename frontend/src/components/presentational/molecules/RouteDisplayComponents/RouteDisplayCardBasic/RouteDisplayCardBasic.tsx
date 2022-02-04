import './RouteDisplayCardBasic.scss';
import React from 'react';
import { RouteDisplayInterface } from '../RouteDisplay.model';

interface RouteDisplayCardProps {
  routeDisplayData: RouteDisplayInterface;
}

const RouteDisplayCardBasic: React.FC<RouteDisplayCardProps> = ({
  routeDisplayData,
}) => (
  <div className="route-display-simple-wrapper">
    <div className="route-display-close-header-container">
      <div className="route-display-close-header-wrapper">
        <div className="header-text">
          {routeDisplayData.heading.data1} {routeDisplayData.heading.data2}
        </div>
      </div>
    </div>
    <div className="route-display-content">
      <div className="column-a"/>
      <div className="column-b">
        <div className="left-top">
          <div className="date">{routeDisplayData.date.date}</div>
          <div className="day">({routeDisplayData.date.day})</div>
        </div>
        <div className="left-bottom">
          <div className="code1">{routeDisplayData.codes.code1}</div>
          <div className="code2">{routeDisplayData.codes.code2}</div>
        </div>
      </div>
      <div className="column-c">
        <div className="left-top">
          <div className="date">{routeDisplayData.time.timeCode1}</div>
        </div>
        <div className="left-bottom">
          <div className="code1">{routeDisplayData.time.timeCode2}</div>
        </div>
      </div>
    </div>
  </div>
);

export default RouteDisplayCardBasic;
