import initTranslations from '../i18n';
import TranslationsProvider from '../TranslationsProvider';
import Idea from '@/modules/start-page/idea/Idea';
import Services from '@/modules/start-page/services-section/Services';
import Stages from '@/modules/start-page/stages/Stages';
import Projects from '@/modules/start-page/projects/Projects';
import Contact from '@/modules/start-page/contact/Contact';
import Engagemet from '@/modules/start-page/engagemet/Engagemet';

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ['main', 'start']);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={['main', 'start']}
    >
      <Idea locale={locale} />
      <Services />
      <Projects locale={locale} />
      <Stages locale={locale} />
      <Engagemet locale={locale} />
      <Contact locale={locale} />
    </TranslationsProvider>
  );
}
