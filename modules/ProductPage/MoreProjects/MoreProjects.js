import classes from './more-projects.module.scss'
import ProjectCard from '@/components/HomePage/ProjectCard/ProjectCard';
import initTranslations from '@/app/i18n';

const MoreProjects = async ({locale, product}) => {
  const { t, resources } = await initTranslations(locale, ['start']);

      return (
        <section className={classes.projects}>
          <div className='container'>
            <h2 className={classes.title}>
              {t('more-cases1')}
              <span className={classes.projectsTitle}> {t('more-cases2')}</span>
            </h2>
            <p className={classes.text}>{t('discover')}</p>
            <div className={classes.projectsWrapper}>
              {product.moreProject.map(
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
          </div>
        </section>
      );
}

export default MoreProjects;
