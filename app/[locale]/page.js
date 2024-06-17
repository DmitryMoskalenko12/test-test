import initTranslations from '../i18n';
import TranslationsProvider from '../TranslationsProvider';
import Idea from '@/modules/HomePage/Idea/Idea';
import Services from '@/modules/HomePage/ServicesSection/Services';
import Stages from '@/modules/HomePage/Stages/Stages';
import Projects from '@/modules/HomePage/Projects/Projects';
import Contact from '@/modules/HomePage/Contact/Contact';
import Engagemet from '@/modules/HomePage/Engagemet/Engagemet';

export default async function Home({ params: { locale, id } }) {
  const { t, resources } = await initTranslations(locale, ['main', 'start']);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={['main', 'start']}
    >
      <Idea locale={locale} />
      <Services />
      <Projects locale={locale}/>
      <Stages locale={locale} />
      <Engagemet locale={locale} />
      <Contact locale={locale} />
    </TranslationsProvider>
  );
}
