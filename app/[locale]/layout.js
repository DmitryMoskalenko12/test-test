import './globals.scss';
import initTranslations from '../i18n';
import TranslationsProvider from '../TranslationsProvider';
import Header from '@/modules/HomePage/Header/Header';
import Footer from '@/modules/HomePage/Footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import ogPicture from '@/images/socialMedia.webp';
import Script from 'next/script';

export const metadata = {
  authors: [{ url: 'http://uviten.com' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const MainLayout = async ({ params: { locale }, children }) => {
  const { t, resources } = await initTranslations(locale, ['main', 'start']);
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={['main', 'start']}
    >
      <html lang={t('language')}>
        <head>
        <Script
          src="https://cdn.cookiehub.eu/c2/ddd5f08e.js"
          strategy="afterInteractive"
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
          <title>{t('lang-title')}</title>
          <meta name='description' content={t('lang-description')} />
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
          <div style={{position: 'absolute', marginTop: '150px' , zIndex: 999999}} data-consent="analytics">
             Analytics category allowed
          </div>
          <div style={{position: 'absolute' , marginTop: '150px', zIndex: 999999}} data-consent="analytics" data-inverse>
              Analytics category not allowed
          </div>
          {analyticsId ? <GoogleAnalytics gaId={analyticsId} /> : null}
        </body>
      </html>
    </TranslationsProvider>
  );
};

export default MainLayout;
