import { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import s from './Form.module.scss'

export default function Form({ handleClose }) {
   const [phone, setPhone] = useState('')
   const [name, setName] = useState('')
   const [description, setDescription] = useState('')
   const handleInput = ({ target: { value } }) => setPhone(value)

   const handlerSubmit = e => {
      e.preventDefault()
      const data = {
         name,
         phone,
         description,
      }

      setName('')
      setPhone('')
      setDescription('')
      handleClose ? handleClose(false) : null
   }

   return (
      <form className={s.form} onSubmit={handlerSubmit}>
         <div>
            <input value={name} onChange={e => setName(e.target.value)} name='name' id='name' type='text' placeholder="Ім'я" required />
            <ReactInputMask mask='(+38)999-999-99-99' value={phone} onChange={handleInput} placeholder='Номер телефону' aria-label='Номер телефону' />
         </div>
         <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            name='description'
            id='description'
            cols='40'
            rows='6'
            placeholder='Коментар'
            required
         ></textarea>
         <input className={s.submit} type='submit' value='Відправити заявку' />
      </form>
   )
}
