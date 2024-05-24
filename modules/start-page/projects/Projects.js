import classes from './projects.module.scss';
import LinkUi from '@/ui/start-page/links/LinkUi';
import ProjectCard from '@/components/start-page/project-card/ProjectCard';
import project1 from '@/images/start-page/project1.png';
import project1Desktop from '@/images/start-page/project1Desktop.png';
import project2 from '@/images/start-page/project2.png';
import project2Desktop from '@/images/start-page/project2Desktop.png';
import initTranslations from '@/app/i18n';

const Projects = async ({locale}) => {

  const { t, resources } = await initTranslations(locale, ['start', 'main']);

  const projectsArr = [
    {
      filter: 'LANDING PAGE',
      imgMobile: project1,
      imgDesktop: project1Desktop,
      href: '#',
      title: 'Vini Truck',
      text: t('redesign'),
      id: 1,
    },
    {
      filter: 'LANDING PAGE',
      imgMobile: project2,
      imgDesktop: project2Desktop,
      href: '#',
      title: 'DentaCare',
      text: t('crafting'),
      id: 2,
    },
  ];

  return (
    <section id='projects' className={classes.projects}>
      <div className='container'>
        <h2 className={classes.title}>
          {t('our')} <span className={classes.projectsTitle}>{t('projects2')}</span>
        </h2>
        <p className={classes.text}>
          {t('discover')}
        </p>
        <div className={classes.projectsWrapper}>
          {projectsArr.map(
            ({ filter, href, title, text, imgDesktop, imgMobile, id }) => {
              return (
                <ProjectCard
                  key={id}
                  imgMobile={imgMobile}
                  imgDesktop={imgDesktop}
                  filter={filter}
                  href={href}
                  title={title}
                  text={text}
                />
              );
            },
          )}
        </div>
        <LinkUi clazz={classes.projectLink} href={'/stub/'} text={t('cases')} />
      </div>
    </section>
  );
};

export default Projects;
