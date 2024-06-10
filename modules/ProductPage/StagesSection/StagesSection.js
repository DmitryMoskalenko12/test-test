import classes from './stages-section.module.scss';
import Image from 'next/image';
import SvgProjectCardBg from '@/ui/ProjectPage/SvgProjectCardBg/SvgProjectCardBg';
import SvgProjectCardBgMobile from '@/ui/ProjectPage/SvgProjectCardBg/SvgProjectCardBgMobile';


const StagesSection = ({product}) => {
    return <section className={classes.stages}>
                <div className="container">
                     <div className={classes.taskBlock}>
                          <div className={classes.taskSubblock}>
                               <h2 className={classes.task}>Task:</h2>
                               <p className={classes.taskText}>{product.task}</p>
                          </div>

                          <div className={classes.solutionSubblock}>
                               <h2 className={classes.solution}>Solution:</h2>
                               <p className={classes.solutionText}>{product.solution}</p>
                          </div>
                     </div>

                     <h2 className={classes.project}>Project stages:</h2>

                     <div className={classes.stagesWrapper}>

                          <div className={classes.cardsWrapper}>
                              <div className={classes.svgDesktop}>
                                   <SvgProjectCardBg/>
                              </div>
                              <div className={classes.svgMobile}>
                                   <SvgProjectCardBgMobile/>
                              </div>
                              {
                                   product.stages.map(({title, titleText, imgIcon, card, text, id}) => {
                                        return  <article key={id} className={`${classes.card} ${classes[card]}`}>
                                                  <div className={classes.iconWrapper}>
                                                  <Image quality={100} src={imgIcon} width={64} height={58} alt='Stages number'/>
                                                  </div>
                                                  <div className={classes.titleText}>
                                                       <span className={classes.title}>{title}</span>
                                                       <p className={`${classes.text} ${classes[text]}`}>
                                                            {titleText}
                                                       </p>
                                                  </div>
                                             </article>
                                   })
                              }
                          </div>

                          <div className={classes.imgWrapper}>
                               <Image className={classes.projectMobile} src={product.asideImgMobile} width={328} height={273} alt='Project background'/>
                               <Image className={classes.projectDesktop} src={product.asideImgDesktop} width={406} height={895} alt='Project background'/>
                          </div>
                     </div>
                </div>
    </section>
}

export default StagesSection;