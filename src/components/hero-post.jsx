import Link from 'next/link'

export default function HeroPost({ name, desc, prices, img, slug }) {
   console.log('hero-post', name, desc, prices, img, slug)
   return (
      <section>
         <h3 className='text-4xl font-bold'>{name}</h3>
         <div className='mb-8 md:mb-16'>
            <img src={img.sourceUrl} alt={img.altText} />
         </div>
         <div>
            <p className='text-lg leading-relaxed mb-4'>{desc}</p>
            <p className='text-lg leading-relaxed mb-4'>{prices}</p>
         </div>
      </section>
   )
}
