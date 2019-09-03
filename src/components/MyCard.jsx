import React from "react";
import { NavLink } from "react-router-dom";
import {
  faAddressBook,
  faDiceFour,
  faBalanceScaleLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

const MyCard = props => {
  return (
    <div className="card">
      <div className="profile-sidebar">
        <img
          className="profile-image"
          src="https://i.pravatar.cc/125"
          alt="Face"
        />
        <ul className="social-list">
          <li className="social-item">
            <NavLink to="#" className="social-link">
              <FontAwesomeIcon icon="address-card" color="white" />
            </NavLink>
          </li>
          <li className="social-item">
            <NavLink to="#" className="social-link">
              <FontAwesomeIcon icon={faBalanceScaleLeft} color="white" />
            </NavLink>
          </li>
          <li className="social-item">
            <NavLink to="#" className="social-link">
              <FontAwesomeIcon icon="coffee" color="white" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="profile-main">
        <h2 className="profile-name">Ramsey Harper</h2>
        <p className="profile-position">Graphic Designer</p>
        <p className="profile-body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae
          hic quos qui tempora vitae nemo enim omnis reiciendis ullam accusamus
          similique, nulla tempore rem sequi velit nam, sed
          reprehenderit!Accusamus, perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default MyCard;
