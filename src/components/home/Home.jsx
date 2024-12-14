import React from 'react';
import { Typography, Card, Row, Col, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';  // Import icons for arrows
import { useTranslation } from 'react-i18next';
import './Home.css';  // Custom CSS file for styling

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Home = () => {
  const { t } = useTranslation();

  const slides = [
    {
      title: t('home.slides.wife_husband.title'),
      description: t('home.slides.wife_husband.description'),
      image: '/images/couple.jpg'
    },
    {
      title: t('home.slides.business_partner.title'),
      description: t('home.slides.business_partner.description'),
      image: '/images/meeting.jpg'
    },
    {
      title: t('home.slides.any_kind.title'),
      description: t('home.slides.any_kind.description'),
      image: '/images/unique.jpg'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title>{t('home.title')}</Title>
      <Paragraph>{t('home.description')}</Paragraph>

      <Carousel
        autoplay
        arrows
        prevArrow={<LeftOutlined style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.65)' }} />}
        nextArrow={<RightOutlined style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.65)' }} />}
        style={{ position: 'relative' }}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <Row justify="center">
              <Col span={12}>
                <Card
                  cover={
                    <img
                      alt={slide.title}
                      src={slide.image}
                      style={{
                        width: '100%',          // Ensures it stretches to fill the container
                        height: '300px',        // Fixed height
                        objectFit: 'cover',     // Maintains aspect ratio, cropping if necessary
                        borderRadius: '8px'
                      }}
                    />
                  }
                  style={{
                    margin: '20px auto',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Meta title={slide.title} description={slide.description} />
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
