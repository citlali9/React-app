import React from 'react';
import { NavLink } from 'react-router-dom';

const Head = ({text, route}) => {
  return (
    <>
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <NavLink className="totals" to={"/"+route}><strong>{text}</strong></NavLink>
        </a>
      </li>   
    </>
  );
}

export default Head;
