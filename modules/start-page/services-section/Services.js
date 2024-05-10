'use client';

import classes from './services.module.scss';
import { useState, useRef, useEffect } from 'react';
import { collapseArr } from '@/helpers/start-page/collapse-elements';
import LinkUi from '@/ui/start-page/links/LinkUi';
import CollapseItem from '@/components/start-page/collapse-item/CollapseItem';
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
  }, []);

  return (
    <section className={classes.services}>
      <div className='container'>
        <div className={classes.wrapper}>
          <div className={classes.servicesTextBlock}>
            <h2 className={classes.title}>
              {t('our')}{' '}
              <span className={classes.servicesTitle}>{t('services')}</span>
            </h2>
            <p className={classes.text}>{t('servicesText')}</p>
            <LinkUi clazz={classes.servicesButton} text={'Schedule a demo'} />
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
            <LinkUi
              clazz={classes.servicesButtonCollapse}
              text={'Schedule a demo'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
