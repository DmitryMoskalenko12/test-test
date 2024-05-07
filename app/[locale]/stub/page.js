import classes from './page.module.scss';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/TranslationsProvider';
import MainContent from '@/modules/main-content/MainContent';
import Header from '@/modules/header/Header';
import Footer from '@/modules/footer/Footer';

const Stub = async ({params: {locale}}) => {
    const { t, resources } = await initTranslations(locale, ['main']);

    return (
      <TranslationsProvider resources={resources} locale={locale} namespaces={['main']}>
           <div className={classes.mainBg}>
             <Header/>
                <main className={classes.main}>
                  <MainContent/>
                </main>
              <Footer/>
           </div>
           <div/>
      </TranslationsProvider>
    )
  }

export default Stub;