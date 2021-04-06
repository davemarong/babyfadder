import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Hjem">Hjem</Link>
        </li>
        <li>
          <Link to="/MinSide">Min Side</Link>
        </li>
        <li>
          <Link to="/FinnFadder">Finn Fadder</Link>
        </li>
        <li>
          <Link to="/Registrer">Registrer</Link>
        </li>
        <li>
          <Link to="/LogInn">Logg inn</Link>
        </li>
      </ul>
    </div>
  );
}
