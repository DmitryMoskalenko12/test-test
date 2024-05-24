import classes from './project-card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ filter, href, title, text, imgDesktop, imgMobile }) => {
  return (
    <article className={classes.card}>
      <div className={classes.imgWrapper}>
        <Image
          className={classes.mobileProject}
          src={imgMobile}
          width={328}
          height={204}
          alt='You will see project'
        />
        <Image
          className={classes.desktopProject}
          src={imgDesktop}
          width={552}
          height={344}
          alt='You will see project'
        />
        <div className={classes.filter}>{filter}</div>
      </div>
      <div className={classes.titleWrapper}>
        <h3 className={classes.title}>{title}</h3>
        <Link className={classes.projectLink} href={href}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
          >
            <path
              d='M19.069 16.9917L18.3955 9.6474C18.3077 8.69834 17.4636 7.85285 16.5138 7.76575L9.16876 7.09296L9.2697 8.19376L16.4584 8.85298L7.45405 17.8573L8.30394 18.7072L17.3089 9.70216L17.9675 16.8915L19.069 16.9917Z'
              fill='black'
            />
          </svg>
        </Link>
      </div>

      <p className={classes.cardText}>{text}</p>
    </article>
  );
};

export default ProjectCard;
