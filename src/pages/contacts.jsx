import Layout from '../components/seo/Layout'
import ContactsPage from '../components/screens/contacts/ContactsPage'

export default function Contacts() {
   return (
      <Layout
         title='BEAUTY.LABORATORIE | Контакти'
         description="Косметична студія 'Beauty.laboratorie' - це центр краси та здоров'я у Дніпрі. Зв'яжіться з нами, щоб дізнатися більше про наші послуги та записатися на консультацію."
      >
         <ContactsPage />
      </Layout>
   )
}
