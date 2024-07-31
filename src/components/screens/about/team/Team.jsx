import Heading from '../../../UI/Heading'
import Section from '../../../UI/Section'
import Employees from '../../../common/employees/Employees'
import getData from '../../../../utils/getData'

export default async function Team() {
   const { allData } = await getData('employee')

   return (
      <Section>
         <Heading>Нашi спецiалiсти</Heading>
         <Employees allEmployees={allData} />
      </Section>
   )
}
