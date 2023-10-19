import s from './Footer.module.scss'

export default function Footer() {
   return (
      <footer className={s.footer}>
         <div className={s.content}>
            <div className={s.contacts}>
               <div className={s.location}>
                  <p>Ми знаходимося за адресою:</p>
                  <a href="https://www.google.com/maps/place/Dmytra+Yavornytskoho+Ave,+72%D0%B1,+Dnipro,+Dnipropetrovs'ka+oblast,+Ukraine,+49000/@48.4706639,35.0328847,17z/data=!3m1!4b1!4m6!3m5!1s0x40dbe2e555b23623:0x2469c4a31d693eae!8m2!3d48.4706639!4d35.0354596!16s%2Fg%2F11c4ntq5m1?entry=ttu">
                     пр. Д. Яворницького 72Б, Днiпро
                  </a>
               </div>
               <div className={s.tel}>
                  <p>Наш телефон:</p>
                  <a href='tel:+380675949525'>+38(067)594-95-25</a>
                  <a href='tel:+380954863561'>+38(095)486-35-61</a>
               </div>
            </div>
            <div className={s.social}>
               <p>Соцмережі:</p>
               <div>
                  <a href='https://www.facebook.com/profile.php?id=100026693756002'>
                     <img src='/icons/facebook.svg' alt='facebook' />
                  </a>
                  <a href='https://instagram.com/beauty.laboratorie?igshid=MzRlODBiNWFlZA=='>
                     <img src='/icons/instagram.svg' alt='instagram' />
                  </a>
                  <a href='https://instagram.com/rozbeiko_cosmetolog?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr'>
                     <img src='/icons/instagram.svg' alt='instagram' />
                  </a>
               </div>
            </div>
         </div>
         <div className={s.bottom}>
            <p>© {new Date().getFullYear()} Beauty Laboratorie</p>
         </div>
      </footer>
   )
}
