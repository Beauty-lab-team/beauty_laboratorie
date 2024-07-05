import { load } from 'outstatic/server'

export async function getData() {
   const db = await load()

   const allServices = await db.find({ collection: 'services' }, ['title', 'slug', 'content', 'coverImage', 'description', 'tag']).toArray()

   return {
      allServices,
   }
}
