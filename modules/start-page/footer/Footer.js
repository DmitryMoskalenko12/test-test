'use client';
import Link from 'next/link';
import classes from './footer.module.scss';
import initTranslations from '@/app/i18n';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';

const Footer =  ({locale}) => {
  const route = useRouter();
  const {t} = useTranslation('start');
  const [scroll, setScroll] = useState(true);
  const [scrollServices, setScrollServices] = useState(true);
  const refProjects = useRef();
  const refServices = useRef();

  const cancelReloadProjects = () => {
    if (scroll) {
      route.push('/')
       setTimeout(() => {
        refProjects.current.click();
      }, 600);
    }
  }

  const cancelReloadServices = () => {
    if (scrollServices) {
      route.push('/')
       setTimeout(() => {
        refServices.current.click();
      }, 600);
    }
  }

  return (
    <footer className={`${classes.footer} footer`}>
      <div className='container'>
        <div className={classes.wrapper}>
          <div className={classes.contentWrapper}>
            <div className={classes.logoRights}>
              <Link className={classes.logoWrapper} href='/'>
                <svg
                  className={classes.logoMobile}
                  width='56'
                  height='12'
                  viewBox='0 0 56 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.456 9.992C7.64533 10.792 6.45067 11.192 4.872 11.192C3.29333 11.192 2.09333 10.792 1.272 9.992C0.461333 9.18133 0.056 8.09867 0.056 6.744V0.327999H2.36V6.664C2.36 7.432 2.57867 8.04533 3.016 8.504C3.45333 8.952 4.072 9.176 4.872 9.176C5.672 9.176 6.28533 8.952 6.712 8.504C7.14933 8.04533 7.368 7.432 7.368 6.664V0.327999H9.688V6.728C9.688 8.104 9.27733 9.192 8.456 9.992ZM17.6304 11H14.7824L10.6544 0.327999H13.2464L16.2064 8.536L19.1504 0.327999H21.7424L17.6304 11ZM24.9999 11H22.7279V0.327999H24.9999V11Z'
                    fill='#232B50'
                  />
                  <path
                    d='M31.8705 11H29.5825V2.328H26.4625V0.327999H34.9745V2.328H31.8705V11ZM43.983 11H36.431V0.327999H43.983V2.328H38.703V4.584H43.871V6.584H38.703V9H43.983V11ZM55.3111 11H53.1191L48.0311 4.04V11H45.7591V0.327999H48.0951L53.0391 7.032V0.327999H55.3111V11Z'
                    fill='#FDFFFE'
                  />
                </svg>
                <svg
                  className={classes.logoDesktop}
                  width='98'
                  height='20'
                  viewBox='0 0 98 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.548 17.236C14.1293 18.636 12.0387 19.336 9.276 19.336C6.51333 19.336 4.41333 18.636 2.976 17.236C1.55733 15.8173 0.848 13.9227 0.848 11.552V0.323998H4.88V11.412C4.88 12.756 5.26267 13.8293 6.028 14.632C6.79333 15.416 7.876 15.808 9.276 15.808C10.676 15.808 11.7493 15.416 12.496 14.632C13.2613 13.8293 13.644 12.756 13.644 11.412V0.323998H17.704V11.524C17.704 13.932 16.9853 15.836 15.548 17.236ZM31.6032 19H26.6192L19.3952 0.323998H23.9312L29.1112 14.688L34.2632 0.323998H38.7992L31.6032 19ZM44.4998 19H40.5238V0.323998H44.4998V19Z'
                    fill='#232B50'
                  />
                  <path
                    d='M56.5234 19H52.5194V3.824H47.0594V0.323998H61.9554V3.824H56.5234V19ZM77.7203 19H64.5042V0.323998H77.7203V3.824H68.4803V7.772H77.5243V11.272H68.4803V15.5H77.7203V19ZM97.5445 19H93.7085L84.8045 6.82V19H80.8285V0.323998H84.9165L93.5685 12.056V0.323998H97.5445V19Z'
                    fill='#FDFFFE'
                  />
                </svg>
              </Link>
              <div className={classes.reserved}>
                © 2024 UVITEN, All rights reserved
              </div>
            </div>

            <nav className={classes.nav}>
              <ul className={classes.list}>
                <li className={classes.li}>
                  <a ref={refServices} className={classes.link} onClick={() => {setScrollServices((prev) => !prev); cancelReloadServices()}} href='#services'>
                    {t('servicesHeader')}
                  </a>
                </li>
                <li className={classes.li}>
                  <a ref={refProjects} className={classes.link} onClick={() => {setScroll((prev) => !prev); cancelReloadProjects()}} href='#projects'>
                    {t('projects')}
                  </a>
                </li>
                <li className={classes.li}>
                  <Link className={classes.link} href='/stub/'>
                    {t('about')}
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link className={classes.link} href='/stub/'>
                    {t('we-hire')}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={classes.socialBlock}>
              <div className={classes.contactsBlock}>
                <a className={classes.email} href='mailto:office@uviten.com'>
                  <span className={classes.circleEmail}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='17'
                      height='17'
                      viewBox='0 0 17 17'
                      fill='none'
                    >
                      <path
                        d='M4.25781 4.1875H12.9245C13.4549 4.1875 13.9636 4.39821 14.3387 4.77329C14.7138 5.14836 14.9245 5.65707 14.9245 6.1875V12.1875C14.9245 12.7179 14.7138 13.2266 14.3387 13.6017C13.9636 13.9768 13.4549 14.1875 12.9245 14.1875H4.25781C3.72738 14.1875 3.21867 13.9768 2.8436 13.6017C2.46853 13.2266 2.25781 12.7179 2.25781 12.1875V6.1875C2.25781 5.65707 2.46853 5.14836 2.8436 4.77329C3.21867 4.39821 3.72738 4.1875 4.25781 4.1875ZM4.25781 4.85417C3.92448 4.85417 3.63115 4.9675 3.40448 5.1675L8.59115 8.52083L13.7778 5.1675C13.5511 4.9675 13.2578 4.85417 12.9245 4.85417H4.25781ZM8.59115 9.3275L3.01115 5.7075C2.95781 5.85417 2.92448 6.02083 2.92448 6.1875V12.1875C2.92448 12.5411 3.06495 12.8803 3.315 13.1303C3.56505 13.3804 3.90419 13.5208 4.25781 13.5208H12.9245C13.2781 13.5208 13.6172 13.3804 13.8673 13.1303C14.1173 12.8803 14.2578 12.5411 14.2578 12.1875V6.1875C14.2578 6.02083 14.2245 5.85417 14.1711 5.7075L8.59115 9.3275Z'
                        fill='#232B50'
                      />
                    </svg>
                  </span>
                  office@uviten.com
                </a>
                <a className={classes.phone} href='tel:380633784500'>
                  <span className={classes.circlePhone}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='17'
                      height='17'
                      viewBox='0 0 17 17'
                      fill='none'
                    >
                      <path
                        d='M14.4074 11.0778L11.515 9.7816C11.384 9.72545 11.241 9.70288 11.099 9.71592C10.957 9.72896 10.8206 9.77721 10.7019 9.8563C10.6899 9.86406 10.6785 9.87265 10.6677 9.88202L9.15597 11.1678C9.14029 11.1763 9.12283 11.1811 9.10497 11.1818C9.08712 11.1824 9.06936 11.1789 9.05311 11.1715C8.08144 10.7025 7.07488 9.70201 6.60405 8.74381C6.59621 8.7278 6.59213 8.71021 6.59213 8.69238C6.59213 8.67455 6.59621 8.65696 6.60405 8.64095L7.89409 7.11028C7.90336 7.09897 7.91195 7.08711 7.91981 7.07477C7.9978 6.95569 8.04491 6.81906 8.05688 6.67721C8.06886 6.53536 8.04531 6.39276 7.98838 6.26229L6.7014 3.37484C6.62831 3.20439 6.50191 3.06224 6.34118 2.96973C6.18044 2.87722 5.99404 2.83933 5.80994 2.86176C5.00984 2.96695 4.27543 3.35986 3.74392 3.96709C3.21242 4.57431 2.9202 5.35429 2.92188 6.16127C2.92188 10.9553 6.82201 14.8555 11.6161 14.8555C12.423 14.857 13.2029 14.5647 13.8101 14.0333C14.4173 13.5018 14.8102 12.7674 14.9156 11.9674C14.9379 11.7842 14.9006 11.5986 14.809 11.4383C14.7174 11.278 14.5766 11.1516 14.4074 11.0778ZM11.6161 14.1207C7.22733 14.1207 3.6566 10.55 3.6566 6.16127C3.65455 5.53304 3.8813 4.92555 4.29449 4.45231C4.70767 3.97907 5.27902 3.67246 5.90178 3.58975H5.91586C5.94053 3.59021 5.96449 3.59811 5.9846 3.61242C6.0047 3.62674 6.02001 3.64679 6.02852 3.66995L7.3204 6.55434C7.32776 6.57038 7.33158 6.58782 7.33158 6.60547C7.33158 6.62312 7.32776 6.64056 7.3204 6.65659L6.02791 8.19093C6.01831 8.20193 6.00951 8.21359 6.00158 8.22583C5.9207 8.3493 5.87308 8.49156 5.86331 8.63884C5.85355 8.78611 5.88199 8.93341 5.94586 9.06648C6.48894 10.1784 7.60939 11.2902 8.73351 11.8333C8.86735 11.8968 9.01536 11.9246 9.16312 11.9139C9.31088 11.9031 9.45334 11.8543 9.5766 11.7721C9.58823 11.7641 9.59986 11.7556 9.61088 11.7464L11.122 10.4606C11.1369 10.4526 11.1534 10.4479 11.1703 10.4468C11.1872 10.4458 11.2041 10.4484 11.2199 10.4545L14.1129 11.7507C14.1365 11.7607 14.1564 11.778 14.1697 11.7999C14.183 11.8219 14.189 11.8475 14.187 11.8731C14.1047 12.4962 13.7984 13.0679 13.3252 13.4816C12.8521 13.8952 12.2445 14.1224 11.6161 14.1207Z'
                        fill='#232B50'
                      />
                    </svg>
                  </span>
                  +38 (063) 37 84 500
                </a>
              </div>

              <div className={classes.follow}>
                <span className={classes.followUs}>{t('follow')}:</span>
                <a href='https://www.linkedin.com/company/uviten/' target='__blank' className={classes.insta}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='17'
                    viewBox='0 0 17 17'
                    fill='none'
                  >
                    <path
                      d='M8.92448 7.22083C9.53581 6.59617 10.3318 6.1875 11.2578 6.1875C12.2303 6.1875 13.1629 6.57381 13.8505 7.26144C14.5382 7.94907 14.9245 8.88171 14.9245 9.85417V14.8542H13.5911V9.85417C13.5911 9.23533 13.3453 8.64184 12.9077 8.20425C12.4701 7.76667 11.8767 7.52083 11.2578 7.52083C10.639 7.52083 10.0455 7.76667 9.6079 8.20425C9.17031 8.64184 8.92448 9.23533 8.92448 9.85417V14.8542H7.59115V6.52083H8.92448V7.22083ZM4.25781 5.1875C3.9926 5.1875 3.73824 5.08214 3.55071 4.89461C3.36317 4.70707 3.25781 4.45272 3.25781 4.1875C3.25781 3.92228 3.36317 3.66793 3.55071 3.48039C3.73824 3.29286 3.9926 3.1875 4.25781 3.1875C4.52303 3.1875 4.77738 3.29286 4.96492 3.48039C5.15246 3.66793 5.25781 3.92228 5.25781 4.1875C5.25781 4.45272 5.15246 4.70707 4.96492 4.89461C4.77738 5.08214 4.52303 5.1875 4.25781 5.1875ZM3.59115 6.52083H4.92448V14.8542H3.59115V6.52083Z'
                      fill='#232B50'
                    />
                  </svg>
                </a>
                <a href='https://www.facebook.com/uviten' target='__blank' className={classes.face}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='17'
                    viewBox='0 0 17 17'
                    fill='none'
                  >
                    <path
                      d='M9.58594 7.52214H12.5859L12.2526 8.85547H9.58594V14.8555H8.2526V8.85547H5.58594V7.52214H8.2526V6.27414C8.2526 5.08547 8.3766 4.65414 8.6086 4.21947C8.83594 3.79001 9.18714 3.43881 9.6166 3.21147C10.0513 2.97947 10.4826 2.85547 11.6713 2.85547C12.0193 2.85547 12.3246 2.8888 12.5859 2.95547V4.1888H11.6713C10.7886 4.1888 10.5199 4.2408 10.2453 4.38747C10.0481 4.49047 9.88732 4.6515 9.7846 4.8488C9.63794 5.1228 9.58594 5.39147 9.58594 6.27414V7.52214Z'
                      fill='#232B50'
                    />
                  </svg>
                </a>
                <a href='https://www.behance.net/uviten' target='__blank' className={classes.social}>
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
              </div>

              <div className={classes.reservedMobile}>
                {t('all-rights')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
