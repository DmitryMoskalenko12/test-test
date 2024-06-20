'use client';

import classes from './services.module.scss';
import { useState, useRef, useEffect } from 'react';
import { collapseArr } from '@/helpers/HomePage/collapse-elements';
import AnchorUI from '@/ui/HomePage/Links/AnchorUI';
import CollapseItem from '@/components/HomePage/CollapseItem/CollapseItem';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const [collapseItems, setCollapseItems] = useState([]);
  const [activeTitle, setActiveTitle] = useState('');
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState('');
  const linkRef = useRef([]);

  const { t } = useTranslation('start');

  useEffect(() => {
    setCollapseItems(collapseArr(t));
    //eslint-disable-next-line
  }, []);

  return (
    <section id='services' className={classes.services}>
      <div className='container'>
        <div className={classes.wrapper}>
          <div className={classes.servicesTextBlock}>
            <h2 className={classes.title}>
              {t('our')}{' '}
              <span className={classes.servicesTitle}>{t('services')}</span>
            </h2>
            <p className={classes.text}>{t('servicesText')}</p>
            <AnchorUI
              clazz={classes.servicesButton}
              href={'#contact'}
              text={t('shedule')}
            />
          </div>

          <div className={classes.collapse}>
            {collapseItems.map(({ title, text, id }) => {
              return (
                <CollapseItem
                  key={id}
                  setActiveTitle={setActiveTitle}
                  toggle={toggle}
                  height={height}
                  linkRef={linkRef}
                  setHeight={setHeight}
                  setToggle={setToggle}
                  activeTitle={activeTitle}
                  title={title}
                  text={text}
                />
              );
            })}
            <AnchorUI
              href={'#contact'}
              clazz={classes.servicesButtonCollapse}
              text={t('shedule')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
