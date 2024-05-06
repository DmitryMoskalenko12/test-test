import './globals.scss';
import initTranslations from '../../i18n';
import TranslationsProvider from '../../TranslationsProvider';
import Header from '@/modules/start-page/header/Header';
import Footer from '@/modules/start-page/footer/Footer';

const MainLayout = async ({params: {locale}, children }) => {
    const { t, resources } = await initTranslations(locale, ['main']);

    return <TranslationsProvider locale={locale} resources={resources} namespaces={['main']}>  
               <html lang='en'>
                 <body>
                    <Header/>
                    <main>   
                        {children}
                    </main>
                    <Footer/>
                 </body>
               </html>
           </TranslationsProvider>

}

export default MainLayout;