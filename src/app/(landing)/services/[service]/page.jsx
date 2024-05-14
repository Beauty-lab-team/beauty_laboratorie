'use client'
import Showdown from 'showdown'
import { data } from '../../../../data.js'
import { useEffect, useState } from 'react'
import Text from '../../../../components/UI/Text'
import Heading from '../../../../components/UI/Heading'
import Section from '../../../../components/UI/Section'

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
      <Section className='pt-[140px] lg:pt-[160px] max-w-2xl mx-auto'>
         <Heading>{categoryMain}</Heading>
         <Text
            className='prose prose-headings:text-text-1 prose-li:marker:text-text-2 prose-strong:text-text-1 prose-h1:mt-12 prose-h1:text-4xl prose-video:rounded-basic prose-img:rounded-basic prose-video:max-w-lg prose-img:max-w-lg'
            dangerouslySetInnerHTML={{ __html: content }}
         ></Text>
      </Section>
   )
}
