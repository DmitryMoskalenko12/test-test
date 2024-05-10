import classes from './projects.module.scss';
import LinkUi from '@/ui/start-page/links/LinkUi';
import ProjectCard from '@/components/start-page/project-card/ProjectCard';
import project1 from '@/images/start-page/project1.png';
import project1Desktop from '@/images/start-page/project1Desktop.png';
import project2 from '@/images/start-page/project2.png';
import project2Desktop from '@/images/start-page/project2Desktop.png';

const Projects = () => {
  const projectsArr = [
    {
      filter: 'LANDING PAGE',
      imgMobile: project1,
      imgDesktop: project1Desktop,
      href: '#',
      title: 'Vini Truck',
      text: 'Redesign the website with a modern and visually appealing layout, incorporating contemporary design trends and aesthetics.',
      id: 1,
    },
    {
      filter: 'LANDING PAGE',
      imgMobile: project2,
      imgDesktop: project2Desktop,
      href: '#',
      title: 'DentaCare',
      text: 'Crafting a user-friendly and stylish landing page for a dentist clinic  with intuitive functionality to provide visitors with a seamless experience.',
      id: 2,
    },
  ];

  return (
    <section className={classes.projects}>
      <div className='container'>
        <h2 className={classes.title}>
          Our <span className={classes.projectsTitle}>projects</span>
        </h2>
        <p className={classes.text}>
          Discover how we transformed client visions into digital innovation
          realities
        </p>
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
        <LinkUi clazz={classes.projectLink} text={'All cases'} />
      </div>
    </section>
  );
};

export default Projects;
