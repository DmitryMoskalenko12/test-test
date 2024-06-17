import classes from './idea.module.scss';
import AnchorUI from '@/ui/HomePage/Links/AnchorUI';
import initTranslations from '@/app/i18n';
import Image from 'next/image';
import waves from '../../../images/HomePage/waves.webp';
import wavesMobile from '../../../images/HomePage/wavesMobile.webp';

const Idea = async ({ locale }) => {
  const { t, resources } = await initTranslations(locale, ['start', 'main']);

  return (
    <section className={classes.idea}>
      <div className='container'>
        <div className={classes.linesDesktop}>
           <Image loading='eager' priority src={waves.src} width={2080} height={614} alt='You will see waves'/>
        </div>
        <div className={classes.lines}>
           <Image loading='eager' priority src={wavesMobile.src} width={1021} height={604} alt='You will see waves'/>
        </div>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>
            From idea to <span className={classes.delivery}>delivery</span>
          </h1>

          <div className={classes.potential}>
            <p className={classes.text}>{t('ideaText')}</p>
            <AnchorUI
              clazz={classes.ideaButton}
              href={'#contact'}
              text={t('shedule')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Idea;
