import classes from './page.module.scss';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/TranslationsProvider';
import MainContent from '@/modules/main-content/MainContent';

const Stub = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, ['main']);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={['main']}
    >
      <div className={classes.mainBg}>
        <div className={classes.main}>
          <MainContent />
        </div>
      </div>
      <div />
    </TranslationsProvider>
  );
};

export default Stub;
