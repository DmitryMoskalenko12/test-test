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

/*   const cancelReloadServices = () => {
    if (scrollServices) {
      route.push('/');
      setTimeout(() => {
        refServices.current.click();
      }, 1300);
    }
  }; */

  return (
 <></>
  );
};

export default Header;