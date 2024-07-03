import { notFound } from 'next/navigation'
import { getDocumentSlugs, load } from 'outstatic/server'

export default async function Index(params) {
   const service = await getData(params)

   return (
      <div>
         <h1 className='text-5xl mt-20'>{service.title}</h1>
         <img src={service.coverImage} alt={service.title} />
      </div>
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

   return {
      ...service,
   }
}

export async function generateStaticParams() {
   const services = getDocumentSlugs('services')
   return services.map(slug => ({ slug }))
}
