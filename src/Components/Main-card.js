// import React from 'react';
import './Main-card.scss';
import img from '../img/image-jeremy.png';
import { useEffect } from 'react';

function MainCard({ toggle }) {
  useEffect(() => {
    document.getElementById('weekly').checked = true;
  }, []);

  return (
    <div className="main-card">
      <header className="profile">
        <img src={img} alt="profile-picture" />
        <div className="info">
          <span className="for">Report for</span>
          <span id="name">Jeremy Robson</span>
        </div>
      </header>

      <nav className="nav-bar">
        <ul className="list">
          <li>
            <input type="radio" name="time" id="daily" onChange={toggle} />
            <label htmlFor="daily">Daily</label>
          </li>
          <li>
            <input type="radio" name="time" id="weekly" onChange={toggle} />
            <label htmlFor="weekly">Weekly</label>
          </li>
          <li>
            <input type="radio" name="time" id="monthly" onChange={toggle} />
            <label htmlFor="monthly">Monthly</label>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainCard;
