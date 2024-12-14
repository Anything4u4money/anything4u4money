import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title>About Us</Title>
      <Paragraph>Learn more about Jasus and what we offer.</Paragraph>
    </div>
  );
};

export default About;