'use client';
import classes from './contact-form.module.scss';
import { useTranslation } from 'react-i18next';
import Button from '@/ui/button/Button';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import Modal from '@/ui/modal/Modal';
import request from '@/helpers/request';
import ContactBlockInput from '@/ui/contact-block-input/ContactBlockInput';
import { useEffect } from 'react';

const ContactForm = () => {
  const { t } = useTranslation('main');
  const [notification, setNotification] = useState('');
  const [notificationText, setNotificationText] = useState('');
  const endpoint = process.env.NEXT_PUBLIC_ENDPOINT_STUB;

  const validationOrderForm = Yup.object().shape({
    name: Yup.string().min(2, t('min_name')).required(t('required_name')),
    text: Yup.string().required(t('required_name')),
  });

  const removeNotification = () => {
    setNotification('');
  };

  useEffect(() => {
    if (notification) {
      document.querySelector('.footer').style.zIndex = '-999999';
      document.querySelector('.header').style.zIndex = '-999';
      document.body.style.overflow = 'hidden';
    } else {
      document.querySelector('.footer').style.zIndex = 'initial';
      document.querySelector('.header').style.zIndex = '999';
      document.body.style.overflow = '';
    }
  }, [notification]);

  const onGetInfo = (value) => {
    request('POST', endpoint, value, setNotificationText, setNotification, t);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          text: '',
        }}
        validationSchema={validationOrderForm}
        onSubmit={(values, { resetForm }) => {
          onGetInfo(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={classes.form} noValidate>
            <ContactBlockInput
              classes={classes}
              htmlFor={'name'}
              error={errors.name}
              touched={touched.name}
              id={'name'}
              t={t}
              name={'name'}
              placeholder={'name-placeholder'}
              label={'name-placeholder'}
            />
            <ContactBlockInput
              classes={classes}
              htmlFor={'text'}
              error={errors.text}
              touched={touched.text}
              id={'text'}
              t={t}
              name={'text'}
              placeholder={'email-phone-placeholder'}
              label={'email-phone-placeholder'}
            />
            <Button>{t('send')}</Button>
          </Form>
        )}
      </Formik>
      {notification ? (
        <Modal
          notification={notification}
          notificationText={notificationText}
          removeNotification={removeNotification}
        />
      ) : null}
    </>
  );
};

export default ContactForm;
