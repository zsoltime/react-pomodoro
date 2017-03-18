import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <div>
    <IndexLink to="/">Home</IndexLink>
    <Link to="/about">About</Link>
    <Link to="/settings">Settings</Link>
  </div>
);

export default Nav;
