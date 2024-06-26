'use client';
import classes from './languageChanger.module.scss';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import localFont from 'next/font/local';

const mulish = localFont({
  src: [
    {
      path: '../../fonts/Mulish-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
})

export default function LanguageChanger({ display, dividerClass }) {
  const [activeLang, setActiveLang] = useState('');

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  useEffect(() => {
    setActiveLang(currentLocale);
  }, [currentLocale]);

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
        className={cn(classes.en, mulish.className, { [classes.active]: activeLang === 'en' })}
      >
        EN
      </button>
      <div className={dividerClass}></div>
      <button
        onClick={handleChange}
        className={cn(classes.uk,  mulish.className, { [classes.active]: activeLang === 'ua' })}
      >
        UA
      </button>
    </div>
  );
}
