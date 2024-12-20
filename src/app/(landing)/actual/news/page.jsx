import NewsList from '../../../../components/common/news/NewsList'
import Heading from '../../../../components/UI/Heading'
import Section from '../../../../components/UI/Section'

export default function News() {
   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading level='2'>Новини</Heading>
         <NewsList />
      </Section>
   )
}
