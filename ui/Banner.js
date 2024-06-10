'use client'
import Script from 'next/script';
const Banner = () => {
    return <>
    <Script
          src="https://cdn.cookiehub.eu/c2/ddd5f08e.js"
          strategy="afterInteractive"
         />
         <Script id="cookie-consent" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('consent','default', {
              'security_storage': 'granted',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
            document.addEventListener("DOMContentLoaded", function(event) {
              var cpm = {};
              window.cookiehub.load(cpm);
            });
          `}
          </Script> 
    </>
}

export default Banner;