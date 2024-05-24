'use client';
import classes from './thanks-message.module.scss';
import { useTranslation } from 'react-i18next';

const ThanksMessage = ({ close }) => {

  const {t} = useTranslation('start');

  return (
    <div className={classes.thanks} onClick={(e) => e.stopPropagation()}>
      <button onClick={() => close((prev) => !prev)} className={classes.close}>
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
      <h2 className={classes.title}>{t('thanks-modal')}</h2>
      <p className={classes.text}>
        {t('thanks-text')}
      </p>
      <svg
        className={classes.svg}
        width='360'
        height='422'
        viewBox='0 0 360 422'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M439.93 91.7235C395.091 74.4507 338.887 100.719 323.228 146.108C314.407 171.706 317.508 199.753 321.377 226.602C326.855 264.576 335.477 318.536 302.664 347.143C289.774 358.366 271.929 363.618 254.996 361.111C229.392 357.328 208.974 337.558 184.474 329.346C157.199 320.178 130.468 324.629 110.119 344.486C90.7212 363.372 75.7375 386.319 55.8535 404.696C21.8148 436.155 -26.0879 451.536 -72.1605 447.127C-125.485 441.976 -176.039 418.7 -230.539 424.947C-251.645 427.328 -271.475 435.4 -287.511 449.486C-316.491 474.914 -338.203 507.287 -358.385 540.074'
          stroke='#F5F7F6'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.7'
          d='M440.54 98.5737C408.419 87.6449 370.026 99.062 345.176 122.88C336.316 131.445 329.15 141.589 324.771 152.981C320.387 164.257 318.47 176.031 317.9 187.992C317.232 201.887 318.434 215.952 319.863 229.832C320.753 238.991 321.918 249.193 322.573 259.765C324.595 291.418 322.859 326.658 298.848 348.164C286.254 359.494 268.886 365.021 252.267 363.088C227.164 360.166 206.681 341.687 182.256 333.883C167.801 329.24 153.49 328.221 140.267 331.086C128.719 333.599 117.871 339.072 108.371 347.659C88.9224 365.259 73.6408 386.575 53.7008 403.549C19.6294 432.725 -27.6891 446.68 -73.4541 442.669C-76.0249 442.467 -78.5399 442.204 -81.1153 441.885C-128.749 436.301 -174.341 419.115 -222.39 423.555C-224.828 423.757 -227.261 424.077 -229.695 424.397C-250.372 427.289 -269.785 435.581 -285.531 449.655C-314.045 475.066 -335.474 507.251 -355.374 539.793'
          stroke='#F7F8F7'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.7'
          d='M441.21 105.42C409.976 96.2747 372.361 108.191 347.358 131.077C338.425 139.292 331.124 148.972 326.433 159.848C321.794 170.547 319.388 181.752 318.384 193.083C317.165 206.296 317.702 219.738 318.468 233.056C318.937 241.878 319.622 251.745 319.917 262.036C320.741 292.853 318.578 327.637 295.156 349.297C282.856 360.674 265.969 366.594 249.665 365.236C225.004 363.176 204.514 345.986 180.222 338.587C165.893 334.174 151.757 333.149 138.522 335.721C127.023 337.999 116.275 343.059 106.75 351.003C87.2495 367.315 71.6676 386.944 51.7346 402.628C17.6281 429.463 -29.1621 442.053 -74.5033 438.437C-77.0159 438.233 -79.5889 437.972 -82.1039 437.709C-129.362 432.757 -174.47 417.485 -221.483 423.059C-223.86 423.319 -226.233 423.695 -228.664 424.073C-248.916 427.418 -267.91 435.987 -283.365 450.051C-311.353 475.5 -332.5 507.44 -352.177 539.738'
          stroke='#F7F8F7'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.7'
          d='M441.883 112.324C411.538 105.021 374.701 117.436 349.485 139.392C340.481 147.259 333.045 156.474 328.04 166.775C323.089 176.958 320.305 187.473 318.755 198.238C316.985 210.766 316.854 223.53 316.958 236.343C317.006 244.828 317.21 254.302 317.086 264.315C316.711 294.293 314.179 328.562 291.346 350.375C279.341 361.859 262.933 368.113 246.943 367.329C222.725 366.131 202.226 350.172 178.07 343.237C163.869 339.112 149.847 338.025 136.719 340.359C125.327 342.399 114.621 347.047 105.07 354.348C85.4628 369.434 69.6388 387.373 49.6499 401.654C15.5666 426.145 -30.6954 437.37 -75.7289 434.153C-78.2415 433.949 -80.754 433.745 -83.2666 433.54C-130.094 429.158 -174.715 415.861 -220.75 422.571C-223.064 422.945 -225.437 423.321 -227.75 423.753C-247.573 427.61 -266.15 436.398 -281.314 450.451C-308.779 475.881 -329.642 507.633 -349.095 539.687'
          stroke='#F7F8F7'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M442.34 118.966C412.882 113.447 376.822 126.361 351.398 147.445C342.321 154.962 334.692 163.716 329.431 173.44C324.165 183.048 321.01 192.991 318.971 203.187C316.591 215.034 315.853 227.174 315.294 239.425C314.921 247.573 314.587 256.714 314.102 266.446C312.53 295.587 309.629 329.398 287.324 351.309C275.613 362.84 259.685 369.428 244.011 369.277C220.293 368.94 199.733 354.33 175.706 347.742C161.633 343.906 147.728 342.814 134.705 344.852C123.362 346.655 112.754 350.832 103.237 357.546C83.579 371.346 67.4571 387.655 47.4704 400.531C13.3521 422.681 -32.3234 432.538 -76.9913 429.719C-79.5015 429.573 -81.9559 429.367 -84.4684 429.163C-130.865 425.351 -175.001 413.969 -220.056 421.873C-222.368 422.305 -224.623 422.736 -226.933 423.227C-246.33 427.537 -264.43 436.6 -279.359 450.702C-306.298 476.17 -326.879 507.677 -346.109 539.487'
          stroke='#EAEAEA'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M443.177 126.018C414.548 122.284 379.323 135.695 353.687 155.849C344.541 163.076 336.774 171.307 331.199 180.457C325.677 189.487 322.033 198.861 319.562 208.428C316.628 219.533 315.224 231.053 313.947 242.801C313.094 250.614 312.397 259.417 311.494 268.87C308.841 297.229 305.396 330.53 283.68 352.595C272.264 364.232 256.874 371.151 241.454 371.518C218.181 372.102 197.609 358.663 173.718 352.539C159.771 348.933 145.982 347.838 133.064 349.579C121.825 351.086 111.262 354.91 101.72 360.98C81.9517 373.496 65.5853 388.058 45.5474 399.647C11.3918 419.398 -33.7531 427.949 -78.0552 425.527C-80.5072 425.379 -82.9594 425.231 -85.4696 425.085C-131.435 421.843 -175.085 412.435 -219.159 421.533C-221.411 422.022 -223.663 422.51 -225.855 423.056C-244.826 427.819 -262.507 437.16 -277.145 451.251C-303.618 476.701 -323.858 508.018 -342.864 539.585'
          stroke='#E3E3E3'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M443.848 132.925C416.106 130.974 381.661 144.941 355.813 164.165C346.595 171.043 338.693 178.811 332.746 187.388C326.91 195.844 322.891 204.587 319.873 213.587C316.387 224.009 314.318 234.907 312.377 246.093C311.104 253.57 309.867 261.981 308.603 271.154C304.752 298.675 300.94 331.519 279.81 353.679C268.689 365.422 253.778 372.675 238.673 373.616C215.842 375.062 195.205 362.914 171.506 357.193C157.686 353.875 144.012 352.717 131.2 354.221C120.011 355.492 109.547 358.902 99.9795 364.329C80.1604 375.559 63.4961 388.491 43.4628 398.734C9.27211 416.144 -35.2865 423.328 -79.2811 421.305C-81.7308 421.215 -84.1828 421.067 -86.5767 420.917C-132.167 418.307 -175.332 410.812 -218.371 421.044C-220.562 421.589 -222.754 422.134 -224.94 422.796C-243.483 428.071 -260.748 437.63 -275.096 451.71C-301.043 477.199 -321.001 508.27 -339.784 539.593'
          stroke='#DEDEDE'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M444.525 139.932C417.67 139.765 384.002 154.23 357.945 172.583C348.654 179.112 340.618 186.416 334.357 194.418C328.209 202.358 323.758 210.472 320.309 218.902C316.272 228.64 313.537 238.918 310.934 249.542C309.18 256.683 307.523 264.758 305.898 273.65C300.849 300.334 296.611 332.723 276.068 354.978C265.24 366.769 250.808 374.356 236.02 375.929C213.689 378.235 192.988 367.378 169.421 362.062C155.727 358.974 142.169 357.813 129.465 359.078C118.382 360.111 107.903 363.113 98.3675 367.895C78.4414 377.899 61.5326 389.084 41.4458 397.982C7.22016 413.053 -36.7543 418.811 -80.3809 417.244C-82.7724 417.152 -85.2221 417.063 -87.616 416.913C-132.776 414.872 -175.458 409.234 -217.515 420.718C-219.646 421.32 -221.777 421.921 -223.961 422.642C-242.078 428.369 -258.924 438.206 -272.98 452.275C-298.404 477.744 -318.078 508.628 -336.638 539.707'
          stroke='#D4D4D4'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M445.135 146.615C419.166 148.23 386.278 163.252 360.007 180.617C350.647 186.855 342.415 193.639 335.897 201.065C329.494 208.428 324.612 215.972 320.672 223.775C316.026 232.832 312.682 242.428 309.417 252.548C307.243 259.353 305.106 267.092 303.06 275.648C296.813 301.495 292.207 333.427 272.25 355.777C261.718 367.674 247.766 375.595 233.289 377.683C211.401 380.852 190.69 371.224 167.259 366.372C153.751 363.57 140.252 362.406 127.592 363.319C116.558 364.117 106.176 366.647 96.6174 370.844C76.5819 379.564 59.4335 389.119 39.3489 396.612C5.14641 409.341 -38.358 413.737 -81.619 412.566C-84.0105 412.475 -86.3996 412.442 -88.7911 412.35C-133.52 410.88 -175.776 407.158 -216.853 419.836C-218.923 420.494 -221.052 421.153 -223.118 421.928C-240.809 428.108 -257.178 438.221 -270.999 452.339C-295.896 477.847 -315.289 508.485 -333.628 539.262'
          stroke='#C4C4C4'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M445.815 153.456C420.733 156.854 388.623 172.375 362.142 188.868C352.71 194.758 344.343 201.078 337.511 207.929C330.794 214.718 325.537 221.631 321.109 228.866C315.913 237.298 311.901 246.215 307.971 255.714C305.318 262.184 302.76 269.587 300.295 277.865C292.908 302.872 287.818 334.352 268.45 356.855C258.211 368.799 244.798 377.111 230.578 379.775C209.132 383.805 188.415 375.465 165.116 371.019C151.735 368.447 138.351 367.279 125.798 367.954C114.872 368.514 104.531 370.633 94.9475 374.187C74.8607 381.622 57.412 389.49 37.2739 395.639C3.03876 406.086 -39.8816 409.057 -82.7769 408.283C-85.1661 408.25 -87.4971 408.215 -89.8886 408.124C-134.187 407.224 -175.956 405.474 -216.055 419.287C-218.123 420.003 -220.133 420.717 -222.197 421.551C-239.459 428.242 -255.412 438.573 -268.884 452.679C-293.316 478.168 -312.367 508.617 -330.482 539.15'
          stroke='#BCBCBC'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
      </svg>
      <svg
        className={classes.svgDesktop}
        width='520'
        height='831'
        viewBox='0 0 520 831'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M590.616 40.8699C522.679 38.5615 459.729 99.7165 459.832 167.641C459.905 205.942 477.046 241.993 494.659 276.087C519.578 324.304 556.107 392.432 525.505 445.874C513.478 466.849 492.059 482.138 468.265 486.633C432.289 493.441 395.836 476.478 359.285 476.855C318.58 477.24 284.914 495.577 266.917 531.548C249.742 565.781 240.348 603.394 222.287 637.171C191.369 694.993 134.47 737.75 70.845 753.206C-2.81533 771.032 -81.1728 763.347 -151.123 796.953C-178.229 809.915 -200.993 829.894 -215.901 856.152C-242.852 903.569 -256.871 956.9 -268.653 1010.08'
          stroke='#F5F7F6'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.7'
          d='M594.605 49.74C546.607 50.0174 500.582 83.0684 478.405 126.42C470.531 141.973 465.653 158.852 465.08 176.109C464.445 193.211 467.339 209.837 472.119 226.088C477.666 244.97 485.79 263.211 494.132 281.103C499.566 292.931 505.85 306.028 511.625 319.854C528.996 361.226 543.005 409.132 520.878 449.004C509.295 469.983 488.642 485.42 465.534 490.537C430.626 498.264 394.685 483.057 358.423 483.944C336.95 484.436 317.351 489.706 301.004 499.663C286.733 508.373 274.77 520.716 266.052 536.596C248.212 569.132 237.664 604.705 218.878 636.632C186.858 691.418 130.079 731.998 67.0503 747.844C63.5204 748.765 60.0372 749.579 56.4468 750.346C-9.80785 764.956 -78.7115 763.112 -140.876 791.312C-144.041 792.712 -147.145 794.267 -150.249 795.822C-176.547 809.27 -198.652 829.349 -213.176 855.458C-239.513 902.635 -253.24 955.584 -264.759 1008.3'
          stroke='#F7F8F7'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.7'
          d='M598.675 58.5818C552.69 60.8326 507.935 94.1902 485.121 136.367C476.989 151.487 471.716 167.808 470.486 184.519C469.242 200.968 471.219 217.06 475.129 232.671C479.621 250.895 486.569 268.614 493.763 286.061C498.478 297.634 503.967 310.505 509.13 324.124C524.511 364.931 537.739 412.426 516.471 452.231C505.302 473.138 485.474 488.876 463.052 494.615C429.136 503.29 393.784 489.809 357.886 491.176C336.689 491.918 317.32 497.099 300.822 506.67C286.507 515.042 274.487 526.786 265.436 541.818C246.931 572.658 235.2 606.114 215.825 636.315C182.674 687.987 125.968 726.497 63.6891 742.676C60.236 743.567 56.676 744.411 53.1928 745.225C-12.2681 760.504 -79.6365 760.996 -139.891 790.232C-142.948 791.68 -145.946 793.282 -149.02 794.914C-174.538 808.77 -195.955 829.026 -210.095 854.985C-235.71 901.97 -249.175 954.461 -260.508 1006.75'
          stroke='#F7F8F7'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.7'
          d='M602.776 67.4969C558.833 71.7979 515.349 105.462 491.82 146.493C483.43 161.18 477.762 176.944 475.846 193.032C473.946 208.936 475.099 224.28 478.015 239.387C481.454 256.953 487.194 274.073 493.271 291.152C497.267 302.47 501.93 315.039 506.404 328.479C519.795 368.722 532.29 415.699 511.88 455.436C501.155 476.348 482.123 492.31 460.387 498.672C427.462 508.295 392.668 496.462 357.166 498.387C336.274 499.455 317.028 504.499 300.563 513.703C286.281 521.707 274.126 532.882 264.743 547.066C245.527 576.316 232.689 607.626 212.59 635.977C178.383 684.506 121.75 720.947 60.0679 737.516C56.6148 738.407 53.1619 739.299 49.7089 740.19C-14.9117 756.032 -80.7143 758.936 -139.135 789.237C-142.056 790.81 -145.053 792.412 -147.944 794.061C-172.652 808.403 -193.41 828.758 -207.167 854.568C-232.092 901.284 -245.264 953.392 -256.411 1005.25'
          stroke='#F7F8F7'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M606.457 76.167C564.526 82.4409 522.312 116.411 498.099 156.374C489.451 170.628 483.31 185.864 480.785 201.299C478.199 216.581 478.589 231.333 480.589 245.906C482.897 262.843 487.536 279.412 492.467 296.046C495.743 307.109 499.533 319.482 503.395 332.714C514.797 372.393 526.588 418.93 506.929 458.552C496.619 479.392 478.382 495.578 457.363 502.639C425.505 513.179 391.253 503.179 356.087 505.507C335.499 506.901 316.407 511.886 299.945 520.645C285.619 528.312 273.376 538.81 263.768 552.193C243.887 579.748 229.896 609.018 209.148 635.49C173.81 680.906 117.327 715.248 56.3178 732.178C52.895 733.147 49.5188 734.008 46.0658 734.9C-17.7144 751.305 -81.982 756.544 -138.54 787.987C-141.43 789.636 -144.243 791.256 -147.104 792.983C-171.033 807.732 -191.026 828.235 -204.445 854.001C-228.649 900.525 -241.559 952.175 -252.521 1003.6'
          stroke='#EAEAEA'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M610.846 85.2058C570.85 93.4819 529.983 127.729 505.057 166.547C496.181 180.445 489.614 195.046 486.403 209.859C483.207 224.488 482.681 238.706 483.811 252.639C485.035 268.841 488.497 284.888 492.233 301.184C494.714 312.022 497.862 324.11 501.035 337.164C510.631 376.297 521.459 422.405 502.658 461.96C492.791 482.804 475.427 499.185 454.987 506.82C424.15 518.385 390.426 509.956 355.656 512.842C335.342 514.485 316.405 519.41 299.945 527.725C285.622 534.947 273.274 544.953 263.333 557.488C242.711 583.377 227.584 610.425 206.171 635.2C169.671 677.427 113.293 709.776 52.956 727.068C49.61 728.007 46.264 728.946 42.8412 729.914C-20.0988 746.882 -82.801 754.533 -137.495 787.118C-140.279 788.815 -143.062 790.511 -145.739 792.256C-168.888 807.413 -188.193 828.092 -201.228 853.71C-224.819 899.994 -237.359 951.232 -248.135 1002.23'
          stroke='#E3E3E3'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M614.949 94.1193C576.964 104.368 537.397 138.998 511.757 176.671C502.623 190.135 495.661 204.179 491.686 218.399C487.805 232.406 486.485 245.954 486.621 259.383C486.792 274.927 489.077 290.453 491.666 306.304C493.428 316.887 495.673 328.703 498.234 341.549C505.84 380.118 515.964 425.785 497.991 465.195C488.569 486.044 472 502.649 452.246 510.906C422.4 523.418 389.187 516.744 354.859 520.08C334.851 522.049 316.037 526.838 299.61 534.785C285.243 541.669 272.837 551.076 262.564 562.764C241.277 586.957 224.997 611.965 202.966 634.939C165.335 674.054 109.107 704.304 49.3655 721.986C46.0498 723.002 42.7039 723.941 39.4347 724.85C-22.7118 742.487 -83.8791 752.472 -136.664 786.092C-139.34 787.836 -142.017 789.58 -144.633 791.478C-166.973 807.121 -185.62 827.899 -198.271 853.367C-221.141 899.459 -233.419 950.238 -244.01 1000.81'
          stroke='#DEDEDE'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M619.095 103.177C583.122 115.397 544.825 150.334 518.501 186.939C509.109 199.971 501.752 213.458 497.091 227.055C492.554 240.516 490.364 253.425 489.661 266.29C488.778 281.177 489.885 296.181 491.328 311.587C492.294 321.945 493.821 333.506 495.77 346.145C501.386 384.15 510.73 429.406 493.585 468.672C484.577 489.448 468.803 506.277 449.766 515.233C420.987 528.663 388.286 523.744 354.323 527.56C334.589 529.778 315.929 534.508 299.535 542.087C285.201 548.604 272.584 557.472 262.056 568.282C240.058 590.887 222.641 613.673 199.916 634.874C161.154 670.877 105.046 698.952 46.0075 717.073C42.7686 718.059 39.4529 719.075 36.1837 719.984C-25.1226 738.184 -84.7852 750.427 -135.677 785.265C-138.246 787.057 -140.816 788.848 -143.401 790.823C-164.962 806.874 -182.92 827.829 -195.188 853.147C-217.367 898.97 -229.352 949.367 -239.757 999.508'
          stroke='#D4D4D4'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M623.011 111.819C589.05 126.012 552.053 161.331 524.986 196.715C515.366 209.391 507.506 222.273 502.236 235.218C497.09 248.027 494.06 260.372 492.41 272.628C490.396 286.886 490.374 301.262 490.699 316.301C490.947 326.404 491.677 337.74 492.908 350.123C496.535 387.565 505.176 432.38 488.858 471.501C480.294 492.283 465.316 509.336 446.934 518.836C419.146 533.213 387.003 529.942 353.436 534.315C334.084 536.829 315.5 541.53 299.002 548.617C284.624 554.796 271.919 562.988 261.089 573.028C238.35 593.968 219.857 614.685 196.484 634.008C156.667 666.87 100.556 692.906 42.1907 711.388C38.9518 712.374 35.7432 713.437 32.5043 714.423C-27.9619 733.185 -86.1667 747.792 -135.195 783.772C-137.658 785.61 -140.197 787.479 -142.599 789.472C-163.381 805.93 -180.574 827.032 -192.505 852.307C-213.963 897.938 -225.686 947.876 -235.935 997.511'
          stroke='#C4C4C4'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M627.087 120.655C595.136 136.819 559.41 172.444 531.659 206.76C521.781 219.003 513.526 231.328 507.57 243.651C501.737 255.838 497.915 267.514 495.348 279.236C492.311 292.914 491.081 306.691 490.23 321.209C489.682 331.087 489.693 342.167 490.235 354.373C491.949 391.222 499.733 435.656 484.274 474.71C476.124 495.419 462.048 512.743 444.275 522.894C417.478 538.219 385.923 536.672 352.721 541.525C333.643 544.288 315.214 548.929 298.749 555.649C284.403 561.46 271.564 569.084 260.401 578.276C236.998 597.521 217.322 616.123 193.255 633.674C152.337 663.502 96.3467 687.363 38.6539 706.206C35.4453 707.269 32.3134 708.303 29.0745 709.289C-30.5517 728.613 -87.1917 745.631 -134.388 782.675C-136.82 784.59 -139.176 786.476 -141.547 788.546C-161.52 805.489 -178.055 826.69 -189.525 851.787C-210.369 897.178 -221.723 946.705 -231.787 995.91'
          stroke='#BCBCBC'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
      </svg>
    </div>
  );
};

export default ThanksMessage;
