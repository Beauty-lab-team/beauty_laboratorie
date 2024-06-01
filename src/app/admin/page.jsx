'use client'
import LinkToPage from '../../components/UI/LinkToPage'
import Section from '../../components/UI/Section'

export default function AdminPage() {
   return (
      <Section className='container px-3 md:px-12'>
         <LinkToPage link='/'>Повернутися на головну</LinkToPage>
      </Section>
   )
}
