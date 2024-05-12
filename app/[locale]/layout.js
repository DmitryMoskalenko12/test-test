import './globals.scss';
import initTranslations from '../i18n';
import TranslationsProvider from '../TranslationsProvider';
import Header from '@/modules/start-page/header/Header';
import Footer from '@/modules/start-page/footer/Footer';
import ogPicture from '@/images/socialMedia.png';

export const metadata = {
  title: 'Uviten | Software development company',
  description:
    'Unlock growth opportunities with our tailored software development and innovative web solutions. Our dedicated team offers exceptional service across different industries, ensuring your business stays ahead of the curve.',
  authors: [{ url: 'https://test-test-lac.vercel.app/' }],
  openGraph: {
    title: 'Uviten | Software development company',
    url: 'https://test-test-lac.vercel.app',
    description:
      'Unlock growth opportunities with our tailored software development and innovative web solutions. Our dedicated team offers exceptional service across different industries, ensuring your business stays ahead of the curve.',
    type: 'image/png',
    locale: 'en',
    images: [
      {
        url: 'https://test-test-lac.vercel.app/images/socialMedia.png',
        width: 1200,
        height: 630,
      },
    ],
  },
 /*  openGraph: {
    title: 'Uviten | Компанія розробки програмного забезпечення',
    url: 'http://uviten.com/uk',
    description:
      'Відкрийте можливості зростання зі спеціалізованим програмним забезпеченням та інноваційними веб рішеннями. Наша виділена команда пропонує виключний рівень сервісу у різних доменах, впевнюючись що ваш бізнес залишається на випереджені конкурентів.',
    type: 'website',
    locale: 'uk',
    images: [
      {
        url: ogPicture.src,
        width: 1200,
        height: 630,
      },
    ],
  }, */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    'розробка програмного забезпечення',
    'веб розробка',
    'веб сайти',
    'виділена команда програмістів',
    'замовити веб сайт',
    'мобільні застосунки',
    'аудит веб сайту',
    'МВП',
    'старт-ап',
  ],
  keywords: [
    'custom software development',
    'web design',
    'web sites',
    'dedicated team',
    'order web site',
    'mobile application',
    'web site audit',
    'MVP',
    'start-up',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

const MainLayout = async ({ params: { locale }, children }) => {
  const { t, resources } = await initTranslations(locale, ['main']);

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={['main']}
    >
      <html lang={t('language')}>
        <head>
         {/*  <title>{t('lang-title')}</title>
          <meta name='description' content={t('lang-description')} /> */}
          <meta property="og:image" content={ogPicture.src} />
        {/*   <meta property="og:title" content="Uviten | Software development company"/>
          <meta property="og:description" content="Unlock growth opportunities with our tailored software development and innovative web solutions. Our dedicated team offers exceptional service across different industries, ensuring your business stays ahead of the curve. "/> */}
       {/*    <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" /> */}
        </head>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </TranslationsProvider>
  );
};

export default MainLayout;
