import React from 'react'
import './header.css'
import {
  faBed,
  faBedPulse,
  faCalendar,
  faCalendarDays,
  faCar,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon className="icon" icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon className="icon" icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon className="icon" icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon className="icon" icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon className="icon" icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">
          Search low prices on hotels, homes and much more...
        </p>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon className="icon" icon={faBed} />
            <input
              type="text"
              placeholder="where are you going?"
              name=""
              className="headerSearchButton"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className="icon" icon={faCalendarDays} />
            <span className="headerSearchText">Date to Date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className="icon" icon={faBed} />
            <span className="headerSearchText">2 Adult 2 Children</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
