import React from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';  // Import the EmailJS SDK

const { Title } = Typography;

const Contact = () => {
  const { t } = useTranslation();

  const onFinish = (values) => {
    // Log the form values (optional)
    console.log('Form values: ', values);

    // Send form data to EmailJS
    emailjs.send(
      'service_un9y7pg', // Replace with your EmailJS service ID
      'template_f3524pq', // Replace with your EmailJS template ID
      values, // This will send form data to your email template
       'A4vib8Uf7cVIE4EMo' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Success:', response);
      message.success(t('contact.success')); // Show success message
    })
    .catch((error) => {
      console.error('Error:', error);
      message.error(t('contact.error')); // Show error message
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title>{t('contact.title')}</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item 
          label={t('contact.name')} 
          name="name" 
          rules={[{ required: true, message: t('contact.name_required') }]}
        >
          <Input placeholder={t('contact.name')} />
        </Form.Item>

        <Form.Item 
          label={t('contact.mobile')} 
          name="mobile" 
          rules={[{ required: true, message: t('contact.mobile_required') }]}
        >
          <Input placeholder={t('contact.mobile')} />
        </Form.Item>

        <Form.Item 
          label={t('contact.email')} 
          name="email" 
          rules={[
            { type: 'email', message: t('contact.invalid_email') }
          ]}
        >
          <Input type="email" placeholder={t('contact.email')} />
        </Form.Item>

        <Form.Item 
          label={t('contact.message')} 
          name="message" 
          rules={[{ required: true, message: t('contact.message_required') }]}
        >
          <Input.TextArea rows={4} placeholder={t('contact.message')} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t('contact.submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
