import './RouteDisplayCard.scss';
import React from 'react';
import SvgIconDSeat from 'assets/svgr-components/IconDSeat';
import { CheckBox } from 'components/presentational/atoms/CheckBox/CheckBox';
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
      <div
        className={`route-display-header-wrapper ${
          !isCloseButton ? 'w-100' : ''
        }`}
      >
        <div className="d-flex align-items-center">
          {/* <input type="checkbox" className="timer-checkbox" /> */}
          <CheckBox value="" />
          <div className="header-text">
            <span className="mx-2">{routeDisplayData.heading.data1}</span>
            <span>{routeDisplayData.heading.data2}</span>
          </div>
        </div>
        <div className="header-add-button">+</div>
      </div>
    )}
    {isCloseButton && (
      <div className="route-display-close-header-container">
        <div className="route-display-close-header-wrapper">
          <div className="header-text">
            <span className="mx-2">{routeDisplayData.heading.data1}</span>
            <span>{routeDisplayData.heading.data2}</span>
          </div>
          <div className="header-add-button">+</div>
        </div>
        <div className="route-display-close" aria-label="close card">
          <span>x</span>
        </div>
      </div>
    )}

    <div
      className={`route-display-content ${
        isCloseButton ? 'close-button-card' : ''
      }`}
    >
      <div
        className={`content-container ${
          !isCloseButton ? 'w-100 card-bg-without-close' : 'card-bg-with-close'
        }`}
      >
        <div className="content-left w-50">
          <div className="left-top">
            <div className="date">{routeDisplayData.date.date}</div>
            <div className="day">({routeDisplayData.date.day})</div>
          </div>
          <div className="left-bottom">
            <div className="code1">{routeDisplayData.codes.code1}</div>
            <div className="code2">{routeDisplayData.codes.code2}</div>
          </div>
        </div>
        <div className="content-right w-50">
          <div className="right-top">
            <div className="time-code">{routeDisplayData.time.timeCode1}</div>
            <div className="time">{routeDisplayData.time.time1}</div>
          </div>
          <div className="right-bottom">
            <div className="time-code">{routeDisplayData.time.timeCode2}</div>
            <div className="time">{routeDisplayData.time.time2}</div>
          </div>
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
