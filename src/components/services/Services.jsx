import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import './Services.css';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Services = () => {
  const { t } = useTranslation();

  const slides = [
    {
      title: t('home.slides.information_gathering.title'),
      description: t('home.slides.information_gathering.description'),
      image: '/images/information.jpg',
    },
    {
      title: t('home.slides.fraud_detection.title'),
      description: t('home.slides.fraud_detection.description'),
      image: '/images/fraud.jpg',
    },
    {
      title: t('home.slides.payment_recovery.title'),
      description: t('home.slides.payment_recovery.description'),
      image: '/images/payment.jpg',
    },
    {
      title: t('home.slides.general_assistance.title'),
      description: t('home.slides.general_assistance.description'),
      image: '/images/assistance.jpg',
    },
    {
      title: t('home.slides.pilgrimage_assistance.title'),
      description: t('home.slides.pilgrimage_assistance.description'),
      image: '/images/pilgrimage.jpg',
    }
  ];

  return (
    <div>
      {/* Services Section */}
      <div style={{ margin: '50px 0', padding: '20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          {t('services.title')}
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {slides.map((slide, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                cover={
                  <img
                    alt={slide.title}
                    src={slide.image}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                }
                style={{ borderRadius: '8px', overflow: 'hidden' }}
              >
                <Meta
                  title={<Title level={4}>{slide.title}</Title>}
                  description={<Paragraph>{slide.description}</Paragraph>}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
