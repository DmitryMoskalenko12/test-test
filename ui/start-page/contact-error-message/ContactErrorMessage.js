import classes from './contact-error-message.module.scss';
import { useTranslation } from 'react-i18next';

const ContactErrorMessage = ({ setSuccess, setLoading, setError }) => {
  const { t } = useTranslation('start');

  return (
    <div className={classes.error}>
      <button
        onClick={() => {
          setSuccess(null);
          setLoading(false);
          setError(false);
        }}
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
        <h2 className={classes.title}>{t('oopsErrorTitle')}</h2>
        <p className={classes.text}>{t('oopsErrorText')}</p>
        <button
          onClick={() => {
            setSuccess(null);
            setLoading(false);
            setError(false);
          }}
          className={classes.button}
        >
          {t('try')}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M13.8259 20.1758L18.5429 14.5063C19.1519 13.7731 19.1529 12.5784 18.5429 11.8453L13.8249 6.17578L13.1179 7.02554L17.7349 12.5748L5.00088 12.5748L5.00088 13.7767L17.7359 13.7767L13.1179 19.326L13.8259 20.1758Z'
              fill='#FDFFFE'
            />
          </svg>
        </button>
      </div>

      <svg
        className={classes.wave}
        width='360'
        height='376'
        viewBox='0 0 360 376'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M548.551 68.0836C519.312 50.8688 477.972 64.1921 462.728 95.6326C454.139 113.365 453.532 134.113 453.573 154.069C453.635 182.292 454.3 222.485 428.866 239.929C418.877 246.772 406.053 248.752 394.618 245.176C377.328 239.774 365.179 223.265 349.083 214.751C331.167 205.255 312.292 205.735 296.312 218.094C281.084 229.845 268.502 245.009 252.988 256.338C226.429 275.734 191.881 281.986 160.533 274.012C124.255 264.75 91.6619 242.571 53.4575 241.489C38.6661 241.041 24.1977 244.872 11.7572 253.473C-10.7213 268.999 -28.867 290.333 -45.9973 312.127'
          stroke='#F5F7F6'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.7'
          d='M548.298 73.137C527.211 61.8573 499.612 66.2048 480.139 80.9845C473.189 86.3067 467.253 92.9543 463.117 100.799C458.99 108.558 456.515 116.936 454.951 125.588C453.13 135.64 452.583 146.008 452.21 156.266C451.927 163.028 451.732 170.579 451.149 178.347C449.446 201.611 444.799 227.098 426.132 240.28C416.336 247.23 403.814 249.461 392.54 246.335C375.51 241.612 363.19 226.036 347.107 217.828C337.59 212.952 327.819 210.731 318.417 211.451C310.205 212.088 302.187 214.953 294.794 220.226C279.656 231.034 267.028 244.98 251.613 255.282C225.255 273.011 191.25 278.284 160.074 270.633C158.321 270.22 156.612 269.769 154.867 269.27C122.556 260.28 92.7898 243.05 59.2124 241.318C57.5108 241.214 55.801 241.195 54.0911 241.176C39.5452 241.146 25.3427 245.179 13.104 253.802C-9.05168 269.363 -26.9832 290.59 -43.8952 312.235'
          stroke='#EDF0EE'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.7'
          d='M548.093 78.1903C527.444 68.3015 500.331 73.0928 480.844 87.1775C473.879 92.238 467.895 98.5337 463.595 105.97C459.347 113.283 456.591 121.195 454.79 129.345C452.655 138.842 451.71 148.689 450.934 158.468C450.394 164.941 449.901 172.199 449.098 179.725C446.649 202.255 441.753 227.366 423.477 240.721C413.879 247.736 401.651 250.303 390.538 247.628C373.729 243.579 361.278 228.941 345.246 221.042C335.794 216.347 326.143 214.139 316.763 214.645C308.608 215.115 300.699 217.69 293.351 222.491C278.303 232.357 265.634 245.043 250.349 254.406C224.197 270.426 190.689 274.76 159.768 267.44C158.055 267.032 156.305 266.576 154.596 266.124C122.483 257.633 92.8631 241.848 59.8893 241.049C58.2239 240.992 56.5504 241.02 54.8364 241.045C40.54 241.388 26.5993 245.666 14.5623 254.312C-7.23433 269.955 -24.9476 291.033 -41.6816 312.523'
          stroke='#E7E8E7'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          opacity='0.7'
          d='M547.884 83.2904C527.668 74.8353 501.043 80.0702 481.501 93.4555C474.52 98.2543 468.488 104.198 464.028 111.183C459.616 118.088 456.667 125.459 454.544 133.139C452.096 142.081 450.757 151.364 449.574 160.707C448.777 166.892 447.99 173.813 446.925 181.093C443.732 202.889 438.631 227.587 420.746 241.114C411.341 248.238 399.411 251.097 388.459 248.873C371.87 245.498 359.293 231.755 343.309 224.208C333.917 219.736 324.351 217.495 315.068 217.838C307.01 218.146 299.17 220.425 291.868 224.755C276.866 233.717 264.195 245.147 249.009 253.482C223.102 267.798 190.093 271.192 159.344 264.195C157.631 263.786 155.918 263.378 154.205 262.969C122.333 254.938 92.8562 240.641 60.4456 240.77C58.8123 240.804 57.1387 240.832 55.5013 240.908C41.4502 241.669 27.7755 246.149 15.9402 254.817C-5.49328 270.5 -22.9923 291.47 -39.5484 312.806'
          stroke='#DBDDDC'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M547.676 88.3472C527.896 81.2827 501.759 86.9613 482.158 99.6901C475.161 104.227 469.042 109.815 464.461 116.353C459.889 122.807 456.739 129.722 454.335 136.938C451.533 145.32 449.836 154.086 448.251 162.951C447.196 168.847 446.071 175.471 444.784 182.509C440.847 203.571 435.537 227.898 418.007 241.551C408.8 248.739 397.168 251.891 386.372 250.161C370.044 247.464 357.292 234.698 341.364 227.416C332.032 223.168 322.548 220.936 313.365 221.074C305.364 221.215 297.638 223.161 290.417 227.067C275.506 235.087 262.789 245.299 247.742 252.611C222.04 265.218 189.569 267.677 159.034 261.007C157.317 260.641 155.644 260.237 153.931 259.829C122.301 252.257 92.9703 239.405 61.1187 240.506C59.4814 240.582 57.8843 240.662 56.2428 240.781C42.4412 241.915 29.0687 246.646 17.3907 255.374C-3.68371 271.139 -20.9645 291.96 -37.3426 313.141'
          stroke='#D9D9D9'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M547.428 93.3996C528.045 87.7212 502.436 93.8479 482.78 105.877C475.763 110.196 469.6 115.388 464.859 121.476C460.167 127.483 456.735 133.934 454.094 140.646C450.983 148.431 448.888 156.676 446.856 165.101C445.503 170.704 444.161 177.043 442.613 183.835C438.007 204.215 432.372 228.114 415.233 241.94C406.219 249.236 394.925 252.685 384.254 251.359C368.143 249.379 355.268 237.464 339.388 230.535C330.121 226.467 320.717 224.244 311.635 224.177C303.736 224.113 296.075 225.806 288.899 229.242C274.038 236.314 261.324 245.228 246.368 251.598C220.874 262.454 188.897 264.016 158.576 257.673C156.899 257.312 155.222 256.951 153.505 256.585C122.116 249.473 92.9281 238.109 61.6357 240.18C60.0345 240.304 58.4333 240.427 56.8684 240.598C43.3162 242.106 30.2055 247.082 18.7293 255.832C-2.02235 271.633 -19.0486 292.35 -35.2488 313.377'
          stroke='#E1E4E2'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M547.224 98.4948C528.279 94.2067 503.152 100.82 483.441 112.15C476.409 116.206 470.198 121.047 465.256 126.68C460.403 132.235 456.776 138.188 453.813 144.431C450.388 151.661 447.894 159.385 445.461 167.332C443.85 172.646 442.174 178.644 440.404 185.195C435.054 204.841 429.209 228.369 412.466 242.325C403.645 249.729 392.65 253.47 382.139 252.594C366.249 251.288 353.203 240.307 337.415 233.691C328.208 229.846 318.889 227.589 309.905 227.36C302.062 227.13 294.51 228.532 287.38 231.496C272.61 237.627 259.849 245.324 245.028 250.713C219.74 259.86 188.301 260.487 158.152 254.467C156.471 254.148 154.794 253.787 153.158 253.43C121.966 246.817 92.925 236.897 62.2361 239.901C60.6712 240.072 59.1063 240.242 57.5331 240.498C44.2264 242.423 31.3815 247.602 20.107 256.374C-0.285697 272.257 -17.0937 292.825 -33.116 313.697'
          stroke='#DCDFDD'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M547.003 103.671C528.495 100.773 503.856 107.83 484.086 118.504C477.038 122.299 470.78 126.788 465.677 131.969C460.66 137.117 456.795 142.567 453.591 148.35C449.853 155.025 446.961 162.228 444.125 169.697C442.217 174.717 440.283 180.427 438.292 186.736C432.197 205.649 426.103 228.801 409.755 242.887C401.132 250.356 390.435 254.39 380.08 254.008C364.451 253.38 351.234 243.332 335.499 237.025C326.355 233.36 317.117 231.113 308.23 230.722C300.484 230.329 292.962 231.432 285.917 233.929C271.193 239.156 258.434 245.555 243.708 249.96C218.625 257.399 187.728 257.048 157.789 251.398C156.148 251.084 154.467 250.765 152.831 250.409C121.88 244.255 92.9903 235.737 62.8563 239.755C61.3276 239.973 59.7989 240.191 58.2217 240.49C45.1644 242.789 32.5814 248.212 21.5087 257.007C1.47911 272.929 -15.1148 293.39 -30.9591 314.108'
          stroke='#D2D6D4'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M546.774 108.601C528.703 107.093 504.547 114.635 484.726 124.568C477.659 128.144 471.317 132.234 466.094 136.969C460.957 141.67 456.851 146.66 453.37 151.936C449.278 158.052 446.032 164.696 442.79 171.729C440.624 176.461 438.392 181.877 436.144 187.897C429.305 206.077 423.002 228.858 407.048 243.074C398.619 250.65 388.22 254.978 378.03 255.003C362.621 255.048 349.278 245.895 333.59 239.939C324.547 236.503 315.349 234.26 306.527 233.616C298.839 233.057 291.43 233.826 284.426 235.896C269.752 240.176 256.988 245.363 242.401 248.745C217.562 254.48 187.124 253.186 157.398 247.862C155.757 247.548 154.112 247.277 152.472 246.964C121.762 241.27 92.9792 234.192 63.4042 239.18C61.9118 239.445 60.3789 239.706 58.8782 240.057C46.0704 242.729 33.7895 248.403 22.874 257.258C3.20345 273.262 -13.1722 293.573 -28.8344 314.094'
          stroke='#C4C1C1'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
        <path
          d='M546.565 113.655C528.932 113.537 505.263 121.523 485.383 130.799C478.3 134.114 471.91 137.852 466.527 142.136C461.229 146.386 456.927 150.878 453.164 155.69C448.755 161.294 445.115 167.374 441.474 173.886C439.011 178.325 436.522 183.452 434.011 189.227C426.468 206.677 419.876 229.079 404.313 243.467C396.081 251.108 386.016 255.776 375.946 256.247C360.759 256.965 347.285 248.75 331.649 243.103C322.671 239.847 313.553 237.613 304.829 236.808C297.237 236.086 289.897 236.56 282.938 238.159C268.355 241.497 255.549 245.425 241.056 247.822C216.419 251.893 186.522 249.621 157.01 244.624C155.365 244.353 153.761 244.086 152.12 243.773C121.652 238.539 93.0117 232.947 63.9999 238.863C62.5033 239.171 61.047 239.484 59.5422 239.877C46.9797 242.967 34.9648 248.843 24.2914 257.724C4.94361 273.764 -11.1776 293.972 -26.6619 314.339'
          stroke='#B1B1B1'
          strokeWidth='0.5'
          strokeMiterlimit='10'
        />
      </svg>
    </div>
  );
};

export default ContactErrorMessage;
