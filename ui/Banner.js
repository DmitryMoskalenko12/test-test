"use client"
import Script from 'next/script';
const Banner = () => {
    return <>
     <script
      src="https://cdn.cookiehub.eu/c2/ddd5f08e.js"
    />
    <script id="cookie-consent">
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
    </script>
    </>
}

export default Banner;