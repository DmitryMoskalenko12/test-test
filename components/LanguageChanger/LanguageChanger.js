'use client';
import classes from './languageChanger.module.scss';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import Script from 'next/script';
export default function LanguageChanger({ display, dividerClass }) {
  const [activeLang, setActiveLang] = useState('');

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  useEffect(() => {
    setActiveLang(currentLocale);
    const checkCookieHubInit = () => {
      if (window.cookiehub && window.cookiehub.settings) {
        // Если CookieHub инициализирован, то находим и показываем шестеренку
        const settingsIcon = document.querySelector('.ch2-settings-tablist');
        if (settingsIcon) {
          settingsIcon.style.display = 'block';
        }
      }
    };

    // Ждем полной загрузки DOM
    document.addEventListener('DOMContentLoaded', checkCookieHubInit);

    return () => {
      document.removeEventListener('DOMContentLoaded', checkCookieHubInit);
    };
  }, [activeLang]);

  const handleChange = (e) => {
    const newLocale = e.target.textContent.toLowerCase();
    setActiveLang(newLocale);
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
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
     {
      activeLang ?  <>
      <Script
      src="https://cdn.cookiehub.eu/c2/ddd5f08e.js"
      strategy="beforeInteractive"
    />
    <Script id="cookie-consent" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('consent','default', {
          'security_storage': 'granted',
          'functionality_storage': 'denied',
          'personalization_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied',
          'wait_for_update': 500
        });
        document.addEventListener("DOMContentLoaded", function(event) {
          var cpm = {};
          window.cookiehub.load(cpm);
        });
      `}
    </Script>
      </> : null
     }
    </div>
  );
}
