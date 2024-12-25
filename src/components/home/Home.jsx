import React from 'react';
import { Typography, Card, Row, Col, Carousel, Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './Home.css';
import About from '../about/About';
import Contact from '../Contact';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Home = () => {
  const { t } = useTranslation();

  const slides = [
    {
      title: t('home.slides.information_gathering.title'),
      description: t('home.slides.information_gathering.description'),
      image: '/images/information.jpg'
    },
    {
      title: t('home.slides.payment_recovery.title'),
      description: t('home.slides.payment_recovery.description'),
      image: '/images/payment.jpg'
    },
    {
      title: t('home.slides.general_assistance.title'),
      description: t('home.slides.general_assistance.description'),
      image: '/images/assistance.jpg'
    }
  ];

  return (
    <div>
      
      <Title style={{ color: '#fff', textAlign: 'center' }}>{t('home.title')}</Title>
      <Paragraph style={{
        color: '#f0f0f0',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {t('home.description')}
      </Paragraph>

      <Carousel
        autoplay
        arrows
        prevArrow={<LeftOutlined style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.65)' }} />}
        nextArrow={<RightOutlined style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.65)' }} />}
        style={{ position: 'relative', marginTop: '20px' }}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <Row gutter={[16, 16]} justify="center" align="middle">


              {/* Image on the right */}
              <Col xs={24} sm={12} md={12} lg={12}>
                <img
                  alt={slide.title}
                  src={slide.image}
                  style={{
                    width: '100%',
                    height: '350px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                />
              </Col>

              {/* Content on the left */}
              <Col xs={24} sm={12} md={12} lg={12}>
                <div style={{ paddingRight: '20px' }}>
                  <Title level={2} style={{ color: '#fff' }}>
                    {slide.title}
                  </Title>
                  <Paragraph style={{ color: '#f0f0f0' }}>
                    {slide.description}
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>

      <Contact />
      <About />
    </div>
  );
};

export default Home;
