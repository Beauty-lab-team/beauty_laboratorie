import Showdown from 'showdown'
import Text from '../../../../components/UI/Text.jsx'
import Heading from '../../../../components/UI/Heading.jsx'
import Section from '../../../../components/UI/Section.jsx'
import LinkToPage from '../../../../components/UI/LinkToPage.jsx'
import { getDocumentSlugs, load } from 'outstatic/server'
import capitalizeSlug from '../../../../utils/capitalizeSlug.js'
import { redirect } from 'next/navigation.js'

export async function generateMetadata(params) {
   const service = await getData(params)

   if (!service) return {}

   return {
      title: service.title,
      description: service.description,
   }
}

export default async function ServiceArticle(params) {
   const service = await getData(params)

   return (
      <Section className='pt-[140px] lg:pt-[160px] max-w-5xl mx-auto'>
         <Heading level='1' className='tracking-normal'>
            {service.title}
         </Heading>
         {service.isVideo && (
            <video
               src='/articles/мікроголковий-РФ/Mikroholkovyy-RF-y-Dnipri.mp4'
               controls
               autoPlay
               muted
               loop
               className='w-full lg:w-1/2 rounded-basic mb-8 mt-6'
            ></video>
         )}
         <Text
            className='prose mb-10 max-w-5xl prose-headings:text-text-1 prose-li:marker:text-text-2 prose-strong:text-text-1 prose-a:text-text-1 prose-a:underline prose-h1:mt-12 prose-h1:text-4xl prose-video:rounded-basic prose-img:rounded-basic prose-video:max-w-2xl prose-img:max-w-2xl prose-video:w-full prose-img:w-full'
            dangerouslySetInnerHTML={{ __html: service.content }}
         ></Text>
         {service.isVideo && (
            <video src='/equipment/Мікроголковий_РФ.mp4' controls autoPlay muted loop className='w-full lg:w-1/3 rounded-basic mb-8 mt-6'></video>
         )}
         <LinkToPage className='w-full lg:w-auto block lg:inline-block text-center' link='/'>
            На головну
         </LinkToPage>
      </Section>
   )
}

async function getData({ params }) {
   const db = await load()
   const service = await db
      .find({ collection: 'services', slug: params.slug.toLowerCase() }, [
         'title',
         'publishedAt',
         'description',
         'slug',
         'author',
         'content',
         'coverImage',
         'tags',
      ])
      .first()

   if (!service) redirect('/')

   const converter = new Showdown.Converter()
   const content = converter.makeHtml(service.content)
   let isVideo = false

   if (service.slug === 'mikroholkovyy-rf-v-dnipri') {
      isVideo = true
   }

   return {
      ...service,
      content,
      isVideo,
   }
}

export function getStaticPaths() {
   const services = getDocumentSlugs('services')
   const paths = services.map(slug => ({
      params: { slug: capitalizeSlug(slug) },
   }))
   return { paths, fallback: false }
}

export function generateStaticParams() {
   const services = getDocumentSlugs('services')
   const paths = services.map(slug => capitalizeSlug(slug))
   return paths
}
