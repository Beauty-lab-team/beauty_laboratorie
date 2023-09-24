import s from './Modal.module.scss'

export default function Modal({ open, children, handleClose }) {
   return (
      <div className={`${s.modalBlock} ${open ? s.show : ''}`}>
         <div className={s.backdrop} onClick={() => handleClose(false)}></div>
         <div className={s.modal}>
            <div className={s.content}>{children}</div>
         </div>
      </div>
   )
}
