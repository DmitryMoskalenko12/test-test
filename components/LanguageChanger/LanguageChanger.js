'use client';
import classes from './languageChanger.module.scss';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function LanguageChanger({ display, dividerClass }) {
  const [activeLang, setActiveLang] = useState('');

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
 
  useEffect(() => {
    setActiveLang(currentLocale);
    const handleCookiebotOnAccept = (e) => {
      if (window.Cookiebot && window.Cookiebot.consents && window.Cookiebot.consents.marketing) {
        // Execute code that sets marketing cookies
        console.log("Marketing consent given, setting marketing cookies...");
        // Ваш код для установки маркетинговых cookies
      }
    };

    window.addEventListener('CookiebotOnAccept', handleCookiebotOnAccept);

    return () => {
      window.removeEventListener('CookiebotOnAccept', handleCookiebotOnAccept);
    };

  }, []);

  const handleChange = (e) => {
    const newLocale = e.target.textContent.toLowerCase();
    setActiveLang(newLocale);
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    let newPathname = window.location.pathname;
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      newPathname = '/' + newLocale + newPathname;
    } else {
      newPathname = newPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }
    window.location.href = newPathname;
  };

  return (
    <div className={display}>
      <button
        onClick={handleChange}
        className={cn(classes.en, { [classes.active]: activeLang === 'en' })}
      >
        EN
      </button>
      <div className={dividerClass}></div>
      <button
        onClick={handleChange}
        className={cn(classes.uk, { [classes.active]: activeLang === 'ua' })}
      >
        UA
      </button>
        <script type="text/javascript">
        {
                window.addEventListener('CookiebotOnAccept', function (e) {
                  Cookiebot.consent.marketing ? console.log('hhh') : null})
        }
       </script>
    </div>
  );
}
