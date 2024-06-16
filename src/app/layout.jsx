import Script from 'next/script'
import SessionProvider from '../components/SessionProvider'
import '../styles/index.css'

export const metadata = {
   title: {
      template: '%s | BEAUTY.LABORATORIE',
      default: 'BEAUTY.LABORATORIE',
   },
   description:
      "Косметична студія 'Beauty.laboratorie' - це центр краси та здоров'я у Дніпрі. Ми пропонуємо широкий спектр косметологічних послуг для чоловіків та жінок, включаючи догляд за обличчям, тілом, волоссям та нігтями. Наші фахівці з багаторічним досвідом роботи допоможуть вам зберегти молодість та красу",
}

export default async function RootLayout({ children }) {
   return (
      <html lang='uk'>
         <head>
            <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
            <link rel='manifest' href='favicon/site.webmanifest' />
            <link rel='mask-icon' href='favicon/safari-pinned-tab.svg' color='#5bbad5' />
            <meta name='msapplication-TileColor' content='#fdf2f8c6' />
            <meta name='theme-color' content='#fdf2f8c6' />
         </head>
         <body>
            <SessionProvider>{children}</SessionProvider>
            <noscript>
               <iframe
                  src='https://www.googletagmanager.com/ns.html?id=GTM-TMXL8BJ8'
                  height='0'
                  width='0'
                  style={{ display: 'none', visibility: 'hidden' }}
               ></iframe>
            </noscript>
            <Script id='hydro_config' type='text/javascript'>
               window.Hydro_tagId = "87e38291-1be9-4043-8924-42a06aaf670a";
            </Script>
            <Script id='hydro_script' src='https://track.hydro.online/'></Script>
            <Script id='google-analytics'>
               {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TMXL8BJ8');`}
            </Script>
         </body>
      </html>
   )
}
