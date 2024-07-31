import { load } from 'outstatic/server'

export default async function getData(collection = 'services') {
   const db = await load()

   const allData = await db
      .find({ collection: collection }, ['title', 'slug', 'content', 'coverImage', 'description', 'tag', 'publishedAt', 'skill'])
      .sort(collection == 'news' ? [{ publishedAt: -1 }] : '')
      .toArray()

   return {
      allData,
   }
}
