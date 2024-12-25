import React from 'react';
import { Menu, Dropdown, Button, Switch } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Language change handler for the switch
  const handleLanguageChange = (checked) => {
    if (checked) {
      changeLanguage('hi'); // Change to Hindi
    } else {
      changeLanguage('en'); // Change to English
    }
  };

  return (
    <Menu mode="horizontal" theme="dark">
      {/* Home menu item */}
      <Menu.Item key="home">
        <Link to="/">{t('navbar.home')}</Link>
      </Menu.Item>

      {/* About menu item */}
      <Menu.Item key="about">
        <Link to="/about">{t('navbar.about')}</Link>
      </Menu.Item>

      {/* Contact menu item */}
      <Menu.Item key="contact">
        <Link to="/contact">{t('navbar.contact')}</Link>
      </Menu.Item>

      {/* Language switch with icon */}
      <Menu.Item key="language" style={{ marginLeft: 'auto' }}>
        <div className="flex items-center">
          <GlobalOutlined style={{ marginRight: 8 }} /> {/* Global icon */}
          <Switch
            defaultChecked={i18n.language === 'hi'}
            onChange={handleLanguageChange}
            checkedChildren="हिंदी" // Hindi
            unCheckedChildren="English" // English
          />
        </div>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
