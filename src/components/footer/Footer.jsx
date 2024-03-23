import s from './Footer.module.scss'

export default function Footer() {
   return (
      <footer className={s.footer}>
         <div className={s.content}>
            <iframe
               className={s.map}
               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.263252658882!2d35.035459599999996!3d48.4706639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2e555b23623%3A0x2469c4a31d693eae!2sDmytra%20Yavornytskoho%20Ave%2C%2072%D0%B1%2C%20Dnipro%2C%20Dnipropetrovs&#39;ka%20oblast%2C%20Ukraine%2C%2049000!5e0!3m2!1sen!2spl!4v1704750692907!5m2!1sen!2spl'
               loading='lazy'
               referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
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
         </div>
         <div className={s.bottom}>
            <p>© {new Date().getFullYear()} Beauty Laboratorie</p>
         </div>
      </footer>
   )
}
