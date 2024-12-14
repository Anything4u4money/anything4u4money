import React from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <AntFooter style={{ textAlign: 'center' }}>
      &copy; 2024 {t('footer.copyright')}
    </AntFooter>
  );
};

export default Footer;