import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const About = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      <Title>{t('about.title')}</Title>
      <Paragraph>{t('about.intro')}</Paragraph>

      <Row gutter={16}>
        <Col span={8}>
          <Card
            title={t('about.mission.title')}
            bordered={false}
            style={{ marginBottom: '20px' }}
          >
            <Paragraph>{t('about.mission.description')}</Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={t('about.vision.title')}
            bordered={false}
            style={{ marginBottom: '20px' }}
          >
            <Paragraph>{t('about.vision.description')}</Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={t('about.team.title')}
            bordered={false}
            style={{ marginBottom: '20px' }}
          >
            <Paragraph>{t('about.team.description')}</Paragraph>
          </Card>
        </Col>
      </Row>

      <Title level={2}>{t('about.contact.title')}</Title>
      <Paragraph>{t('about.contact.description')}</Paragraph>
    </div>
  );
};

export default About;
