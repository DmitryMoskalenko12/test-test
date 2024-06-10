import classes from './more-projects.module.scss'
import project2Desktop from '../../../images/ProductPage/project2Desktop.png';
import project2 from '../../../images/ProductPage/project2.png';
import ProjectCard from '@/components/HomePage/ProjectCard/ProjectCard';

const MoreProjects = () => {
    const projectsArr = [
        {
          filter: 'LANDING PAGE',
          imgMobile: project2,
          imgDesktop: project2Desktop,
          href: '/stub/',
          title: 'DentaCare',
          text: 'Crafting a user-friendly and stylish landing page for a dentist clinic  with intuitive functionality to provide visitors with a seamless experience.',
          id: 1,
        },
      ];
    
      return (
        <section className={classes.projects}>
          <div className='container'>
            <h2 className={classes.title}>
              More
              <span className={classes.projectsTitle}> cases</span>
            </h2>
            <p className={classes.text}>Discover how we transformed client visions into digital innovation realities</p>
            <div className={classes.projectsWrapper}>
              {projectsArr.map(
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
