'use client'
import Showdown from 'showdown'
import { data } from '../../../../data.js'
import { useEffect, useState } from 'react'
import Text from '../../../../components/UI/Text'
import Heading from '../../../../components/UI/Heading'

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
      <div>
         <Heading className='mt-20 text-4xl'>{categoryMain}</Heading>
         <Text
            className='prose prose-headings:text-text-1 prose-li:marker:text-text-2 prose-h1:mt-12 prose-h1:text-4xl'
            dangerouslySetInnerHTML={{ __html: content }}
         ></Text>
      </div>
   )
}
