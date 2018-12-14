//Components
import Head from 'next/head';

/**
 * @description Use built-in component for appending elements to the <head> of the page
 */
export default () => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/static/images/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/static/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            <meta name="description" content="Create a custom Presidential Alert with our online image generator. A custom Presidential Alert template to create Presidential Alert memes." />
            <meta name="image" content="https://www.presidentialalert.app/static/images/logo/og-image.jpg" />
            <meta name="Keywords" content="presidential alert, president, message, generator, template, meme, alert, presidential, funny" />

            <meta itemProp="name" content="PresidentialAlert.app - Presidential alert generator" />
            <meta itemProp="description" content="Create a custom Presidential Alert with our online image generator. A custom Presidential Alert template to create Presidential Alert memes." />
            <meta itemProp="image" content="https://www.presidentialalert.app/static/images/logo/og-image.jpg" />
            <meta property="og:image:height" content="1123" />
            <meta property="og:image:width" content="2144" />

            <meta name="og:title" content="PresidentialAlert.app - Presidential alert generator" />
            <meta name="og:description" content="Create a custom Presidential Alert with our online image generator. A custom Presidential Alert template to create Presidential Alert memes." />
            <meta name="og:image" content="https://www.presidentialalert.app/static/images/logo/og-image.jpg" />
            <meta name="og:url" content="https://presidentialalert.app" />
            <meta name="og:site_name" content="PresidentialAlert.app" />
            <meta name="og:type" content="website" />

            <meta name="twitter:title" content="PresidentialAlert.app - Presidential alert generator" />
            <meta name="twitter:description" content="Create a custom Presidential Alert with our online image generator. A custom Presidential Alert template to create Presidential Alert memes." />
            <meta name="twitter:image" content="https://www.presidentialalert.app/static/images/logo/og-image.jpg" />
            <meta name="twitter:url" content="https://presidentialalert.app" />
            <meta name="twitter:site" content="PresidentialAlert.app" />
            <meta name="twitter:card" content="summary_large_image" />

            <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" rel="preload"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126969035-1" rel="preload"></script>

            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag() {dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-126969035-1');` }} />

            <link rel="stylesheet" type="text/css" href="/static/styles/styles.min.css" />
        </Head>
    </div>
);