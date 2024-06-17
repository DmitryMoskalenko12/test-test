import classes from './projects.module.scss';
import LinkUi from '@/ui/HomePage/Links/LinkUi';
import ProjectCard from '@/components/HomePage/ProjectCard/ProjectCard';
import project1 from '@/images/HomePage/project1.webp';
import project1Desktop from '@/images/HomePage/project1Desktop.webp';
import project2 from '@/images/HomePage/project2.webp';
import project2Desktop from '@/images/HomePage/project2Desktop.webp';
import initTranslations from '@/app/i18n';

const Projects = async ({ locale }) => {
  const { t, resources } = await initTranslations(locale, ['start', 'main']);

  const projectsArr = [
    {
      filter: 'LANDING PAGE',
      imgMobile: project1,
      imgDesktop: project1Desktop,
      href: `/${locale}/${'vinitruck'}/`,
      title: 'ViniTruck',
      text: t('redesign'),
      id: 'vinitruck',
    },
    {
      filter: 'LANDING PAGE',
      imgMobile: project2,
      imgDesktop: project2Desktop,
      href: `/${locale}/${'dentacare'}/`,
      title: 'DentaCare',
      text: t('crafting'),
      id: 'dentacare',
    },
  ];

  return (
    <section id='projects' className={classes.projects}>
      <div className='container'>
        <h2 className={classes.title}>
          {t('our')}{' '}
          <span className={classes.projectsTitle}>{t('projects2')}</span>
        </h2>
        <p className={classes.text}>{t('discover')}</p>
        <div className={classes.projectsWrapper}>
          {projectsArr?.map(
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
        <LinkUi clazz={classes.projectLink} href={'/projects/'} text={t('cases')} />
      </div>
    </section>
  );
};

export default Projects;
