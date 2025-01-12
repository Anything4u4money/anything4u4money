import React from 'react';
import { Menu, Switch } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLanguageChange = (checked) => {
    changeLanguage(checked ? 'hi' : 'en');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Menu
        mode="horizontal"
        theme="light"
        style={{
          justifyContent: 'flex-end',
          backgroundColor: 'unset',
        }}
      >
        <Menu.Item key="home" onClick={() => scrollToSection('home')}>
          <span className="text-lg text-gray-700 hover:text-blue-600">{t('navbar.home')}</span>
        </Menu.Item>
        <Menu.Item key="services" onClick={() => scrollToSection('services')}>
          <span className="text-lg text-gray-700 hover:text-blue-600">{t('navbar.services')}</span>
        </Menu.Item>
        <Menu.Item key="about" onClick={() => scrollToSection('about')}>
          <span className="text-lg text-gray-700 hover:text-blue-600">{t('navbar.about')}</span>
        </Menu.Item>
        <Menu.Item key="contact" onClick={() => scrollToSection('contact')}>
          <span className="text-lg text-gray-700 hover:text-blue-600">{t('navbar.contact')}</span>
        </Menu.Item>
        <Menu.Item key="language">
          <div className="flex items-center">
            <GlobalOutlined style={{ marginRight: 8 }} />
            <Switch
              defaultChecked={i18n.language === 'hi'}
              onChange={handleLanguageChange}
              checkedChildren="हिंदी"
              unCheckedChildren="English"
            />
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
