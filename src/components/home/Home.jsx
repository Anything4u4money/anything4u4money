import React from 'react';
import { Typography, Card, Row, Col, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './Home.css';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Home = () => {
  const { t } = useTranslation();

  const slides = [
    {
      title: t('home.slides.information_gathering.title'),
      description: t('home.slides.information_gathering.description'),
      image: '/images/information.jpg',
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
  ];

  return (
    <div>
      {/* Hero Section */}
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
                    objectFit: 'cover',
                  }}
                />
              </Col>

              {/* Content on the left */}
              <Col xs={24} sm={12} md={12} lg={12}>
                <div style={{ paddingRight: '20px' }}>
                  <Title level={2} style={{ color: '#fff' }}>
                    {slide.title}
                  </Title>
                  <Paragraph style={{ color: '#f0f0f0' }}>{slide.description}</Paragraph>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>

      {/* Services Section */}
      <div style={{ margin: '50px 0', padding: '20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          {t('home.services.title')}
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

export default Home;
