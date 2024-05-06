import styles from './page.module.scss'
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../TranslationsProvider';
import MainContent from '../../../../modules/main-content/MainContent';

const Stub = async ({params: {locale}}) => {
    const { t, resources } = await initTranslations(locale, ['main']);

    return (
      <TranslationsProvider resources={resources} locale={locale} namespaces={['main']}>
      <main className={styles.main}>
        <MainContent/>
      </main>
      </TranslationsProvider>
    )
  }

export default Stub;