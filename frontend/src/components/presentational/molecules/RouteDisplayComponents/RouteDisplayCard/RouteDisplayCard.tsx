import './RouteDisplayCard.scss';
import React from 'react';
import SvgIconDSeat from 'assets/svgr-components/IconDSeat';
import { RouteDisplayInterface } from '../RouteDisplay.model';

interface RouteDisplayCardProps {
  routeDisplayData: RouteDisplayInterface;
  isCloseButton?: boolean;
}

const RouteDisplayCard: React.FC<RouteDisplayCardProps> = ({
  routeDisplayData,
  isCloseButton,
}) => (
  <div className="route-display-wrapper">
    {!isCloseButton && (
      <div className="route-display-header-wrapper">
        <input type="checkbox" className="timer-checkbox" />
        <div className="header-text">
          {routeDisplayData.heading.data1} {routeDisplayData.heading.data2}
        </div>
        <div className="header-add-button">+</div>
      </div>
    )}
    {isCloseButton && (
      <div className="route-display-close-header-container">
        <div className="route-display-close-header-wrapper">
          <div className="header-text">
            {routeDisplayData.heading.data1} {routeDisplayData.heading.data2}
          </div>
          <div className="header-add-button">+</div>
        </div>
        <button
          type="button"
          className="route-display-close"
          aria-label="close card"
        >
          x
        </button>
      </div>
    )}

    <div
      className={`route-display-content ${
        isCloseButton ? 'close-button-card' : ''
      }`}
    >
      <div className="content-left">
        <div className="left-top">
          <div className="date">{routeDisplayData.date.date}</div>
          <div className="day">({routeDisplayData.date.day})</div>
        </div>
        <div className="left-bottom">
          <div className="code1">{routeDisplayData.codes.code1}</div>
          <div className="code2">{routeDisplayData.codes.code2}</div>
        </div>
      </div>
      <div className="content-right">
        <div className="right-top">
          <div className="time-code">{routeDisplayData.time.timeCode1}</div>
          <div className="time">{routeDisplayData.time.time1}</div>
        </div>
        <div className="right-bottom">
          <div className="time-code">{routeDisplayData.time.timeCode2}</div>
          <div className="time">{routeDisplayData.time.time2}</div>
        </div>
      </div>
      {isCloseButton && (
        <button
          type="button"
          aria-label="enter-button"
          className="enter-button"
        >
          <SvgIconDSeat />
        </button>
      )}
    </div>
  </div>
);

RouteDisplayCard.defaultProps = {
  isCloseButton: false,
};
export default RouteDisplayCard;
