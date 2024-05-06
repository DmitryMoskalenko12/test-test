import classes from './footer.module.scss';

const Footer = () => {
    return <footer className={classes.footer}>
            <div className='container'>
                <div className={classes.wrapper}>
                    <div className={classes.contentWrapper}>
                        <a className={classes.logoWrapper} href="#">
                            <svg className={classes.logoMobile} width="56" height="12" viewBox="0 0 56 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.456 9.992C7.64533 10.792 6.45067 11.192 4.872 11.192C3.29333 11.192 2.09333 10.792 1.272 9.992C0.461333 9.18133 0.056 8.09867 0.056 6.744V0.327999H2.36V6.664C2.36 7.432 2.57867 8.04533 3.016 8.504C3.45333 8.952 4.072 9.176 4.872 9.176C5.672 9.176 6.28533 8.952 6.712 8.504C7.14933 8.04533 7.368 7.432 7.368 6.664V0.327999H9.688V6.728C9.688 8.104 9.27733 9.192 8.456 9.992ZM17.6304 11H14.7824L10.6544 0.327999H13.2464L16.2064 8.536L19.1504 0.327999H21.7424L17.6304 11ZM24.9999 11H22.7279V0.327999H24.9999V11Z" fill="#232B50"/>
                            <path d="M31.8705 11H29.5825V2.328H26.4625V0.327999H34.9745V2.328H31.8705V11ZM43.983 11H36.431V0.327999H43.983V2.328H38.703V4.584H43.871V6.584H38.703V9H43.983V11ZM55.3111 11H53.1191L48.0311 4.04V11H45.7591V0.327999H48.0951L53.0391 7.032V0.327999H55.3111V11Z" fill="#FDFFFE"/>
                            </svg>
                            <svg className={classes.logoDesktop} width="98" height="20" viewBox="0 0 98 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.548 17.236C14.1293 18.636 12.0387 19.336 9.276 19.336C6.51333 19.336 4.41333 18.636 2.976 17.236C1.55733 15.8173 0.848 13.9227 0.848 11.552V0.323998H4.88V11.412C4.88 12.756 5.26267 13.8293 6.028 14.632C6.79333 15.416 7.876 15.808 9.276 15.808C10.676 15.808 11.7493 15.416 12.496 14.632C13.2613 13.8293 13.644 12.756 13.644 11.412V0.323998H17.704V11.524C17.704 13.932 16.9853 15.836 15.548 17.236ZM31.6032 19H26.6192L19.3952 0.323998H23.9312L29.1112 14.688L34.2632 0.323998H38.7992L31.6032 19ZM44.4998 19H40.5238V0.323998H44.4998V19Z" fill="#232B50"/>
                                <path d="M56.5234 19H52.5194V3.824H47.0594V0.323998H61.9554V3.824H56.5234V19ZM77.7203 19H64.5042V0.323998H77.7203V3.824H68.4803V7.772H77.5243V11.272H68.4803V15.5H77.7203V19ZM97.5445 19H93.7085L84.8045 6.82V19H80.8285V0.323998H84.9165L93.5685 12.056V0.323998H97.5445V19Z" fill="#FDFFFE"/>
                            </svg>
                        </a>

                        <nav className={classes.nav}>
                            <ul className={classes.list}>
                            <li><a className={classes.link} href="#">Services</a></li>
                            <li><a className={classes.link} href="#">Works</a></li>
                            <li><a className={classes.link} href="#">About us</a></li>
                            <li><a className={classes.link} href="#">Contacts</a></li>
                            </ul>
                        </nav>

                        <div className={classes.socialBlock}>
                            <a href='#' className={classes.instagram}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8C16.9587 8 18.3576 8.57946 19.3891 9.61091C20.4205 10.6424 21 12.0413 21 13.5V21H19V13.5C19 12.5717 18.6313 11.6815 17.9749 11.0251C17.3185 10.3687 16.4283 10 15.5 10C14.5717 10 13.6815 10.3687 13.0251 11.0251C12.3687 11.6815 12 12.5717 12 13.5V21H10V8.5H12V9.55ZM5 6.5C4.60218 6.5 4.22064 6.34196 3.93934 6.06066C3.65804 5.77936 3.5 5.39782 3.5 5C3.5 4.60218 3.65804 4.22064 3.93934 3.93934C4.22064 3.65804 4.60218 3.5 5 3.5C5.39782 3.5 5.77936 3.65804 6.06066 3.93934C6.34196 4.22064 6.5 4.60218 6.5 5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5ZM4 8.5H6V21H4V8.5Z" fill="#232B50"/>
                                </svg>
                            </a>
                            <a href='#' className={classes.facebook}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_851_379)">
                                    <path d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.989 5.298C13.6933 5.45251 13.4521 5.69405 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z" fill="#232B50"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_851_379">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={classes.reserved}>© 2024 UVITEN,  All rights reserved</div>
                </div>
            </div>
    </footer>
}

export default Footer;