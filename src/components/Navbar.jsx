import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { analytics } from '../configs/firebase';
import { logEvent } from 'firebase/analytics';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    logEvent(analytics, `language_change_${lang}`);
    i18n.changeLanguage(lang);
  };

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage('en')}>
        English
      </Menu.Item>
      <Menu.Item key="hi" onClick={() => changeLanguage('hi')}>
        हिंदी
      </Menu.Item>
    </Menu>
  );

  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home">
        <Link to="/">{t('navbar.home')}</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">{t('navbar.about')}</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">{t('navbar.contact')}</Link>
      </Menu.Item>
      <Menu.Item key="language" style={{ marginLeft: 'auto' }}>
        <Dropdown overlay={languageMenu} trigger={['click']}>
          <Button>{t('navbar.language')}</Button>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
