import classes from './project-summary.module.scss';
import AnchorUI from '@/ui/HomePage/Links/AnchorUI';
import initTranslations from '@/app/i18n';
import Image from 'next/image';

const ProjectSummary = async ({locale, product}) => {
    const { t, resources } = await initTranslations(locale, ['main', 'start']);

    return <section className={classes.summary}>
              <div className='container'>
                  <h2 className={classes.title}>{t('summary')}:</h2>
                  <div className={classes.wrapper}>
                         {
                            product.summary.map(({title, text, summaryIcon, id}) => {
                                return  <article key={id} className={classes.card}>
                                            <div className={classes.iconWrapper}>
                                               <Image src={summaryIcon} width={66} height={66} alt='Icon'/>
                                            </div>
                                            <h3 className={classes.subTitle}>{title}</h3>
                                            <p className={classes.text}>
                                            {text}
                                            </p>
                                       </article>
                            })
                         }
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