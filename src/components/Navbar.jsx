import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;