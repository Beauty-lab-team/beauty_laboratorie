import Image from 'next/image'
import Heading from '../../../components/UI/Heading'
import Section from '../../../components/UI/Section'
import s from '../../../components/screens/contacts/Contacts.module.scss'
import Contacts from '../../../components/common/contacts/Contacts'

export const metadata = {
   title: 'Контакти',
}

export default function ContactsPage() {
   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>Як нас знайти?</Heading>
         <div className={s.videoWrap}>
            <video src='/clinic/як-знайти.mp4' controls muted playsInline autoPlay />
            <Image src='/info.svg' width={600} height={600} alt='info' />
         </div>
         <Contacts />
      </Section>
   )
}
