import { load } from 'outstatic/server'
import Heading from '../../../UI/Heading'
import Section from '../../../UI/Section'
import Employees from '../../../common/employees/Employees'

export default async function Team() {
   const { allEmployees } = await getData()

   return (
      <Section>
         <Heading>Нашi спецiалiсти</Heading>
         <Employees allEmployees={allEmployees} />
      </Section>
   )
}

async function getData() {
   const db = await load()

   const allEmployees = (
      await db.find({ collection: 'employee' }, ['title', 'content', 'coverImage', 'skill']).sort({ publishedAt: -1 }).toArray()
   ).reverse()

   return {
      allEmployees,
   }
}
