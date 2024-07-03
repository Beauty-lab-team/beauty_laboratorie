import Showdown from 'showdown'
import Text from '../../../../components/UI/Text.jsx'
import Heading from '../../../../components/UI/Heading.jsx'
import Section from '../../../../components/UI/Section.jsx'
import LinkToPage from '../../../../components/UI/LinkToPage.jsx'
import { notFound } from 'next/navigation'
import { getDocumentSlugs, load } from 'outstatic/server'

export async function generateMetadata(params) {
   const service = await getData(params)

   if (!service) {
      return {}
   }

   return {
      title: service.title,
      description: service.description,
   }
}

export default async function ServiceArticle(params) {
   const service = await getData(params)
   console.log(service.content)

   return (
      <Section className='pt-[140px] lg:pt-[160px] max-w-5xl mx-auto'>
         <Heading className='tracking-normal'>{service.title}</Heading>
         <Text
            className='prose mb-10 max-w-5xl prose-headings:text-text-1 prose-li:marker:text-text-2 prose-strong:text-text-1 prose-h1:mt-12 prose-h1:text-4xl prose-video:rounded-basic prose-img:rounded-basic prose-video:max-w-2xl prose-img:max-w-2xl prose-video:w-full prose-img:w-full'
            dangerouslySetInnerHTML={{ __html: service.content }}
         ></Text>
         <LinkToPage className='w-full lg:w-auto block lg:inline-block text-center' link='/'>
            На головну
         </LinkToPage>
      </Section>
   )
}

async function getData({ params }) {
   const db = await load()

   const service = await db
      .find({ collection: 'services', slug: params.slug }, ['title', 'publishedAt', 'description', 'slug', 'author', 'content', 'coverImage', 'tags'])
      .first()

   if (!service) {
      notFound()
   }
   const converter = new Showdown.Converter()
   const content = converter.makeHtml(service.content)

   return {
      ...service,
      content,
   }
}

export async function generateStaticParams() {
   const services = getDocumentSlugs('services')
   return services.map(slug => ({ slug }))
}
