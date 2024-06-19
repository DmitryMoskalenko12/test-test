'use client';
import { useEffect } from 'react';
import classes from './collapse-item.module.scss';
import localFont from 'next/font/local';

const mulish = localFont({
  src: [
    {
      path: '../../../fonts/Mulish-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
})

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
            ? `${classes.titleCollapseActive} ${mulish.className}`
            : `${classes.titleCollapse} ${mulish.className}`
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
