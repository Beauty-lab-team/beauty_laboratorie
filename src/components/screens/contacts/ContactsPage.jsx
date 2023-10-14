import Image from 'next/image'
import Section from '../../UI/Section'
import Appointment from '../../common/appointment/Appointment'
import Heading from '../../UI/Heading'
export default function ContactsPage() {
   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>Як нас знайти</Heading>
         <div className='md:grid grid-cols-3 gap-10 items-center'>
            <video className='order-1 md:order-2 w-full h-auto rounded-basic' src='/clinic/як-знайти.mp4' controls muted autoPlay />
            <Image className='order-2 md:order-1 mt-12 md:mt-0 col-span-2 md:w-[85%]' src='/info.svg' width={600} height={600} alt='info' />
         </div>
         <Appointment />
      </Section>
   )
}
