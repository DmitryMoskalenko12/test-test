import Link from "next/link";

const LinkUi = ({ clazz, text, href }) => {
  return (
    <Link className={clazz} href={href} title='Shedule a demo'>
      <span>{text}</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          d='M13.8259 17.8238L18.5429 13.1068C19.1519 12.4968 19.1529 11.5028 18.5429 10.8928L13.8249 6.17578L13.1179 6.88278L17.7349 11.4998H5.00088V12.4998H17.7359L13.1179 17.1168L13.8259 17.8238Z'
          fill='black'
        />
      </svg>
    </Link>
  );
};

export default LinkUi;
