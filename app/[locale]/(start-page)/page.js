import initTranslations from '../../i18n';
import TranslationsProvider from '../../TranslationsProvider';
import Idea from '@/modules/start-page/idea/Idea';
import Services from '@/modules/start-page/services-section/Services';
import Stages from '@/modules/start-page/stages/Stages';

export default async function Home({params: {locale}}) {
  const { t, resources } = await initTranslations(locale, ['start']);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={['start']}>
      <Idea/>
      <Services/>
      <Stages/>
    </TranslationsProvider>
  )
}
