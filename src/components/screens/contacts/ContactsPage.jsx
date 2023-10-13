import Image from 'next/image'
import Section from '../../UI/Section'
import Appointment from '../../common/appointment/Appointment'
import Heading from '../../UI/Heading'
export default function ContactsPage() {
   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>Як нас знайти</Heading>
         <video className='w-full h-auto rounded-basic' src='/clinic/як-знайти.mp4' controls muted />
         <Image className='mt-24 md:mt-44' src='/info.svg' width={600} height={600} alt='info' />
         <Appointment />
      </Section>
   )
}
