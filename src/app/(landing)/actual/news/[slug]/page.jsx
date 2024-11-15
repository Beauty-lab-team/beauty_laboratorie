import Showdown from 'showdown'
import Text from '../../../../../components/UI/Text.jsx'
import Heading from '../../../../../components/UI/Heading.jsx'
import Section from '../../../../../components/UI/Section.jsx'
import LinkToPage from '../../../../../components/UI/LinkToPage.jsx'
import { getDocumentSlugs, load } from 'outstatic/server'
import capitalizeSlug from '../../../../../utils/capitalizeSlug.js'
import { format } from 'date-fns'
import ukLocale from 'date-fns/locale/uk'
import { redirect } from 'next/navigation.js'

export async function generateMetadata(params) {
   const news = await getData(params)

   if (!news) return {}

   return {
      title: news.title,
      description: news.description,
   }
}

export default async function News(params) {
   const news = await getData(params)

   const formattedDate = format(new Date(news.publishedAt), 'dd MMMM yyyy', { locale: ukLocale })

   return (
      <Section className='pt-[140px] lg:pt-[160px] max-w-5xl mx-auto'>
         <Heading className='tracking-normal'>{news.title}</Heading>
         <Text
            className='prose mb-10 max-w-5xl prose-headings:text-text-1 prose-li:marker:text-text-2 prose-strong:text-text-1 prose-a:text-text-1 prose-a:underline prose-h1:mt-12 prose-h1:text-4xl prose-video:rounded-basic prose-img:rounded-basic prose-video:max-w-2xl prose-img:max-w-2xl prose-video:w-full prose-img:w-full'
            dangerouslySetInnerHTML={{ __html: news.content }}
         ></Text>
         <Text className='italic mb-3'>{formattedDate}</Text>
         <LinkToPage className='w-full lg:w-auto block lg:inline-block text-center' link='/'>
            На головну
         </LinkToPage>
      </Section>
   )
}

async function getData({ params }) {
   const db = await load()
   const news = await db
      .find({ collection: 'news', slug: params.slug.toLowerCase() }, ['title', 'publishedAt', 'description', 'slug', 'content', 'coverImage'])
      .first()

   if (!news) redirect('/')

   const converter = new Showdown.Converter()
   const content = converter.makeHtml(news.content)
   return {
      ...news,
      content,
   }
}

export async function generateStaticParams() {
   const newss = getDocumentSlugs('news')
   const capSlugs = newss.map(slug => capitalizeSlug(slug))
   return capSlugs.map(slug => ({ slug }))
}
