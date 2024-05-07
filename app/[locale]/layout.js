import './globals.scss';
import initTranslations from '../i18n';
import TranslationsProvider from '../TranslationsProvider';
import Header from '@/modules/start-page/header/Header';
import Footer from '@/modules/start-page/footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: 'Uviten | Software development company',
  description:'Unlock growth opportunities with our tailored software development and innovative web solutions. Our dedicated team offers exceptional service across different industries, ensuring your business stays ahead of the curve.',
  authors: [{url: 'http://uviten.com' }],
  alternates: {
    canonical: 'http://uviten.com',
    languages: {
      'en': 'http://uviten.com/en',
      'ua': 'http://uviten.com/ua',
    },
  },
  openGraph: {
    title: 'Uviten | Software development company',
    url: 'http://uviten.com',
    description: 'Unlock growth opportunities with our tailored software development and innovative web solutions. Our dedicated team offers exceptional service across different industries, ensuring your business stays ahead of the curve.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: 'http://uviten.com/images/socialMedia.png',
        width: 1200,
        height: 630,
      }
    ],
  },
  openGraph: {
    title: 'Uviten | Компанія розробки програмного забезпечення',
    url: 'http://uviten.com',
    description: 'Відкрийте можливості зростання зі спеціалізованим програмним забезпеченням та інноваційними веб рішеннями. Наша виділена команда пропонує виключний рівень сервісу у різних доменах, впевнюючись що ваш бізнес залишається на випереджені конкурентів.',
    type: 'website',
    locale: 'ua',
    images: [
      {
        url: 'http://uviten.com/images/socialMedia.png',
        width: 1200,
        height: 630,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
  keywords: ['розробка програмного забезпечення, веб розробка, веб сайти, виділена команда програмістів, замовити веб сайт, мобільні застосунки, аудит веб сайту, МВП, старт-ап'],
  keywords: ['custom software development', 'web design', 'web sites', 'dedicated team', 'order web site', 'mobile application', 'web site audit', 'MVP', 'start-up'],
  icons: {
    icon: '/favicon.ico',
  },
}

const MainLayout = async ({params: {locale}, children }) => {
    const { t, resources } = await initTranslations(locale, ['main']);
    
    return <TranslationsProvider locale={locale} resources={resources} namespaces={['main']}>  
               <html lang='en'>
                <head>
                  <title>{t('lang-title')}</title>
                  <meta name="description" content={t('lang-description')} />
                </head>
                 <body>
                    <Header/>
                    <main>   
                        {children}
                    </main>
                    <Footer/>
                    <GoogleAnalytics gaId="G-FSXZ91P77K" />
                 </body>
               </html>
           </TranslationsProvider>

}

export default MainLayout;