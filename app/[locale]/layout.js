import './globals.scss';
import initTranslations from '../i18n';
import TranslationsProvider from '../TranslationsProvider';
import Header from '@/modules/HomePage/Header/Header';
import Footer from '@/modules/HomePage/Footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import ogPicture from '@/images/socialMedia.webp';
import localFont from 'next/font/local';

const mulish = localFont({
  src: [
    {
      path: '../../fonts/Mulish-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/Mulish-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Mulish-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Mulish-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/Mulish-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export async function generateMetadata({params: {locale}}) {
  const { t } = await initTranslations(locale, ['main', 'start']);
 
  return {
    title: t('lang-title'),
    description: t('lang-description'),
    authors: [{ url: 'http://uviten.com/' }],
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

const MainLayout = async ({ params: { locale }, children }) => {
  const { t, resources } = await initTranslations(locale, ['main', 'start']);
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={['main', 'start']}
    >
      <html lang={t('language')} className={mulish.className}>
        <head>
          <meta property='og:image' content={ogPicture.src} />
          <meta property='og:title' content={t('ogTitle')} />
          <meta property='og:description' content={t('ogDescr')} />
          <meta name='keywords' content={t('keywords')} />
          <meta property='og:image:type' content='image/webp' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
        </head>
        <body
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <main style={{ flexGrow: 1 }}>{children}</main>
          <Footer locale={locale} />
          {analyticsId ? <GoogleAnalytics gaId={analyticsId} /> : null}
        </body>
      </html>
    </TranslationsProvider>
  );
};

export default MainLayout;
