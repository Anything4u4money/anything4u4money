import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title>Welcome to Jasus.com</Title>
      <Paragraph>Your go-to platform for amazing features.</Paragraph>
    </div>
  );
};

export default Home;