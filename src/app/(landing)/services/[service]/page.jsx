'use client'
import Showdown from 'showdown'
import { data } from '../../../../data.js'
import { useEffect, useState } from 'react'
import Text from '../../../../components/UI/Text'
import Heading from '../../../../components/UI/Heading'
import Section from '../../../../components/UI/Section'
import LinkToPage from '../../../../components/UI/LinkToPage.jsx'

export default function Service({ params }) {
   const { service } = params
   const [content, setContent] = useState('')

   const obj = data.services.find(el => el.link == service)
   const { categoryMain, text } = obj
   let html

   useEffect(() => {
      window.scrollTo(0, 0)

      if (text) {
         const converter = new Showdown.Converter()
         html = converter.makeHtml(text)
         setContent(html)
      }
   }, [])

   return (
      <Section className='pt-[140px] lg:pt-[160px] max-w-5xl mx-auto'>
         <Heading>{categoryMain}</Heading>
         <Text
            className='prose mb-10 max-w-5xl prose-headings:text-text-1 prose-li:marker:text-text-2 prose-strong:text-text-1 prose-h1:mt-12 prose-h1:text-4xl prose-video:rounded-basic prose-img:rounded-basic prose-video:max-w-2xl prose-img:max-w-2xl prose-video:w-full prose-img:w-full'
            dangerouslySetInnerHTML={{ __html: content }}
         ></Text>
         <LinkToPage className='w-full lg:w-auto block lg:inline-block text-center' link='/'>
            Головна
         </LinkToPage>
      </Section>
   )
}
