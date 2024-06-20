'use client';
import classes from './header.module.scss';
import Link from 'next/link';
import LanguageChanger from '@/components/LanguageChanger/LanguageChanger';
import cn from 'classnames';
import { useState, useEffect, useRef } from 'react';
import Hamburger from '@/ui/HomePage/Hamburger/Hamburger';
import { usePathname } from 'next/navigation';
import AsideModal from '../AsideModal/AsideModal';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import HeaderLogoMobileDesktopSvg from '@/ui/HomePage/HeaderLogoMobileDesktopSvg/HeaderLogoMobileDesktopSvg';
import LinkedinSvg from '@/ui/HomePage/SocialLinksSvg/LinkedinSvg';
import BehanceSvg from '@/ui/HomePage/SocialLinksSvg/BehanceSvg';
import FacebookSvg from '@/ui/HomePage/SocialLinksSvg/FacebookSvg';
import ContactArrowSvg from '@/ui/HomePage/ContactArrowSvg/ContactArrowSvg';
import Image from 'next/image';
import asideNavLines from '../../../images/HomePage/lines.webp';

const Header = () => {
  const [active, setActive] = useState(false);
  const [asideModalActive, setAsideModalActive] = useState(false);
  const [scrollServices, setScrollServices] = useState(true);

  const path = usePathname().includes('stub');
  const { t } = useTranslation('start');
  const route = useRouter();
  const refServices = useRef();

  useEffect(() => {
    if (active) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'initial';
    }
  }, [active]);

  useEffect(() => {
    if (asideModalActive) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'initial';
    }
  }, [asideModalActive]);

  const cancelReloadServices = () => {
    if (scrollServices) {
      route.push('/');
      setTimeout(() => {
        refServices.current.click();
      }, 1300);
    }
  };

  return (
    <header className={`${classes.header} header`}>
      <div className='container'>
        <div
          style={{ height: active ? '40px' : 'initial' }}
          className={classes.wrapper}
        >
          <div className={classes.logoNav}>
            <Link title={t('logo')} className={classes.logo} href='/'>
               <HeaderLogoMobileDesktopSvg clazzDesktop = {classes.logoDesktop} clazzMobile = {classes.logoMobile}/>
            </Link>

            <nav className={cn(classes.nav, { [classes.activeNav]: active })}>
              <div className={classes.lines}>
                <Image src={asideNavLines.src} width={1236} height={647} alt='You will see waves'/>
              </div>
              <ul className={classes.list}>
                <li className={classes.li}>
                  <a
                    ref={refServices}
                    onClick={(e) => {
                      setActive(false);
                      setScrollServices((prev) => !prev);
                      cancelReloadServices();
                    }}
                    className={classes.link}
                    href='#services'
                  >
                    {t('servicesHeader')}
                  </a>
                </li>
                <li className={classes.li}>
                  <Link
                    onClick={() => {
                      setActive(false);
                    }}
                    className={classes.link}
                    href='/projects/'
                  >
                    {t('projects')}
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link
                    onClick={() => setActive(false)}
                    className={classes.link}
                    href='/stub/'
                  >
                    {t('about')}
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link
                    onClick={() => setActive(false)}
                    className={classes.link}
                    href='/stub/'
                  >
                    {t('we-hire')}
                  </Link>
                </li>
              </ul>

              <div className={classes.langSocial}>
                <LanguageChanger
                  display={path ? classes.visible : classes.visible}
                  dividerClass={classes.divider}
                />

                <div className={classes.socialBlock}>
                  <a
                    title='Linkedin'
                    target='__blank'
                    className={classes.socialLink}
                    href='https://www.linkedin.com/company/uviten/'
                  >
                   <LinkedinSvg/>
                  </a>
                  <a
                    title='Behance'
                    href='https://www.behance.net/uviten'
                    target='__blank'
                    className={classes.socialLink}
                  >
                    <BehanceSvg/>
                  </a>
                  <a
                    title='Facebook'
                    target='__blank'
                    className={classes.socialLink}
                    href='https://www.facebook.com/uviten'
                  >
                   <FacebookSvg/>
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <div className={classes.leftSide}>
            <LanguageChanger
              display={path ? classes.visability : classes.visability}
              dividerClass={classes.divider}
            />
            <button
              onClick={() => setAsideModalActive((prev) => !prev)}
              title='Contact us'
              className={cn(classes.headerButton, {
                [classes.headerButtonHidden]: active,
              })}
            >
              {t('contact-us')}
            </button>
            <a
              onClick={() => setAsideModalActive((prev) => !prev)}
              title='Contact us'
              className={classes.headerButtonDesktop}
              href='#'
            >
              <span className={classes.headerButtonDesktopText}>
                {t('contact-us')}
              </span>
              <ContactArrowSvg/>
            </a>

            <Hamburger
              hamburgerClass={classes.hamburger}
              hamburgerActiveClass={classes.activeHamburger}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
      {asideModalActive ? <AsideModal close={setAsideModalActive} /> : null}
    </header>
  );
};

export default Header;