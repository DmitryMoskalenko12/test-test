import classes from './result.module.scss';
import Image from 'next/image';
import initTranslations from '@/app/i18n';

const Result = async ({product, locale}) => {
    const { t, resources } = await initTranslations(locale, ['main', 'start']);

    return <section className={classes.result}>
                <div className='container'>
                    <div className={classes.titleWrapper}>
                       <h2 className={classes.title}>{t('result')}:</h2>
                    </div>
                </div>
                <div className={classes.imgWrapper}>
                    <Image loading='eager' priority className={classes.mobile} src={product.imgResult} width={360} height={972} alt='Project result'/>
                    <Image loading='eager' priority className={classes.desktop} src={product.imgResultDesktop} width={1280} height={1036} alt='Project result'/>
                </div>
           </section>
}

export default Result;