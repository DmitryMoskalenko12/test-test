'use client'
import classes from './projects-section.module.scss';
import ProjectCard from '@/components/HomePage/ProjectCard/ProjectCard';
import project1 from '../../../images/HomePage/project1.webp';
import project1Desktop from '../../../images/HomePage/project1Desktop.webp';
import project2 from '../../../images/HomePage/project2.webp';
import project2Desktop from '../../../images/HomePage/project2Desktop.webp';
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import wave from '../../../images/ProductPage/waveDesktop.webp';
import ProjectsLinesSvg from '@/ui/ProjectsPage/ProjectsLinesSvg';
import { useTranslation } from 'react-i18next';
import NotFound from '@/app/[locale]/[...notFound]/page';

const ProjectsSection = ({locale}) => {
  const [active, setActive] = useState(1);
  const [filter, setFilter] = useState('ALL');
  const { t } = useTranslation('start');

  const arrButtonsFilters = [
    {text: 'ALL', id: 1},
    {text: 'LANDING PAGE', id: 2},
    {text: 'ONLINE STORE', id: 3},
    {text: 'CORPORATE WEBSITE', id: 4},
    {text: 'WEB APP', id: 5},
   ]

  const projectsArr = [
    {
      filter: 'LANDING PAGE',
      imgMobile: project1,
      imgDesktop: project1Desktop,
      href: `/${locale}/projects/${'vinitruck'}/`,
      title: 'ViniTruck',
      text: t('redesign'),
      id: 'vinitruck',
    },
    {
      filter: 'LANDING PAGE',
      imgMobile: project2,
      imgDesktop: project2Desktop,
      href: `/${locale}/projects/${'dentacare'}/`,
      title: 'DentaCare',
      text: t('crafting'),
      id: 'dentacare',
    },
  ];

  const filteredProjects = filter === 'ALL' ? projectsArr : projectsArr.filter((project) => project.filter === filter);
  
  if (!filteredProjects) {
    return <NotFound params = {locale}/>
  }

    return <section className={classes.projects}>
               <div className={classes.waveWrapper}>
                  <ProjectsLinesSvg clazz={classes.waveMobile}/>
                  <Image priority quality={100} className={classes.waveDesktop} src={wave.src} width={5120} height={2182} alt='Background wave'/>
                </div>
               <div className='container'>
                <h1 className={classes.title}>
                  {t('our')} <span className={classes.titleProjects}>{t('projects2')}</span>
                </h1>
                <h2 className={classes.subtitle}>
                  {t('discover')}
                </h2>

                <div className={classes.filters}>
                  <button onClick={(e) => {setActive(1); setFilter(e.target.textContent)}} className={cn(classes.filterButton, {[classes.activeFilter]: active === 1})}>ALL</button>
                  <button onClick={(e) => {setActive(2); setFilter(e.target.textContent)}} className={cn(classes.filterButton, {[classes.activeFilter]: active === 2})}>LANDING PAGE</button>
                  <button disabled onClick={() => setActive(3)} className={cn(`${classes.filterButton, classes.disabled}`, {[classes.activeFilter]: active === 3})}>ONLINE STORE</button>
                  <button disabled onClick={() => setActive(4)} className={cn(`${classes.filterButton, classes.disabled}`, {[classes.activeFilter]: active === 4})}>CORPORATE WEBSITE</button>
                  <button disabled onClick={() => setActive(5)} className={cn(`${classes.filterButton, classes.disabled}`, {[classes.activeFilter]: active === 5})}>WEB APP</button>
                </div>

                <div className={classes.projectsWrapper}>
                    {filteredProjects?.map(
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
}

export default ProjectsSection;