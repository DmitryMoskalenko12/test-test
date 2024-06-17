'use client';
import Link from 'next/link';
import classes from './footer.module.scss';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';

const Footer = ({ locale }) => {
  const route = useRouter();
  const { t } = useTranslation('start');
  const [scrollServices, setScrollServices] = useState(true);
  const refServices = useRef();



  return (
   <></>
  );
};

export default Footer;
