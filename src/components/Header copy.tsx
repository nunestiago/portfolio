import React from 'react';
import { useTranslation } from 'react-i18next';

// the hook
function Header() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('engInfo.basic_info.description')}</h1>
      <h1>{t('engInfo.projects.0.title')}</h1>
    </>
  );
}

export default Header;
