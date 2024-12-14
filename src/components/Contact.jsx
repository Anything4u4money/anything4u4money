import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Form values: ', values);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title>Contact Us</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
          <Input type="email" placeholder="Your Email" />
        </Form.Item>
        <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;