import Footer from '../footer/Footer'
import Meta from './Meta'
import Navbar from '../navbar/Navbar'
import Script from 'next/script'

export default function Layout({ title, description, children }) {
   return (
      <>
         <Meta title={title} description={description} />
         <noscript>
            <iframe
               src='https://www.googletagmanager.com/ns.html?id=GTM-TMXL8BJ8'
               height='0'
               width='0'
               style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
         </noscript>
         <Script id='google-analytics'>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TMXL8BJ8');`}
         </Script>
         <div className='app flex flex-col min-h-screen overflow-hidden'>
            <Navbar />
            <div className='container mx-auto px-3 md:px-12 flex-1 mb-[100px] md:mb-[120px]'>{children}</div>
            <Footer />
         </div>
      </>
   )
}
