import classes from './result.module.scss';
import Image from 'next/image';

const Result = ({product}) => {
    return <section className={classes.result}>
                <div className='container'>
                    <div className={classes.titleWrapper}>
                       <h2 className={classes.title}>Result:</h2>
                    </div>
                </div>
                <div className={classes.imgWrapper}>
                    <Image className={classes.mobile} src={product.imgResult} width={360} height={972} alt='Project result'/>
                    <Image className={classes.desktop} src={product.imgResultDesktop} width={1280} height={1036} alt='Project result'/>
                </div>
           </section>
}

export default Result;