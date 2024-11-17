import Script from 'next/script'
import '../styles/index.css'

export default async function RootLayout({ children }) {
   return (
      <html lang='uk'>
         <head>
            <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
            <link rel='manifest' href='favicon/site.webmanifest' />
            <meta name='msapplication-TileColor' content='#fdf2f8c6' />
            <meta name='theme-color' content='#fdf2f8c6' />
         </head>
         <body>
            {children}
            <noscript>
               <iframe
                  src='https://www.googletagmanager.com/ns.html?id=GTM-TMXL8BJ8'
                  height='0'
                  width='0'
                  style={{ display: 'none', visibility: 'hidden' }}
               ></iframe>
            </noscript>
            <Script id='hydro_config' type='text/javascript'>
               {`window.Hydro_tagId = "87e38291-1be9-4043-8924-42a06aaf670a";`}
            </Script>
            <Script id='hydro_script' src='https://track.hydro.online/'></Script>
            {/* Google tag (gtag.js) */}
            <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-YL1YTBH7PV' />
            <Script id='google-analytics' strategy='afterInteractive'>
               {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-YL1YTBH7PV');
               `}
            </Script>
         </body>
      </html>
   )
}
