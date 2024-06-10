import classes from './project-summary.module.scss';
import AnchorUI from '@/ui/HomePage/Links/AnchorUI';
import SvgSummaryIcon1 from '@/ui/ProjectPage/SvgSummaryIcons/SvgSummaryIcon1';
import SvgSummaryIcon2 from '@/ui/ProjectPage/SvgSummaryIcons/SvgSummaryIcon2';
import SvgSummaryIcon3 from '@/ui/ProjectPage/SvgSummaryIcons/SvgSummaryIcon3';

const ProjectSummary = () => {
    return <section className={classes.summary}>
              <div className='container'>
                  <h2 className={classes.title}>Project summary:</h2>
                  <div className={classes.wrapper}>
                     <article className={classes.card}>
                         <SvgSummaryIcon1/>
                         <h3 className={classes.subTitle}>Enhanced User Experience</h3>
                         <p className={classes.text}>
                         The redesigned website offers a sleek, visually captivating interface that improves navigation and engagement, resulting in a more satisfying user experience.
                         </p>
                     </article>
                     <article className={classes.card}>
                         <SvgSummaryIcon2/>
                         <h3 className={classes.subTitle}>High Performance and Reliability</h3>
                         <p className={classes.text}>
                         Rigorous development and quality assurance processes have ensured that the website performs efficiently across all devices and browsers, providing a seamless and reliable user experience.
                         </p>
                     </article>
                     <article className={classes.card}>
                         <SvgSummaryIcon3/>
                         <h3 className={classes.subTitle}>Increased Client Attraction</h3>
                         <p className={classes.text}>
                         By integrating the latest design trends and ensuring a cohesive brand look, the website now stands out in the market, attracting more clients and boosting the company’s competitive edge.
                         </p>
                     </article>
                  </div>
                  <AnchorUI
                    href={'#contact'}
                    clazz={classes.summaryButton}
                    text={'Schedule a demo'}
                    />
              </div>
           </section>
}

export default ProjectSummary;