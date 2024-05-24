'use client';
import classes from './contact.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import ContactInputBlock from '@/ui/start-page/contact-input-block/ContactInputBlock';
import { useState } from 'react';
import ContactErrorMessage from '@/ui/start-page/contact-error-message/ContactErrorMessage';
import ContactThanksMessage from '@/ui/start-page/contact-thanks-message/ContactThanksMessage';
import contactFormRequest from '@/helpers/contactFormRequest';
import ContactSpinner from '../contact-spinner/ContactSpinner';

const Contact = () => {
  const { t } = useTranslation('start');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);

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
  const initial =
    success === null && loading === false && error === false  ? (
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
                <Link className={classes.labelLink} href='/policy/'>
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
            <svg
              className={classes.wave}
              width='360'
              height='376'
              viewBox='0 0 360 376'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M532.551 68.0836C503.312 50.8688 461.972 64.1921 446.728 95.6326C438.139 113.365 437.532 134.113 437.573 154.069C437.635 182.292 438.3 222.485 412.866 239.929C402.877 246.772 390.053 248.752 378.618 245.176C361.328 239.774 349.179 223.265 333.083 214.751C315.167 205.255 296.292 205.735 280.312 218.094C265.084 229.845 252.502 245.009 236.988 256.338C210.429 275.734 175.881 281.986 144.533 274.012C108.255 264.75 75.6619 242.571 37.4575 241.489C22.6661 241.041 8.1977 244.872 -4.24281 253.473C-26.7213 268.999 -44.867 290.333 -61.9973 312.127'
                stroke='#F5F7F6'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                opacity='0.7'
                d='M532.298 73.137C511.211 61.8573 483.612 66.2048 464.139 80.9845C457.189 86.3067 451.253 92.9543 447.117 100.799C442.99 108.558 440.515 116.936 438.951 125.588C437.13 135.64 436.583 146.008 436.21 156.266C435.927 163.028 435.732 170.579 435.149 178.347C433.446 201.611 428.799 227.098 410.132 240.28C400.336 247.23 387.814 249.461 376.54 246.335C359.51 241.612 347.19 226.036 331.107 217.828C321.59 212.952 311.819 210.731 302.417 211.451C294.205 212.088 286.187 214.953 278.794 220.226C263.656 231.034 251.028 244.98 235.613 255.282C209.255 273.011 175.25 278.284 144.074 270.633C142.321 270.22 140.612 269.769 138.867 269.27C106.556 260.28 76.7898 243.05 43.2124 241.318C41.5108 241.214 39.801 241.195 38.0911 241.176C23.5452 241.146 9.34273 245.179 -2.89603 253.802C-25.0517 269.363 -42.9832 290.59 -59.8952 312.235'
                stroke='#EDF0EE'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                opacity='0.7'
                d='M532.093 78.1903C511.444 68.3015 484.331 73.0928 464.844 87.1775C457.879 92.238 451.895 98.5337 447.595 105.97C443.347 113.283 440.591 121.195 438.79 129.345C436.655 138.842 435.71 148.689 434.934 158.468C434.394 164.941 433.901 172.199 433.098 179.725C430.649 202.255 425.753 227.366 407.477 240.721C397.879 247.736 385.651 250.303 374.538 247.628C357.729 243.579 345.278 228.941 329.246 221.042C319.794 216.347 310.143 214.139 300.763 214.645C292.608 215.115 284.699 217.69 277.351 222.491C262.303 232.357 249.634 245.043 234.349 254.406C208.197 270.426 174.689 274.76 143.768 267.44C142.055 267.032 140.305 266.576 138.596 266.124C106.483 257.633 76.8631 241.848 43.8893 241.049C42.2239 240.992 40.5504 241.02 38.8364 241.045C24.54 241.388 10.5993 245.666 -1.43771 254.312C-23.2343 269.955 -40.9476 291.033 -57.6816 312.523'
                stroke='#E7E8E7'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                opacity='0.7'
                d='M531.884 83.2904C511.668 74.8353 485.043 80.0702 465.501 93.4555C458.52 98.2543 452.488 104.198 448.028 111.183C443.616 118.088 440.667 125.459 438.544 133.139C436.096 142.081 434.757 151.364 433.574 160.707C432.777 166.892 431.99 173.813 430.925 181.093C427.732 202.889 422.631 227.587 404.746 241.114C395.341 248.238 383.411 251.097 372.459 248.873C355.87 245.498 343.293 231.755 327.309 224.208C317.917 219.736 308.351 217.495 299.068 217.838C291.01 218.146 283.17 220.425 275.868 224.755C260.866 233.717 248.195 245.147 233.009 253.482C207.102 267.798 174.093 271.192 143.344 264.195C141.631 263.786 139.918 263.378 138.205 262.969C106.333 254.938 76.8562 240.641 44.4456 240.77C42.8123 240.804 41.1387 240.832 39.5013 240.908C25.4502 241.669 11.7755 246.149 -0.0597989 254.817C-21.4933 270.5 -38.9923 291.47 -55.5484 312.806'
                stroke='#DBDDDC'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M531.676 88.3472C511.896 81.2827 485.759 86.9613 466.158 99.6901C459.161 104.227 453.042 109.815 448.461 116.353C443.889 122.807 440.739 129.722 438.335 136.938C435.533 145.32 433.836 154.086 432.251 162.951C431.196 168.847 430.071 175.471 428.784 182.509C424.847 203.571 419.537 227.898 402.007 241.551C392.8 248.739 381.168 251.891 370.372 250.161C354.044 247.464 341.292 234.698 325.364 227.416C316.032 223.168 306.548 220.936 297.365 221.074C289.364 221.215 281.638 223.161 274.417 227.067C259.506 235.087 246.789 245.299 231.742 252.611C206.04 265.218 173.569 267.677 143.034 261.007C141.317 260.641 139.644 260.237 137.931 259.829C106.301 252.257 76.9703 239.405 45.1187 240.506C43.4814 240.582 41.8843 240.662 40.2428 240.781C26.4412 241.915 13.0687 246.646 1.39075 255.374C-19.6837 271.139 -36.9645 291.96 -53.3426 313.141'
                stroke='#D9D9D9'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M531.428 93.3996C512.045 87.7212 486.436 93.8479 466.78 105.877C459.763 110.196 453.6 115.388 448.859 121.476C444.167 127.483 440.735 133.934 438.094 140.646C434.983 148.431 432.888 156.676 430.856 165.101C429.503 170.704 428.161 177.043 426.613 183.835C422.007 204.215 416.372 228.114 399.233 241.94C390.219 249.236 378.925 252.685 368.254 251.359C352.143 249.379 339.268 237.464 323.388 230.535C314.121 226.467 304.717 224.244 295.635 224.177C287.736 224.113 280.075 225.806 272.899 229.242C258.038 236.314 245.324 245.228 230.368 251.598C204.874 262.454 172.897 264.016 142.576 257.673C140.899 257.312 139.222 256.951 137.505 256.585C106.116 249.473 76.9281 238.109 45.6357 240.18C44.0345 240.304 42.4333 240.427 40.8684 240.598C27.3162 242.106 14.2055 247.082 2.7293 255.832C-18.0223 271.633 -35.0486 292.35 -51.2488 313.377'
                stroke='#E1E4E2'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M531.224 98.4948C512.279 94.2067 487.152 100.82 467.441 112.15C460.409 116.206 454.198 121.047 449.256 126.68C444.403 132.235 440.776 138.188 437.813 144.431C434.388 151.661 431.894 159.385 429.461 167.332C427.85 172.646 426.174 178.644 424.404 185.195C419.054 204.841 413.209 228.369 396.466 242.325C387.645 249.729 376.65 253.47 366.139 252.594C350.249 251.288 337.203 240.307 321.415 233.691C312.208 229.846 302.889 227.589 293.905 227.36C286.062 227.13 278.51 228.532 271.38 231.496C256.61 237.627 243.849 245.324 229.028 250.713C203.74 259.86 172.301 260.487 142.152 254.467C140.471 254.148 138.794 253.787 137.158 253.43C105.966 246.817 76.925 236.897 46.2361 239.901C44.6712 240.072 43.1063 240.242 41.5331 240.498C28.2264 242.423 15.3815 247.602 4.10699 256.374C-16.2857 272.257 -33.0937 292.825 -49.116 313.697'
                stroke='#DCDFDD'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M531.003 103.671C512.495 100.773 487.856 107.83 468.086 118.504C461.038 122.299 454.78 126.788 449.677 131.969C444.66 137.117 440.795 142.567 437.591 148.35C433.853 155.025 430.961 162.228 428.125 169.697C426.217 174.717 424.283 180.427 422.292 186.736C416.197 205.649 410.103 228.801 393.755 242.887C385.132 250.356 374.435 254.39 364.08 254.008C348.451 253.38 335.234 243.332 319.499 237.025C310.355 233.36 301.117 231.113 292.23 230.722C284.484 230.329 276.962 231.432 269.917 233.929C255.193 239.156 242.434 245.555 227.708 249.96C202.625 257.399 171.728 257.048 141.789 251.398C140.148 251.084 138.467 250.765 136.831 250.409C105.88 244.255 76.9903 235.737 46.8563 239.755C45.3276 239.973 43.7989 240.191 42.2217 240.49C29.1644 242.789 16.5814 248.212 5.50866 257.007C-14.5209 272.929 -31.1148 293.39 -46.9591 314.108'
                stroke='#D2D6D4'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M530.774 108.601C512.703 107.093 488.547 114.635 468.726 124.568C461.659 128.144 455.317 132.234 450.094 136.969C444.957 141.67 440.851 146.66 437.37 151.936C433.278 158.052 430.032 164.696 426.79 171.729C424.624 176.461 422.392 181.877 420.144 187.897C413.305 206.077 407.002 228.858 391.048 243.074C382.619 250.65 372.22 254.978 362.03 255.003C346.621 255.048 333.278 245.895 317.59 239.939C308.547 236.503 299.349 234.26 290.527 233.616C282.839 233.057 275.43 233.826 268.426 235.896C253.752 240.176 240.988 245.363 226.401 248.745C201.562 254.48 171.124 253.186 141.398 247.862C139.757 247.548 138.112 247.277 136.472 246.964C105.762 241.27 76.9792 234.192 47.4042 239.18C45.9118 239.445 44.3789 239.706 42.8782 240.057C30.0704 242.729 17.7895 248.403 6.874 257.258C-12.7966 273.262 -29.1722 293.573 -44.8344 314.094'
                stroke='#C4C1C1'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M530.565 113.655C512.932 113.537 489.263 121.523 469.383 130.799C462.3 134.114 455.91 137.852 450.527 142.136C445.229 146.386 440.927 150.878 437.164 155.69C432.755 161.294 429.115 167.374 425.474 173.886C423.011 178.325 420.522 183.452 418.011 189.227C410.468 206.677 403.876 229.079 388.313 243.467C380.081 251.108 370.016 255.776 359.946 256.247C344.759 256.965 331.285 248.75 315.649 243.103C306.671 239.847 297.553 237.613 288.829 236.808C281.237 236.086 273.897 236.56 266.938 238.159C252.355 241.497 239.549 245.425 225.056 247.822C200.419 251.893 170.522 249.621 141.01 244.624C139.365 244.353 137.761 244.086 136.12 243.773C105.652 238.539 77.0117 232.947 47.9999 238.863C46.5033 239.171 45.047 239.484 43.5422 239.877C30.9797 242.967 18.9648 248.843 8.2914 257.724C-11.0564 273.764 -27.1776 293.972 -42.6619 314.339'
                stroke='#B1B1B1'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
            </svg>
          </Form>
        )}
      </Formik>
    ) : null;

  const loadingContent = loading === true && success === null && error === false ? <ContactSpinner/> : null;
  const errorContent =
    success === false && loading === false && error === true ? (
      <ContactErrorMessage setLoading={setLoading} setError={setError} setSuccess={setSuccess} />
    ) : null;
  const thanks =
    success === true && loading === false && error === false ? (
      <ContactThanksMessage setSuccess={setSuccess} />
    ) : null;
  return (
    <section id='contact' className={classes.contact}>
      <div className='container'>
        <div className={classes.wrapper}>
          <div className={classes.titleTextWrapper}>
            <h2 className={classes.title}>
              {t('contact')} <span className={classes.us}>{t('us')}</span>
            </h2>
            <p className={classes.text}>
             {t('love-making')}
            </p>
            <svg
              className={classes.desktopWave}
              width='872'
              height='705'
              viewBox='0 0 872 705'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g opacity='0.5'>
                <path
                  d='M832.438 41.1471C747.087 9.73616 640.04 45.8845 610.165 115.956C593.338 155.475 599.206 199.967 606.536 242.643C616.916 303.001 633.261 388.849 570.747 430.869C546.191 447.353 512.206 453.963 479.969 448.43C431.225 440.076 392.374 407.01 345.738 391.779C293.819 374.782 242.917 379.301 204.147 408.694C167.189 436.648 138.63 471.411 100.746 498.516C35.8956 544.917 -55.331 564.683 -143.047 553.429C-244.57 540.331 -340.794 498.924 -444.569 503.678C-484.758 505.459 -522.524 516.329 -553.076 537.03C-608.287 574.398 -649.67 623.389 -688.139 673.177'
                  stroke='#F2F2F2'
                  strokeMiterlimit='10'
                />
                <path
                  opacity='0.7'
                  d='M833.414 52.25C772.278 32.0348 699.173 46.4391 651.832 81.6447C634.952 94.3109 621.295 109.623 612.943 127.163C604.582 144.517 600.915 162.888 599.812 181.678C598.522 203.508 600.792 225.777 603.492 247.779C605.174 262.291 607.377 278.472 608.61 295.188C612.416 345.246 609.06 400.602 563.32 432.243C539.329 448.917 506.255 456.004 474.62 451.408C426.834 444.462 387.865 413.438 341.377 398.863C313.865 390.2 286.623 387.259 261.445 390.538C239.456 393.42 218.797 401.031 200.7 413.673C163.649 439.585 134.527 471.742 96.5428 496.621C31.6386 539.407 -58.4637 556.977 -145.583 546.388C-150.477 545.829 -155.265 545.181 -160.167 544.437C-250.842 531.195 -337.615 499.864 -429.093 502.375C-433.735 502.467 -438.368 502.744 -443.002 503.02C-482.37 505.647 -519.34 516.899 -549.335 537.603C-603.654 574.975 -644.494 623.682 -682.425 673.092'
                  stroke='#DFE8E4'
                  strokeMiterlimit='10'
                />
                <path
                  opacity='0.7'
                  d='M834.511 63.35C775.069 46.0362 703.451 61.2962 655.823 95.0083C638.808 107.114 624.895 121.678 615.95 138.369C607.103 154.786 602.506 172.208 600.58 189.961C598.24 210.654 599.243 231.876 600.68 252.921C601.559 266.858 602.85 282.462 603.396 298.696C604.919 347.305 600.751 401.885 556.135 433.813C532.704 450.585 500.551 458.333 469.517 454.674C422.578 449.132 383.6 420.149 337.371 406.233C310.101 397.947 283.195 395.015 257.998 397.832C236.106 400.347 215.64 407.314 197.496 418.937C160.353 442.81 130.664 472.27 92.6975 495.112C27.7356 534.195 -61.3493 549.661 -147.652 539.74C-152.435 539.184 -157.332 538.533 -162.119 537.885C-252.069 525.68 -337.911 497.424 -427.409 501.82C-431.935 502.007 -436.452 502.378 -441.08 502.747C-479.634 506.128 -515.803 517.853 -545.242 538.561C-598.556 576.031 -638.857 624.361 -676.359 673.392'
                  stroke='#D5EFE3'
                  strokeMiterlimit='10'
                />
                <path
                  opacity='0.7'
                  d='M835.605 74.5473C777.861 60.2251 707.729 76.3397 659.703 108.557C642.553 120.103 628.385 133.919 618.844 149.67C609.404 165.238 604.091 181.534 601.124 198.337C597.734 217.895 597.466 237.977 597.645 258.159C597.723 271.521 598.096 286.455 597.844 302.206C597.085 349.367 592.211 403.08 548.72 435.295C525.853 452.256 494.615 460.573 464.183 457.85C418.09 453.71 379.1 426.676 333.134 413.509C306.111 405.694 279.425 402.676 254.436 405.129C232.75 407.278 212.366 413.6 194.176 424.204C156.835 446.129 126.689 472.896 88.6222 493.517C23.7139 528.901 -64.3537 542.264 -150.061 533.007C-154.843 532.451 -159.624 531.896 -164.406 531.34C-253.526 520.081 -338.432 494.992 -426.06 501.269C-430.466 501.642 -434.983 502.013 -439.385 502.478C-477.12 506.705 -512.492 518.81 -541.376 539.522C-593.688 576.998 -633.446 625.043 -670.521 673.694'
                  stroke='#CEECDF'
                  strokeMiterlimit='10'
                />
                <path
                  d='M836.704 85.6355C780.652 74.2098 712.006 91.1784 663.587 121.995C646.302 132.981 631.768 146.048 621.741 160.862C611.704 175.491 605.683 190.845 601.787 206.702C597.238 225.124 595.814 244.161 594.73 263.389C594.007 276.176 593.357 290.532 592.419 305.802C589.378 351.516 583.803 404.457 541.32 436.864C519.013 453.922 488.69 462.807 458.864 461.111C413.727 458.375 374.622 433.47 328.909 420.868C302.133 413.522 275.673 410.511 250.886 412.507C229.295 414.289 209.101 419.876 190.98 429.556C153.546 449.445 122.838 473.613 84.7813 492.016C19.8158 523.702 -67.1241 534.966 -152.126 526.375C-156.903 525.912 -161.573 525.359 -166.354 524.803C-254.644 514.489 -338.62 492.471 -424.375 500.72C-428.777 501.185 -433.067 501.653 -437.464 502.21C-474.385 507.189 -508.847 519.769 -537.28 540.574C-588.587 578.148 -627.807 625.817 -664.455 674.089'
                  stroke='#BAECD6'
                  strokeMiterlimit='10'
                />
                <path
                  d='M837.694 96.7159C783.223 88.1822 716.174 106.006 667.358 135.33C649.941 145.849 635.149 158.077 624.525 171.952C614.003 185.646 607.053 200.054 602.334 214.875C596.731 232.072 594.041 250.063 591.59 268.427C589.954 280.639 588.614 294.422 586.878 309.21C581.783 353.575 575.171 405.644 533.811 438.337C512.068 455.583 482.77 465.039 453.429 464.183C409.143 462.94 370.02 439.887 324.57 428.033C298.036 421.065 271.8 418.06 247.216 419.6C225.828 420.926 205.72 425.961 187.553 434.624C149.916 452.476 118.749 473.863 80.6002 490.233C15.5736 518.131 -70.3448 527.389 -154.641 519.462C-159.306 519.002 -163.972 518.541 -168.748 518.079C-256.208 508.709 -339.251 489.852 -423.133 500.07C-427.419 500.63 -431.705 501.189 -435.876 501.844C-471.983 507.574 -505.644 520.626 -533.522 541.434C-583.94 579.011 -622.506 626.398 -658.726 674.291'
                  stroke='#AEEFD3'
                  strokeMiterlimit='10'
                />
                <path
                  d='M838.798 107.887C786.018 102.245 720.457 121.013 671.244 148.846C653.692 158.806 638.645 170.288 627.314 183.224C616.196 195.98 608.534 209.356 602.775 223.23C596.125 239.295 592.169 256.241 588.456 273.652C586.019 285.291 583.652 298.404 581.23 312.712C573.855 355.633 566.542 406.93 526.3 439.817C505.121 457.251 476.738 467.274 447.997 467.351C404.555 467.507 365.313 446.487 320.231 435.292C293.944 428.792 267.928 425.702 243.551 426.877C222.259 427.838 202.344 432.23 184.131 439.877C146.402 455.697 114.673 474.488 76.5391 488.735C11.456 512.942 -73.3352 520.104 -157.037 512.839C-161.698 512.471 -166.363 512.011 -170.917 511.553C-257.654 503.216 -339.768 487.425 -421.673 499.521C-425.844 500.175 -430.014 500.829 -434.175 501.667C-469.465 508.241 -502.331 521.672 -529.653 542.482C-579.066 580.157 -617.095 627.167 -652.888 674.681'
                  stroke='#9FF4CF'
                  strokeMiterlimit='10'
                />
                <path
                  d='M839.912 118.94C788.822 116.187 724.745 135.807 675.139 162.242C657.453 171.644 642.15 182.381 630.224 194.381C618.514 206.292 610.03 218.635 603.454 231.567C595.755 246.501 590.534 262.404 585.561 278.863C582.212 289.928 579.044 302.467 575.936 316.296C566.281 357.775 558.158 408.298 519.034 441.379C498.414 458.91 470.945 469.499 442.808 470.601C400.322 472.157 360.959 453.169 316.135 442.629C290.09 436.505 264.299 433.422 240.128 434.234C219.042 434.831 199.1 438.578 180.951 445.212C143.024 459.091 110.836 475.106 72.606 487.232C7.4665 507.75 -76.202 512.727 -159.195 506.218C-163.745 505.853 -168.405 505.485 -172.959 505.028C-258.867 497.634 -340.057 484.814 -420.088 498.968C-424.143 499.716 -428.198 500.464 -432.355 501.394C-466.831 508.719 -498.898 522.621 -525.665 543.435C-574.078 581.116 -611.564 627.842 -646.931 674.978'
                  stroke='#80EFBF'
                  strokeMiterlimit='10'
                />
                <path
                  d='M840.92 129.984C791.519 130.117 728.93 150.679 678.923 175.534C661.106 184.47 645.434 194.368 633.022 205.434C620.827 216.412 611.526 227.814 604.017 239.711C595.16 253.513 588.781 268.283 582.551 283.883C578.402 294.376 574.322 306.34 570.414 319.596C558.48 359.633 549.656 409.386 511.651 442.659C491.594 460.379 465.038 471.534 437.497 473.476C395.855 476.428 356.478 459.381 311.915 449.587C286.227 443.934 260.55 440.855 236.467 441.118C215.477 441.349 195.723 444.363 177.533 450.074C139.404 461.922 106.766 475.349 68.5459 485.264C3.46114 502.099 -79.3018 504.979 -161.591 499.134C-166.14 498.769 -170.684 498.496 -175.233 498.131C-260.314 491.679 -340.687 481.918 -418.848 498.036C-422.787 498.878 -426.838 499.718 -430.768 500.744C-464.432 508.818 -495.589 523.194 -521.907 544.1C-569.317 581.878 -606.266 628.228 -641.21 674.894'
                  stroke='#6FF3BA'
                  strokeMiterlimit='10'
                />
                <path
                  d='M842.037 141.022C794.324 144.04 733.218 165.451 682.819 188.911C664.867 197.29 648.94 206.445 635.933 216.575C623.142 226.618 613.13 236.991 604.693 247.947C594.794 260.712 587.146 274.348 579.651 288.906C574.591 298.825 569.711 310.217 565.006 322.992C550.905 361.592 541.16 410.571 504.277 444.129C484.778 461.945 459.251 473.76 432.198 476.631C391.4 480.978 352.013 465.961 307.708 456.822C282.261 451.544 256.808 448.472 232.931 448.372C212.148 448.24 192.476 450.612 174.24 455.31C136.02 465.13 102.817 475.876 64.5018 483.673C-0.634531 496.918 -82.2751 497.616 -163.86 492.434C-168.404 492.161 -172.838 491.89 -177.386 491.525C-261.64 486.015 -341.082 479.404 -417.378 497.393C-421.313 498.327 -425.137 499.263 -429.064 500.381C-461.911 509.296 -492.273 524.049 -517.926 544.961C-564.447 582.742 -600.743 628.811 -635.26 675.099'
                  stroke='#72F2BA'
                  strokeMiterlimit='10'
                />
                <path
                  d='M843.152 152.152C797.126 158.05 737.503 180.311 686.707 202.284C668.731 210.109 652.439 218.518 638.84 227.806C625.455 236.915 614.626 246.349 605.261 256.363C594.315 268 585.292 280.593 576.648 294.204C570.677 303.55 564.993 314.279 559.607 326.667C543.228 363.829 532.783 412.038 496.906 445.787C477.97 463.79 453.352 476.078 426.902 479.971C387.058 485.714 347.55 472.724 303.502 464.238C278.301 459.427 253.068 456.27 229.394 455.715C208.706 455.219 189.117 456.949 170.946 460.636C132.524 468.428 98.9816 476.592 60.5667 482.179C-4.51452 491.747 -85.1391 490.355 -166.132 485.832C-170.565 485.561 -175.108 485.289 -179.537 485.11C-263.069 480.63 -341.585 477.074 -415.908 496.934C-419.727 497.961 -423.542 499.081 -427.247 500.203C-459.282 509.866 -488.846 525.089 -513.944 546.003C-559.463 583.881 -595.221 629.575 -629.312 675.484'
                  stroke='url(#paint0_linear_1180_19631)'
                  strokeMiterlimit='10'
                />
                <path
                  d='M844.266 163.182C799.928 171.959 741.791 195.159 690.599 215.648C672.492 223.008 655.831 230.58 641.748 238.937C627.882 247.206 616.233 255.611 605.936 264.592C593.943 275.102 583.652 286.563 573.753 299.317C566.983 308.092 560.388 318.248 554.202 330.065C535.551 365.88 524.291 413.226 489.641 447.168C471.264 465.266 447.562 478.211 421.712 483.032C382.715 490.261 343.188 479.114 299.401 471.373C274.442 466.937 249.437 463.879 225.965 462.87C205.484 462.011 185.973 463.008 167.867 465.685C129.239 471.36 95.2523 477.033 56.7424 480.506C-8.39366 486.398 -88.002 482.917 -168.181 479.058C-172.609 478.88 -177.041 478.609 -181.469 478.431C-264.174 474.89 -341.764 474.387 -414.22 496.206C-417.924 497.327 -421.624 498.54 -425.324 499.754C-456.543 510.256 -485.313 525.856 -509.856 546.772C-554.376 584.654 -589.593 630.064 -623.258 675.595'
                  stroke='url(#paint1_linear_1180_19631)'
                  strokeMiterlimit='10'
                />
                <path
                  d='M845.279 174.216C802.516 185.867 745.972 209.916 694.499 229.015C676.257 235.819 659.342 242.65 644.664 250.074C630.203 257.411 617.844 264.788 606.62 272.83C593.581 282.214 581.916 292.634 570.869 304.443C563.188 312.646 555.793 322.231 548.812 333.568C527.884 367.947 515.925 414.524 482.285 448.747C464.471 467.033 441.678 480.449 416.426 486.199C378.272 494.819 338.734 485.697 295.203 478.609C270.486 474.549 245.706 471.497 222.44 470.126C202.055 468.904 182.737 469.262 164.586 470.928C125.757 474.579 91.3168 477.58 52.8226 478.942C-12.2574 481.164 -90.8497 475.597 -170.436 472.397C-174.863 472.219 -179.181 472.043 -183.604 471.957C-265.482 469.355 -342.143 471.994 -412.736 495.678C-416.325 496.893 -419.909 498.2 -423.494 499.507C-453.902 510.755 -481.874 526.824 -505.858 547.835C-549.376 585.813 -584.167 630.844 -617.294 676'
                  stroke='url(#paint2_linear_1180_19631)'
                  strokeMiterlimit='10'
                />
                <path
                  d='M846.392 185.34C805.315 199.863 750.256 224.848 698.383 242.373C680.006 248.622 662.837 254.71 647.565 261.202C632.51 267.607 619.334 274.048 607.184 281.152C592.988 289.408 580.172 298.792 567.866 309.653C559.275 317.284 551.08 326.299 543.41 337.067C520.207 370.01 507.438 415.815 474.914 450.228C457.662 468.699 435.78 482.678 411.127 489.355C373.926 499.366 334.263 492.175 290.883 485.829C266.412 482.235 241.851 479.098 218.789 477.275C198.609 475.69 179.26 475.315 161.178 476.065C122.148 477.693 87.2473 477.841 48.6674 477.276C-16.4447 476.288 -93.9312 468.179 -172.814 465.64C-177.13 465.464 -181.553 465.378 -185.865 465.295C-267.027 463.628 -342.759 469.406 -411.379 494.954C-414.853 496.262 -418.433 497.661 -421.902 499.061C-451.388 511.057 -478.563 527.593 -502.103 548.603C-544.729 586.673 -578.873 631.329 -611.574 676.105'
                  stroke='url(#paint3_linear_1180_19631)'
                  strokeMiterlimit='10'
                />
                <path
                  d='M847.458 196.372C808.071 213.86 754.492 239.603 702.23 255.744C683.724 261.531 666.187 266.787 650.431 272.352C634.893 277.829 620.902 283.337 607.822 289.412C592.582 296.545 578.389 304.8 564.83 314.808C555.326 321.777 546.223 330.221 537.873 340.605C512.398 372.115 498.935 417.152 467.53 451.758C450.838 470.325 429.985 484.961 405.821 492.565C369.463 503.969 329.788 498.804 286.665 493.114C262.435 489.897 238.099 486.769 215.132 484.585C195.049 482.64 175.91 481.996 157.766 481.372C118.493 480.066 83.1999 478.837 44.5087 475.799C-20.5635 470.788 -97.1315 460.878 -175.307 459.098C-179.618 459.015 -183.93 458.932 -188.242 458.849C-268.577 458.128 -343.379 467.05 -410.134 494.465C-413.603 495.865 -416.957 497.359 -420.422 498.851C-449.091 511.686 -475.47 528.6 -498.454 549.614C-540.079 587.69 -573.677 632.065 -605.947 676.465'
                  stroke='url(#paint4_linear_1180_19631)'
                  strokeMiterlimit='10'
                />
              </g>
              <defs>
                <linearGradient
                  id='paint0_linear_1180_19631'
                  x1='856.123'
                  y1='428.465'
                  x2='-637.616'
                  y2='498.586'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#47F4B6' />
                  <stop offset='0.245' stopColor='#4CF3B7' />
                  <stop offset='0.53' stopColor='#51EBC3' />
                  <stop offset='0.81' stopColor='#56E4CD' />
                  <stop offset='1' stopColor='#49F0DC' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_1180_19631'
                  x1='856.965'
                  y1='433.947'
                  x2='-631.318'
                  y2='503.747'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#47F4B6' />
                  <stop offset='0.245' stopColor='#4CF3B7' />
                  <stop offset='0.53' stopColor='#51EBC3' />
                  <stop offset='0.81' stopColor='#56E4CD' />
                  <stop offset='1' stopColor='#49F0DC' />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_1180_19631'
                  x1='857.714'
                  y1='439.575'
                  x2='-625.117'
                  y2='509.06'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#47F4B6' />
                  <stop offset='0.245' stopColor='#4CF3B7' />
                  <stop offset='0.53' stopColor='#51EBC3' />
                  <stop offset='0.81' stopColor='#56E4CD' />
                  <stop offset='1' stopColor='#49F0DC' />
                </linearGradient>
                <linearGradient
                  id='paint3_linear_1180_19631'
                  x1='858.552'
                  y1='445.103'
                  x2='-619.15'
                  y2='514.274'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#47F4B6' />
                  <stop offset='0.245' stopColor='#4CF3B7' />
                  <stop offset='0.53' stopColor='#51EBC3' />
                  <stop offset='0.81' stopColor='#56E4CD' />
                  <stop offset='1' stopColor='#49F0DC' />
                </linearGradient>
                <linearGradient
                  id='paint4_linear_1180_19631'
                  x1='859.373'
                  y1='450.635'
                  x2='-613.296'
                  y2='519.65'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#47F4B6' />
                  <stop offset='0.255' stopColor='#4CDEAA' />
                  <stop offset='0.525' stopColor='#43DEB6' />
                  <stop offset='0.775' stopColor='#3CD8BE' />
                  <stop offset='1' stopColor='#42E2CF' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {loadingContent}
          {initial}
          {errorContent}
          {thanks}
        </div>
      </div>
    </section>
  );
};

export default Contact;
