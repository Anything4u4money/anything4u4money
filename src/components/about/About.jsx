import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        padding: '20px',
        // backgroundColor: '#f9f9f9', // Light background for better contrast
        // minHeight: '100vh', // Full viewport height for balance
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title style={{ textAlign: 'center' }}>{t('about.title')}</Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '40px' }}>
          {t('about.intro')}
        </Paragraph>

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={8}>
            <Card
              title={t('about.mission.title')}
              bordered={false}
              style={{
                height: '100%',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
                borderRadius: '8px', // Rounded corners
              }}
            >
              <Paragraph>{t('about.mission.description')}</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Card
              title={t('about.vision.title')}
              bordered={false}
              style={{
                height: '100%',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              }}
            >
              <Paragraph>{t('about.vision.description')}</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Card
              title={t('about.team.title')}
              bordered={false}
              style={{
                height: '100%',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              }}
            >
              <Paragraph>{t('about.team.description')}</Paragraph>
            </Card>
          </Col>
        </Row>

        <div style={{ marginTop: '40px' }}>
          <Title level={2} style={{ textAlign: 'center' }}>
            {t('about.contact.title')}
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            {t('about.contact.description')}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default About;
