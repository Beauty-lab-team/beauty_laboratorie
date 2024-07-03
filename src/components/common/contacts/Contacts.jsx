import s from '../../screens/contacts/Contacts.module.scss'

export default function Contacts() {
   return (
      <div className={s.contacts}>
         <div className={s.tel}>
            <p>Наш телефон:</p>
            <a rel='nofollow' href='tel:+380675949525'>
               +38(067)594-95-25
            </a>
            <a rel='nofollow' href='tel:+380954863561'>
               +38(095)486-35-61
            </a>
         </div>
         <div className={s.social}>
            <p>Соцмережі:</p>
            <div>
               <a rel='nofollow' href='https://www.facebook.com/profile.php?id=100026693756002'>
                  <img src='/icons/facebook.svg' alt='facebook' />
               </a>
               <a rel='nofollow' href='https://instagram.com/beauty.laboratorie?igshid=MzRlODBiNWFlZA=='>
                  <img src='/icons/instagram.svg' alt='instagram' />
               </a>
            </div>
         </div>
      </div>
   )
}
