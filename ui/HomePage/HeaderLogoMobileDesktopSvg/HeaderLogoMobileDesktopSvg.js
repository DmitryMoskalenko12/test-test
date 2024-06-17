const HeaderLogoMobileSvg = ({clazzMobile, clazzDesktop}) => {
    return <>
     <svg
        className={clazzMobile}
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
    className={clazzDesktop}
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
    </>
}

export default HeaderLogoMobileSvg;