'use client'
import s from './Modal.module.scss'
import { motion } from 'framer-motion'

export default function Modal({ open, children, handleClose }) {
   return (
      <motion.div
         className={s.modalBlock}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={open ? { opacity: 1, scale: 1, pointerEvents: 'auto' } : {}}
         transition={{
            duration: 0.3,
            type: 'spring',
            ease: 'easeOut',
         }}
      >
         <div className={s.backdrop} onClick={() => handleClose(false)}></div>
         <div className={`${s.modal} ${open ? s.open : ''}`}>
            <div className={s.content}>{children}</div>
         </div>
      </motion.div>
   )
}
