'use client';
import { useEffect } from 'react';
import classes from './collapse-item.module.scss';

const CollapseItem = ({
  title,
  text,
  linkRef,
  height,
  setToggle,
  toggle,
  setHeight,
  activeTitle,
  setActiveTitle,
}) => {
  useEffect(() => {
    setHeight(linkRef.current.scrollHeight);
  }, [activeTitle]);

  return (
    <div className={classes.content}>
      <button
        onClick={(e) => {
          setActiveTitle(e.target.textContent);
          setToggle((prev) => (activeTitle === title ? !prev : true));
        }}
        className={
          toggle && activeTitle === title
            ? classes.titleCollapseActive
            : classes.titleCollapse
        }
      >
        {title}
        <div
          className={
            toggle && activeTitle === title
              ? classes.helperCollapseActive
              : classes.helperCollapse
          }
        ></div>
      </button>
      <div
        className={
          toggle && activeTitle === title ? classes.hrActive : classes.hr
        }
      ></div>
      <p
        style={{
          height: toggle && activeTitle === title ? `${height}px` : '',
        }}
        ref={toggle && activeTitle === title ? linkRef : null}
        className={
          toggle && activeTitle === title
            ? classes.collapseTextActive
            : classes.collapseText
        }
      >
        {text}
      </p>
    </div>
  );
};

export default CollapseItem;
