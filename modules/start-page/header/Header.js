'use client';
import classes from './header.module.scss';
import Link from 'next/link';
import LanguageChanger from '@/components/LanguageChanger/LanguageChanger';
import cn from 'classnames';
import { useState, useEffect } from 'react';
import Hamburger from '@/ui/start-page/hamburger/Hamburger';
import { usePathname } from 'next/navigation';
import AsideModal from '../aside-modal/AsideModal';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [active, setActive] = useState(false);
  const [asideModalActive, setAsideModalActive] = useState(false);
  const path = usePathname().includes('stub');
  const { t } = useTranslation('start');

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

  return (
    <header className={classes.header}>
      <div className='container'>
        <div
          style={{ height: active ? '40px' : 'initial' }}
          className={classes.wrapper}
        >
          <div className={classes.logoNav}>
            <Link title='Logo' className={classes.logo} href='/'>
              <svg
                className={classes.logoMobile}
                width='58'
                height='22'
                viewBox='0 0 58 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.456 14.992C8.64533 15.792 7.45067 16.192 5.872 16.192C4.29333 16.192 3.09333 15.792 2.272 14.992C1.46133 14.1813 1.056 13.0987 1.056 11.744V5.328H3.36V11.664C3.36 12.432 3.57867 13.0453 4.016 13.504C4.45333 13.952 5.072 14.176 5.872 14.176C6.672 14.176 7.28533 13.952 7.712 13.504C8.14933 13.0453 8.368 12.432 8.368 11.664V5.328H10.688V11.728C10.688 13.104 10.2773 14.192 9.456 14.992ZM18.6304 16H15.7824L11.6544 5.328H14.2464L17.2064 13.536L20.1504 5.328H22.7424L18.6304 16ZM25.9999 16H23.7279V5.328H25.9999V16Z'
                  fill='#232B50'
                />
                <path
                  d='M32.8705 16H30.5825V7.328H27.4625V5.328H35.9745V7.328H32.8705V16ZM44.983 16H37.431V5.328H44.983V7.328H39.703V9.584H44.871V11.584H39.703V14H44.983V16ZM56.3111 16H54.1191L49.0311 9.04V16H46.7591V5.328H49.0951L54.0391 12.032V5.328H56.3111V16Z'
                  fill='url(#paint0_linear_608_332)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_608_332'
                    x1='0'
                    y1='11'
                    x2='58'
                    y2='11'
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
              <svg
                className={classes.logoDesktop}
                width='101'
                height='40'
                viewBox='0 0 101 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.548 26.736C15.1293 28.136 13.0387 28.836 10.276 28.836C7.51333 28.836 5.41333 28.136 3.976 26.736C2.55733 25.3173 1.848 23.4227 1.848 21.052V9.824H5.88V20.912C5.88 22.256 6.26267 23.3293 7.028 24.132C7.79333 24.916 8.876 25.308 10.276 25.308C11.676 25.308 12.7493 24.916 13.496 24.132C14.2613 23.3293 14.644 22.256 14.644 20.912V9.824H18.704V21.024C18.704 23.432 17.9853 25.336 16.548 26.736ZM32.6032 28.5H27.6192L20.3952 9.824H24.9312L30.1112 24.188L35.2632 9.824H39.7992L32.6032 28.5ZM45.4998 28.5H41.5238V9.824H45.4998V28.5Z'
                  fill='#232B50'
                />
                <path
                  d='M57.5234 28.5H53.5194V13.324H48.0594V9.824H62.9554V13.324H57.5234V28.5ZM78.7203 28.5H65.5042V9.824H78.7203V13.324H69.4803V17.272H78.5243V20.772H69.4803V25H78.7203V28.5ZM98.5445 28.5H94.7085L85.8045 16.32V28.5H81.8285V9.824H85.9165L94.5685 21.556V9.824H98.5445V28.5Z'
                  fill='url(#paint0_linear_621_471)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_621_471'
                    x1='0'
                    y1='20'
                    x2='101'
                    y2='20'
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
            </Link>

            <nav className={cn(classes.nav, { [classes.activeNav]: active })}>
              <svg
                className={classes.lines}
                width='360'
                height='537'
                viewBox='0 0 360 537'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g opacity='0.7'>
                  <path
                    d='M447.202 -92.2372C385.927 -130.72 295.416 -107.857 259.309 -44.9986C238.962 -9.546 235.519 32.9584 233.552 73.9056C230.781 131.82 228.078 214.356 171.44 247.395C149.195 260.354 121.34 263.03 97.0521 254.455C60.3245 241.502 35.8273 206.315 1.99738 187.106C-35.658 165.684 -76.4052 164.626 -112.135 188.255C-146.182 210.718 -174.872 240.469 -209.491 262.036C-268.755 298.957 -343.893 308.047 -410.668 288.296C-487.94 265.367 -555.937 216.337 -638.205 209.983C-670.053 207.465 -701.645 213.758 -729.355 230.061C-779.423 259.483 -820.746 301.292 -859.927 344.155'
                    stroke='#F2F2F2'
                    strokeMiterlimit='10'
                  />
                  <path
                    opacity='0.7'
                    d='M446.151 -81.8975C401.843 -107.322 341.883 -101.387 298.374 -73.1702C282.84 -63.0024 269.356 -50.0054 259.631 -34.3572C249.932 -18.8839 243.733 -1.96358 239.47 15.62C234.509 36.0468 232.262 57.2596 230.401 78.2648C229.096 92.109 227.898 107.581 225.842 123.454C219.774 171.001 207.13 222.79 165.521 247.817C143.683 261.018 116.454 264.24 92.4657 256.608C56.2312 245.075 31.2691 211.785 -2.56705 193.203C-22.5853 182.17 -43.4263 176.556 -63.7728 177.016C-81.5452 177.434 -99.1295 182.446 -115.615 192.464C-149.369 213.002 -178.033 240.25 -212.333 259.718C-270.993 293.241 -344.86 300.383 -411.295 281.312C-415.034 280.275 -418.672 279.164 -422.384 277.952C-491.128 256.011 -553.54 217.44 -625.763 210.254C-629.422 209.856 -633.107 209.632 -636.792 209.409C-668.154 207.773 -699.193 214.511 -726.471 230.88C-775.846 260.409 -816.697 302.022 -855.392 344.601'
                    stroke='#DFE8E4'
                    strokeMiterlimit='10'
                  />
                  <path
                    opacity='0.7'
                    d='M445.185 -71.5459C401.677 -94.0689 342.722 -87.1715 299.252 -60.3817C283.712 -50.7525 270.161 -38.4828 260.124 -23.6903C250.212 -9.14629 243.454 6.79002 238.731 23.3158C233.152 42.5699 230.1 62.6702 227.42 82.6503C225.59 95.8739 223.78 110.711 221.271 126.065C213.673 172.026 200.53 223.017 159.748 248.441C138.329 261.797 111.698 265.739 88.0103 259.05C52.1823 248.924 26.8419 217.544 -6.91395 199.602C-26.8122 188.946 -47.3936 183.373 -67.6735 183.396C-85.3062 183.478 -102.625 187.905 -118.963 196.961C-152.426 215.575 -181.05 240.232 -214.972 257.79C-273.013 287.829 -345.71 293.096 -411.632 274.733C-415.284 273.71 -419.009 272.585 -422.648 271.474C-491.018 250.578 -553.262 214.988 -624.28 209.781C-627.866 209.484 -631.477 209.361 -635.175 209.226C-666.038 208.384 -696.538 215.654 -723.383 232.09C-771.993 261.828 -812.357 303.156 -850.652 345.438'
                    stroke='#D5EFE3'
                    strokeMiterlimit='10'
                  />
                  <path
                    opacity='0.7'
                    d='M444.206 -61.1028C401.483 -80.6375 343.534 -72.777 300.018 -47.4282C284.471 -38.3376 270.854 -26.795 260.517 -12.9455C250.292 0.742908 243.175 15.5477 237.807 31.0759C231.608 49.1575 227.765 68.0579 224.254 87.1003C221.897 99.7033 219.489 113.819 216.441 128.64C207.313 173.014 193.771 223.134 153.814 248.955C132.802 262.552 106.784 267.128 83.3954 261.381C47.974 252.661 22.2685 223.105 -11.4204 205.89C-31.2119 195.699 -51.6069 190.066 -71.6606 189.766C-89.067 189.526 -106.206 193.354 -122.399 201.448C-155.668 218.213 -184.167 240.293 -217.77 255.752C-275.106 282.321 -346.633 285.713 -412.215 268.031C-415.866 267.008 -419.518 265.984 -423.17 264.961C-491.068 245.034 -553.157 212.512 -623.056 209.271C-626.581 209.163 -630.193 209.04 -633.732 209.019C-664.108 209.06 -694.056 216.773 -720.468 233.277C-768.299 263.135 -808.19 304.267 -846.086 346.251'
                    stroke='#CEECDF'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M443.237 -50.7539C401.315 -67.3879 344.371 -58.5645 300.795 -34.5691C285.241 -26.0171 271.471 -15.2153 260.921 -2.29501C250.397 10.4505 242.893 24.2988 236.966 38.8431C230.063 55.7387 225.5 73.5404 221.171 91.5578C218.289 103.54 215.182 117.008 211.682 131.309C201.024 174.097 187.07 223.434 147.865 249.55C127.272 263.302 101.866 268.511 78.7649 263.793C43.8365 256.494 17.6529 228.921 -15.9424 212.259C-35.6272 202.533 -55.8491 196.927 -75.6633 196.217C-92.9301 195.641 -109.79 198.798 -125.763 206.031C-158.74 220.872 -187.213 240.449 -220.41 253.824C-277.129 276.909 -347.398 278.441 -412.554 261.453C-416.219 260.517 -419.784 259.507 -423.436 258.483C-490.86 239.527 -552.782 209.985 -621.576 208.797C-625.114 208.776 -628.566 208.768 -632.118 208.835C-661.995 209.669 -691.316 217.929 -717.396 234.573C-764.461 264.639 -803.866 305.488 -841.362 347.174'
                    stroke='#BAECD6'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M442.188 -40.4176C400.978 -54.165 345.126 -44.3653 301.504 -21.8105C285.93 -13.7096 272.107 -3.72222 261.257 8.25527C250.52 20.0716 242.458 32.9361 236.071 46.4229C228.562 62.0587 223.195 78.7483 217.947 95.8146C214.453 107.163 210.907 120.024 206.869 133.792C194.841 175.108 180.228 223.533 141.848 250.046C121.661 264.04 96.9546 269.895 74.0798 266.018C39.5447 260.213 13.0094 234.376 -20.5189 218.44C-40.0837 209.091 -60.1325 203.513 -79.7072 202.394C-96.7345 201.408 -113.428 204.053 -129.255 210.325C-162.026 223.228 -190.36 240.142 -223.265 251.594C-279.353 271.108 -348.465 270.854 -413.194 254.56C-416.772 253.637 -420.351 252.715 -424.016 251.779C-490.967 233.792 -552.734 207.318 -620.422 208.183C-623.888 208.263 -627.353 208.342 -630.745 208.523C-660.122 210.152 -688.905 218.943 -714.551 235.654C-760.924 265.828 -799.77 306.493 -836.866 347.882'
                    stroke='#AEEFD3'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M441.216 -29.9784C400.806 -40.8259 345.946 -29.9764 302.277 -8.86232C286.696 -1.29994 272.806 7.96051 261.57 18.9816C250.534 29.8553 242.099 41.676 235.067 54.1654C226.939 68.629 220.766 84.2064 214.701 100.248C210.681 110.976 206.45 123.102 201.959 136.35C188.401 176.081 173.376 223.721 135.835 250.544C116.054 264.78 91.9595 271.267 69.3846 268.333C35.2561 263.933 8.2561 239.992 -25.1054 224.709C-44.5634 215.825 -64.4259 210.187 -83.7745 208.745C-100.662 207.423 -117.089 209.484 -132.77 214.794C-165.25 225.774 -193.557 240.186 -226.07 249.64C-281.54 265.672 -349.396 263.557 -413.784 247.943C-417.376 247.108 -420.955 246.185 -424.447 245.277C-491.025 228.333 -552.624 204.839 -619.107 207.682C-622.499 207.863 -625.89 208.043 -629.309 208.399C-658.2 210.909 -686.43 220.144 -711.644 236.923C-757.251 267.304 -795.611 307.685 -832.308 348.776'
                    stroke='#9FF4CF'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M440.249 -19.6309C400.638 -27.5786 346.784 -15.7662 303.055 3.99503C287.468 11.0191 273.511 19.5527 261.976 29.6313C250.627 39.6497 241.732 50.4132 234.228 61.9328C225.481 75.2244 218.504 89.6897 211.62 104.707C206.988 114.801 202.231 126.306 197.288 139.035C182.2 177.18 166.676 224.023 129.974 251.155C110.612 265.546 87.1307 272.666 64.8423 270.761C31.2069 267.781 3.74214 245.736 -29.5391 231.093C-48.8772 222.586 -68.5665 216.975 -87.689 215.211C-104.35 213.567 -120.685 215.016 -136.133 219.379C-168.42 228.51 -196.589 240.259 -228.796 247.703C-283.649 260.252 -350.234 256.19 -414.209 241.358C-417.715 240.536 -421.307 239.701 -424.799 238.793C-490.903 222.819 -552.321 202.217 -617.712 207.2C-621.03 207.482 -624.349 207.764 -627.781 208.206C-656.173 211.511 -683.863 221.278 -708.644 238.123C-753.473 268.625 -791.36 308.81 -827.657 349.603'
                    stroke='#80EFBF'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M439.199 -9.29727C400.388 -14.3456 347.525 -1.48345 303.763 16.7502C288.156 23.3233 274.06 31.0291 262.311 40.1788C250.749 49.2684 241.382 59.0621 233.333 69.5108C223.88 81.6168 216.197 94.8965 208.482 108.976C203.325 118.45 197.955 129.321 192.487 141.43C175.869 177.989 159.933 224.049 124.07 251.49C105.114 266.122 82.2448 273.876 60.2696 272.825C27.0408 271.251 -0.788871 251.028 -34.0031 237.112C-53.148 229.082 -72.7508 223.486 -91.7069 221.211C-108.229 219.231 -124.284 220.009 -139.599 223.497C-171.681 230.692 -199.737 239.952 -231.539 245.313C-285.688 254.394 -351.189 248.445 -414.738 234.306C-418.243 233.485 -421.762 232.751 -425.267 231.93C-490.899 216.926 -552.235 199.29 -616.52 206.325C-619.765 206.707 -623.098 207.076 -626.37 207.633C-654.262 211.732 -681.327 222.044 -705.775 239.03C-749.838 269.74 -787.239 309.641 -823.123 350.049'
                    stroke='#6FF3BA'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M438.236 1.05013C400.225 -1.09925 348.367 12.7253 304.545 29.6063C288.932 35.6411 274.768 42.6202 262.721 50.8275C250.859 58.9747 241.119 67.725 232.511 77.1904C222.426 88.2119 213.951 100.292 205.431 113.26C199.662 122.1 193.767 132.351 187.759 143.927C169.698 178.914 153.177 224.163 118.139 252.001C99.6027 266.788 77.4191 275.275 55.6573 275.152C22.8351 274.984 -5.37279 256.67 -38.5067 243.393C-57.5317 235.741 -76.9613 230.171 -95.6914 227.575C-111.987 225.273 -127.863 225.452 -143.032 227.979C-174.821 233.251 -202.838 239.923 -234.336 243.274C-287.879 248.961 -352.111 241.066 -415.234 227.62C-418.752 226.887 -422.184 226.166 -425.69 225.345C-490.848 211.31 -552.029 196.74 -615.196 205.74C-618.454 206.21 -621.627 206.693 -624.912 207.338C-652.318 212.317 -678.83 223.073 -702.759 240.14C-746.13 270.957 -782.971 310.675 -818.456 350.786'
                    stroke='#72F2BA'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M437.264 11.4819C400.053 12.231 349.201 27.0175 305.332 42.4584C289.798 47.9686 275.482 54.2074 263.121 61.5597C250.96 68.7646 240.748 76.5452 231.58 85.0273C220.876 94.8771 211.51 105.832 202.258 117.789C195.876 125.995 189.469 135.539 182.996 146.682C163.405 180.084 146.471 224.55 112.186 252.683C94.0555 267.712 72.4975 276.744 51.0223 277.649C18.6932 278.9 -9.97922 262.482 -43.0328 249.844C-61.951 242.656 -81.1943 237.027 -99.685 234.02C-115.841 231.383 -131.537 230.964 -146.474 232.543C-178.058 235.879 -205.876 240.078 -237.055 241.331C-289.895 243.551 -352.955 233.782 -415.738 221.017C-419.171 220.297 -422.689 219.563 -426.135 218.93C-490.919 205.938 -551.933 194.346 -613.894 205.323C-617.079 205.894 -620.278 206.552 -623.39 207.224C-650.297 212.997 -676.27 224.284 -699.766 241.418C-742.371 272.443 -778.727 311.877 -813.812 351.69'
                    stroke='url(#paint0_linear_536_9803)'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M436.296 21.8269C399.884 25.4743 350.024 41.3103 306.109 55.3114C290.555 60.3707 276.098 65.782 263.525 72.2057C251.137 78.5694 240.466 85.2931 230.752 92.7047C219.43 101.383 209.272 111.139 199.188 122.159C192.281 129.745 185.262 138.655 178.263 149.178C157.129 181.082 139.71 224.663 106.349 253.118C88.6385 268.302 67.6797 278.053 46.5045 279.901C14.5688 282.644 -14.4552 267.959 -47.4418 256.048C-66.24 249.237 -85.3236 243.723 -103.575 240.307C-119.505 237.347 -135.008 236.243 -149.713 236.875C-181.077 238.189 -208.797 239.987 -239.67 239.231C-291.893 237.97 -353.783 226.329 -416.053 214.271C-419.499 213.638 -422.931 212.918 -426.376 212.285C-490.688 200.262 -551.533 191.648 -612.388 204.677C-615.501 205.349 -618.626 206.108 -621.752 206.867C-648.172 213.521 -673.593 225.252 -696.656 242.453C-738.482 273.598 -774.365 312.835 -809.051 352.351'
                    stroke='url(#paint1_linear_536_9803)'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M435.249 32.1626C399.551 38.6945 350.782 55.5062 306.893 68.1688C291.333 72.69 276.81 77.3749 263.937 82.8565C251.25 88.2781 240.205 93.9588 229.933 100.387C217.992 107.894 206.942 116.525 196.126 126.535C188.607 133.487 181.063 141.777 173.526 151.767C150.861 182.086 133.03 224.883 100.408 253.722C83.1037 269.147 62.7706 279.443 41.8953 282.232C10.3662 286.381 -19.0359 273.605 -51.9422 262.333C-70.6204 255.899 -89.5309 250.412 -107.556 246.675C-123.346 243.379 -138.584 241.691 -153.143 241.362C-184.301 240.74 -211.896 239.965 -242.377 237.214C-293.896 232.486 -354.616 218.973 -416.546 207.595C-419.992 206.962 -423.351 206.343 -426.809 205.797C-490.648 194.744 -551.338 189.195 -611.075 204.188C-614.114 204.96 -617.166 205.82 -620.218 206.68C-646.139 214.128 -671.021 226.391 -693.665 243.746C-734.725 275.099 -770.209 314.038 -804.408 353.27'
                    stroke='url(#paint2_linear_536_9803)'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M434.276 42.5959C399.378 52.0251 351.601 69.8856 307.679 81.0212C292.112 85.0042 277.522 88.9626 264.349 93.5022C251.363 97.9817 239.846 102.693 229.015 108.139C216.368 114.46 204.6 121.993 192.966 130.979C184.835 137.297 176.765 144.967 168.788 154.35C144.593 183.084 126.264 225.084 94.481 254.231C77.5824 269.898 57.8617 280.827 37.2864 284.556C6.25044 290.123 -23.6028 279.155 -56.5285 268.596C-75.0999 262.626 -93.8241 257.079 -111.61 252.932C-127.174 249.314 -142.305 246.928 -156.645 245.739C-187.598 243.181 -215.04 239.658 -245.243 235.072C-296.211 227.301 -355.608 211.493 -417.112 200.808C-420.471 200.189 -423.929 199.643 -427.302 199.111C-490.753 189.013 -551.289 186.529 -609.82 203.498C-612.786 204.372 -615.851 205.319 -618.83 206.28C-644.165 214.535 -668.507 227.328 -690.805 244.736C-731.187 276.282 -766.098 314.951 -799.898 353.885'
                    stroke='url(#paint3_linear_536_9803)'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M433.313 52.9437C399.201 65.3572 352.443 84.0919 308.461 93.8754C292.874 97.4077 278.144 100.539 264.758 104.15C251.559 107.701 239.57 111.444 228.193 115.819C214.927 120.969 202.281 127.29 189.815 135.339C181.085 140.936 172.403 147.972 163.961 156.924C138.236 184.073 119.495 225.289 88.5505 254.745C72.0713 270.565 53.0363 282.227 32.6744 286.884C2.04517 293.856 -28.1861 284.795 -61.0315 274.875C-79.4829 269.282 -98.034 263.763 -115.68 259.281C-131.105 255.327 -146.023 252.706 -160.164 250.207C-190.779 244.842 -218.281 239.967 -248.126 233.024C-298.337 221.438 -356.691 204.007 -417.781 194.102C-421.153 193.57 -424.525 193.038 -427.897 192.506C-490.876 183.377 -551.257 183.957 -608.669 202.889C-611.648 203.85 -614.553 204.911 -617.546 205.96C-642.395 215.095 -666.184 228.332 -688.049 245.807C-727.652 277.473 -762.09 315.945 -795.49 354.581'
                    stroke='url(#paint4_linear_536_9803)'
                    strokeMiterlimit='10'
                  />
                </g>
                <defs>
                  <linearGradient
                    id='paint0_linear_536_9803'
                    x1='397.409'
                    y1='273.971'
                    x2='-774.984'
                    y2='95.9629'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#47F4B6' />
                    <stop offset='0.245' stopColor='#4CF3B7' />
                    <stop offset='0.53' stopColor='#51EBC3' />
                    <stop offset='0.81' stopColor='#56E4CD' />
                    <stop offset='1' stopColor='#49F0DC' />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_536_9803'
                    x1='397.226'
                    y1='279.146'
                    x2='-771.004'
                    y2='101.769'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#47F4B6' />
                    <stop offset='0.245' stopColor='#4CF3B7' />
                    <stop offset='0.53' stopColor='#51EBC3' />
                    <stop offset='0.81' stopColor='#56E4CD' />
                    <stop offset='1' stopColor='#49F0DC' />
                  </linearGradient>
                  <linearGradient
                    id='paint2_linear_536_9803'
                    x1='396.945'
                    y1='284.443'
                    x2='-767.123'
                    y2='107.701'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#47F4B6' />
                    <stop offset='0.245' stopColor='#4CF3B7' />
                    <stop offset='0.53' stopColor='#51EBC3' />
                    <stop offset='0.81' stopColor='#56E4CD' />
                    <stop offset='1' stopColor='#49F0DC' />
                  </linearGradient>
                  <linearGradient
                    id='paint3_linear_536_9803'
                    x1='396.763'
                    y1='289.661'
                    x2='-763.4'
                    y2='113.509'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#47F4B6' />
                    <stop offset='0.245' stopColor='#4CF3B7' />
                    <stop offset='0.53' stopColor='#51EBC3' />
                    <stop offset='0.81' stopColor='#56E4CD' />
                    <stop offset='1' stopColor='#49F0DC' />
                  </linearGradient>
                  <linearGradient
                    id='paint4_linear_536_9803'
                    x1='396.578'
                    y1='294.882'
                    x2='-759.768'
                    y2='119.309'
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
              <ul className={classes.list}>
                <li className={classes.li}>
                  <a
                    onClick={() => setActive(false)}
                    className={classes.link}
                    href='#services'
                  >
                    {t('servicesHeader')}
                  </a>
                </li>
                <li className={classes.li}>
                  <a
                    onClick={() => setActive(false)}
                    className={classes.link}
                    href='#projects'
                  >
                      {t('projects')}
                  </a>
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
                  <a title='Linkedin' target='__blank' className={classes.socialLink} href='https://www.linkedin.com/company/uviten/'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M12 9.55C12.917 8.613 14.111 8 15.5 8C16.9587 8 18.3576 8.57946 19.3891 9.61091C20.4205 10.6424 21 12.0413 21 13.5V21H19V13.5C19 12.5717 18.6313 11.6815 17.9749 11.0251C17.3185 10.3687 16.4283 10 15.5 10C14.5717 10 13.6815 10.3687 13.0251 11.0251C12.3687 11.6815 12 12.5717 12 13.5V21H10V8.5H12V9.55ZM5 6.5C4.60218 6.5 4.22064 6.34196 3.93934 6.06066C3.65804 5.77936 3.5 5.39782 3.5 5C3.5 4.60218 3.65804 4.22064 3.93934 3.93934C4.22064 3.65804 4.60218 3.5 5 3.5C5.39782 3.5 5.77936 3.65804 6.06066 3.93934C6.34196 4.22064 6.5 4.60218 6.5 5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5ZM4 8.5H6V21H4V8.5Z'
                        fill='#232B50'
                      />
                    </svg>
                  </a>
                  <a title='Behance' href='https://www.behance.net/uviten' target='__blank' className={classes.socialLink}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='17'
                      height='17'
                      viewBox='0 0 17 17'
                      fill='none'
                    >
                      <g clipPath='url(#clip0_1435_1189)'>
                        <path
                          d='M8.02915 8.6179C8.40473 8.32124 8.67933 7.9136 8.81468 7.4518C8.95004 6.98999 8.9394 6.49703 8.78425 6.04163C8.6291 5.58622 8.33717 5.19106 7.94916 4.91122C7.56114 4.63138 7.09636 4.4808 6.6196 4.48047H2.92869C2.82743 4.48047 2.73031 4.52111 2.65871 4.59344C2.5871 4.66578 2.54688 4.76389 2.54688 4.86618V13.0948C2.54688 13.1971 2.5871 13.2952 2.65871 13.3675C2.73031 13.4398 2.82743 13.4805 2.92869 13.4805H6.87415C7.44585 13.4803 8.00085 13.2858 8.44975 12.9281C8.89865 12.5705 9.2153 12.0706 9.3487 11.509C9.48209 10.9474 9.42446 10.3568 9.18508 9.83236C8.94571 9.30789 8.53853 8.8801 8.02915 8.6179ZM3.31051 5.2519H6.6196C7.02466 5.2519 7.41313 5.41445 7.69955 5.70379C7.98597 5.99313 8.14687 6.38556 8.14687 6.79475C8.14687 7.20395 7.98597 7.59638 7.69955 7.88572C7.41313 8.17506 7.02466 8.33761 6.6196 8.33761H3.31051V5.2519ZM6.87415 12.709H3.31051V9.10904H6.87415C7.34671 9.10904 7.79993 9.29868 8.13408 9.63625C8.46824 9.97381 8.65597 10.4317 8.65597 10.909C8.65597 11.3864 8.46824 11.8443 8.13408 12.1818C7.79993 12.5194 7.34671 12.709 6.87415 12.709ZM11.2014 5.89475C11.2014 5.79246 11.2416 5.69435 11.3133 5.62201C11.3849 5.54968 11.482 5.50904 11.5832 5.50904H15.656C15.7572 5.50904 15.8543 5.54968 15.926 5.62201C15.9976 5.69435 16.0378 5.79246 16.0378 5.89475C16.0378 5.99705 15.9976 6.09516 15.926 6.1675C15.8543 6.23983 15.7572 6.28047 15.656 6.28047H11.5832C11.482 6.28047 11.3849 6.23983 11.3133 6.1675C11.2416 6.09516 11.2014 5.99705 11.2014 5.89475ZM13.6196 7.56618C13.1207 7.56627 12.6301 7.69517 12.1943 7.94065C11.7586 8.18613 11.3922 8.54005 11.1299 8.9688C10.8676 9.39755 10.7182 9.88691 10.6958 10.3904C10.6733 10.8939 10.7787 11.3948 11.0018 11.8457C11.2249 12.2965 11.5583 12.6822 11.9705 12.9662C12.3826 13.2502 12.8598 13.4231 13.3567 13.4685C13.8536 13.5138 14.3537 13.4301 14.8096 13.2253C15.2655 13.0205 15.662 12.7014 15.9614 12.2983C16.0223 12.2164 16.0484 12.1135 16.0342 12.0122C16.0199 11.9109 15.9664 11.8194 15.8854 11.7579C15.8044 11.6965 15.7025 11.67 15.6022 11.6844C15.5019 11.6988 15.4114 11.7529 15.3505 11.8348C15.0977 12.1754 14.7519 12.434 14.3556 12.5789C13.9593 12.7237 13.5298 12.7485 13.1198 12.6502C12.7097 12.5519 12.337 12.3347 12.0474 12.0254C11.7579 11.7161 11.564 11.3281 11.4897 10.909H16.1651C16.2663 10.909 16.3634 10.8684 16.435 10.7961C16.5066 10.7237 16.5469 10.6256 16.5469 10.5233C16.5459 9.73936 16.2371 8.98779 15.6884 8.43344C15.1396 7.87909 14.3957 7.5672 13.6196 7.56618ZM11.4897 10.1376C11.579 9.63259 11.8413 9.1754 12.2307 8.84609C12.6201 8.51677 13.1118 8.33632 13.6196 8.33632C14.1274 8.33632 14.6191 8.51677 15.0085 8.84609C15.3979 9.1754 15.6602 9.63259 15.7495 10.1376H11.4897Z'
                          fill='#232B50'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_1435_1189'>
                          <rect
                            width='16'
                            height='16'
                            fill='white'
                            transform='translate(0.921875 0.855469)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a title='Facebook' target='__blank' className={classes.socialLink} href='https://www.facebook.com/uviten'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.989 5.298C13.6933 5.45251 13.4521 5.69405 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z'
                        fill='#232B50'
                      />
                    </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13.8259 17.8238L18.5429 13.1068C19.1519 12.4968 19.1529 11.5028 18.5429 10.8928L13.8249 6.17578L13.1179 6.88278L17.7349 11.4998H5.00088V12.4998H17.7359L13.1179 17.1168L13.8259 17.8238Z" fill="#232B50"/>
              </svg>
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
