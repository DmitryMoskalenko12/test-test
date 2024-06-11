import classes from './project-summary.module.scss';
import AnchorUI from '@/ui/HomePage/Links/AnchorUI';
import SvgSummaryIcon1 from '@/ui/ProjectPage/SvgSummaryIcons/SvgSummaryIcon1';
import SvgSummaryIcon2 from '@/ui/ProjectPage/SvgSummaryIcons/SvgSummaryIcon2';
import SvgSummaryIcon3 from '@/ui/ProjectPage/SvgSummaryIcons/SvgSummaryIcon3';
import initTranslations from '@/app/i18n';

const ProjectSummary = async ({locale}) => {
    const { t, resources } = await initTranslations(locale, ['main', 'start']);

    return <section className={classes.summary}>
              <div className='container'>
                  <h2 className={classes.title}>{t('summary')}:</h2>
                  <div className={classes.wrapper}>
                     <article className={classes.card}>
                         <SvgSummaryIcon1/>
                         <h3 className={classes.subTitle}>{t('enhanced')}</h3>
                         <p className={classes.text}>
                         {t('enhanced-text')}
                         </p>
                     </article>
                     <article className={classes.card}>
                         <SvgSummaryIcon2/>
                         <h3 className={classes.subTitle}>{t('reliability')}</h3>
                         <p className={classes.text}>
                         {t('reliability-text')}
                         </p>
                     </article>
                     <article className={classes.card}>
                         <SvgSummaryIcon3/>
                         <h3 className={classes.subTitle}>{t('increased-attraction')}</h3>
                         <p className={classes.text}>
                         {t('increased-attraction-text')}
                         </p>
                     </article>
                  </div>
                  <AnchorUI
                    href={'#contact'}
                    clazz={classes.summaryButton}
                    text={t('shedule')}
                    />
              </div>
           </section>
}

export default ProjectSummary;