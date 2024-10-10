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
            <link rel='mask-icon' href='favicon/safari-pinned-tab.svg' color='#5bbad5' />
            <meta name='msapplication-TileColor' content='#fdf2f8c6' />
            <meta name='theme-color' content='#fdf2f8c6' />
            <meta
               name='description'
               content="Косметологічна студія Beauty.laboratorie - це центр краси та здоров'я де ви отримаєте професійний комплексний догляд за обличчям та тілом."
            />
            <meta
               name='keywords'
               content="Б'юті лабораторія у Дніпрі - якісна лазерна епіляція та догляд за тілом косметологічна студія Beauty laboratorie центр краси та здоров'я де ви отримаєте професійний комплексний догляд за обличчям та тілом для чоловіків жінок за волоссям антівікові програми та ефективні процедури у центрі міста Дніпро правий берег косметолог у Дніпрі консультація запис на прийом Оксана Розбейко."
            />
            <title>Б'юті лабораторія у Дніпрі - якісна лазерна епіляція та догляд за тілом</title>
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
