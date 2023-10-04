import Head from 'next/head'

export default function Meta({ title, description }) {
   return (
      <Head>
         <title>{title}</title>
         {description ? <meta name='description' content={description} /> : null}
         <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
         <link rel='icon' href='/favicon.ico' />
         <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
         <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
         <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
         <link rel='manifest' href='/site.webmanifest' />
      </Head>
   )
}
