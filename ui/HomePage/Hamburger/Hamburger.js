import cn from 'classnames';

const Hamburger = ({
  hamburgerClass,
  hamburgerActiveClass,
  active,
  setActive,
}) => {
  return (
    <div
      className={cn(hamburgerClass, { [hamburgerActiveClass]: active })}
      onClick={() => setActive((prev) => !prev)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Hamburger;
