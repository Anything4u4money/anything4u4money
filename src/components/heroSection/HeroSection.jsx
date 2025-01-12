import React, { useEffect } from 'react';
import { Button } from 'antd';
import './HeroSection.css'; // Custom CSS for animations and styling
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.hero-text');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-text');
              }, index * 300); // Delay each child's animation
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.hero-section');
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="hero-section relative text-white h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        {/* Content */}
        <div className="relative z-10 container mx-auto text-left px-8">
          <h1 className="hero-text text-5xl md:text-6xl font-bold leading-tight mb-6">
            {t('home.title')}, <br />
            {t('home.subtitle')}
          </h1>
          <p className="hero-text text-lg md:text-2xl max-w-3xl mb-8">
            {t('home.description')}
          </p>
          <div className="flex justify-start space-x-4 gap-4">
            <Button
              type="primary"
              size="large"
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() => scrollToSection('contact')}
            >
              {t('navbar.contact')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
