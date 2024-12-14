import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      &copy; 2024 Jasus.com. All rights reserved.
    </AntFooter>
  );
};

export default Footer;