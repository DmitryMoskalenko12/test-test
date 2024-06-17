import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/TranslationsProvider";
import Contact from "@/modules/HomePage/Contact/Contact";
import ProjectsSection from "@/modules/ProjectsPage/Projects/ProjectsSection";

/* export async function generateMetadata({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ['main', 'start']);

    return {
      title: `Uviten | ${t('projects-page')}`,
    }
} */

const Projects = async ({ params: { locale, id } }) => {
    const { t, resources } = await initTranslations(locale, ['main', 'start']);
    
    return <TranslationsProvider   
            resources={resources}
            locale={locale}
            namespaces={['main', 'start']}
            >
             <ProjectsSection locale = {locale}/>
             <Contact locale = {locale}/>
          </TranslationsProvider>
}

export default Projects;