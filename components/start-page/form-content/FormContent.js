'use client';
import Link from 'next/link';
import classes from './form-content.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import ContactInputBlock from '@/ui/start-page/contact-input-block/ContactInputBlock';
import ThanksMessage from '@/ui/start-page/thanks-message/ThanksMessage';
import ErrorMessage from '@/ui/start-page/error-message/ErrorMessage';
import contactFormRequest from '@/helpers/contactFormRequest';
import LoadingFormSpinner from '@/ui/start-page/loading-form-spinner/LoadingFormSpinner';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

const FormContent = ({ close }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);
  const { t } = useTranslation('start');
  const path = window.location.href
  console.log(process.env.NEXT_PUBLIC_PRODUCTION, path.split('/')[2])

  const validationOrderForm = Yup.object().shape({
    name: Yup.string().required(t('required')),
    text: Yup.string().required(t('required')),
  });

  const onGetInfo = (value) => {
    contactFormRequest(
      'https://formspree.io/f/xpzvynwe',
      'POST',
      value,
      setSuccess,
      setLoading,
      setError
    );
  };

  const loadingContent = loading === true && success === null && error === false ? <LoadingFormSpinner/> : null;
  const initial =
    success === null && loading === false && error === false  ? (
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => close((prev) => !prev)}
          className={classes.close}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
          >
            <path
              d='M8.02868 6.98413L13.8317 1.19666C13.9464 1.0631 14.0063 0.89131 13.9995 0.715608C13.9927 0.539906 13.9196 0.373235 13.795 0.248903C13.6703 0.12457 13.5032 0.0517322 13.327 0.0449456C13.1508 0.038159 12.9786 0.0979233 12.8447 0.212295L7.04168 5.99977L1.23868 0.205314C1.10687 0.0738535 0.928092 0 0.74168 0C0.555269 0 0.376493 0.0738535 0.24468 0.205314C0.112868 0.336774 0.0388162 0.515072 0.0388162 0.700984C0.0388162 0.886897 0.112868 1.0652 0.24468 1.19666L6.05468 6.98413L0.24468 12.7716C0.171403 12.8342 0.111889 12.9112 0.0698727 12.9978C0.0278564 13.0844 0.00424528 13.1788 0.000521634 13.2749C-0.00320201 13.3711 0.0130418 13.4669 0.048234 13.5565C0.0834262 13.6461 0.136807 13.7275 0.205025 13.7955C0.273244 13.8636 0.354827 13.9168 0.444654 13.9519C0.534482 13.987 0.630614 14.0032 0.727018 13.9995C0.823421 13.9958 0.918014 13.9722 1.00486 13.9303C1.0917 13.8884 1.16893 13.8291 1.23168 13.756L7.04168 7.96849L12.8447 13.756C12.9786 13.8703 13.1508 13.9301 13.327 13.9233C13.5032 13.9165 13.6703 13.8437 13.795 13.7194C13.9196 13.595 13.9927 13.4284 13.9995 13.2527C14.0063 13.077 13.9464 12.9052 13.8317 12.7716L8.02868 6.98413Z'
              fill='#232B50'
            />
          </svg>
        </button>
        <div className={classes.textTitle}>
          <h2 className={classes.title}>
            {t('contact')} <span className={classes.us}>{t('us')}</span>
          </h2>
          <p className={classes.text}>
            {t('love-making')}
          </p>
        </div>
        <Formik
          initialValues={{
            name: '',
            text: '',
            website: '',
            about: '',
            policy: false,
          }}
          validationSchema={validationOrderForm}
          onSubmit={(values, { resetForm }) => {
            onGetInfo(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={classes.form} noValidate>
              <ContactInputBlock
                type={'text'}
                classes={classes}
                error={errors.name}
                touched={touched.name}
                name={'name'}
                placeholder={t('name')}
              />
              <ContactInputBlock
                type={'text'}
                classes={classes}
                error={errors.text}
                touched={touched.text}
                name={'text'}
                placeholder={t('email')}
              />
              <Field
                className={classes.input}
                name='website'
                type='text'
                placeholder={t('website')}
              />
              <Field
                className={classes.input}
                name='about'
                type='text'
                placeholder={t('tell-us')}
              />
              <div className={classes.checkWrapper}>
                <Field
                  id='policy'
                  className={classes.check}
                  name='policy'
                  type='checkbox'
                />
                <label htmlFor='policy' className={classes.label}>
                  {t('agreePolicy')}{' '}
                  <Link  onClick={() => close((prev) => !prev)} className={classes.labelLink} href='/policy/'>
                    {t('policy')}
                  </Link>{' '}
                </label>
              </div>
              <button type='submit' className={classes.button}>
                {t('send')}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'
                >
                  <path
                    d='M14.3259 20.1758L19.0429 14.5063C19.6519 13.7731 19.6529 12.5784 19.0429 11.8453L14.3249 6.17578L13.6179 7.02554L18.2349 12.5748H5.50088V13.7767H18.2359L13.6179 19.326L14.3259 20.1758Z'
                    fill='#FDFFFE'
                  />
                </svg>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    ) : null;
  const thanks =
  success === true && loading === false && error === false ? (
      <ThanksMessage close={close} />
    ) : null;
  const errorContent =
  success === false && loading === false && error === true ? (
      <ErrorMessage setLoading={setLoading} setError={setError} setSuccess={setSuccess} close={close} />
    ) : null;
  return (
    <>
      {loadingContent}
      {initial}
      {thanks}
      {errorContent}
    </>
  );
};

export default FormContent;
