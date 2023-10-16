import { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import s from './Form.module.scss'
import Button from '../../UI/Button'

export default function Form({ handleClose }) {
   const [phone, setPhone] = useState('')
   const [name, setName] = useState('')
   const [description, setDescription] = useState('')
   const [errors, setErrors] = useState({})

   const token = '6636841061:AAF7wnWZbg5DDsvnd79KX7v9wBnw_GCRq4o'
   const chatId = '979872254'
   // const chatId = '573909735'

   const handleInput = ({ target: { value } }) => setPhone(value)

   const validate = () => {
      const errors = {}
      if (!name.trim()) {
         errors.name = "Ім'я не може бути порожнім"
      }
      if (!phone.trim()) {
         errors.phone = 'Введіть номер телефону'
      } else if (!/^\(\+38\)\d{3}-\d{3}-\d{2}-\d{2}$/.test(phone)) {
         errors.phone = 'Невірний формат номеру телефону'
      }
      if (!description.trim()) {
         errors.description = 'Коментар не може бути порожнім'
      }
      return errors
   }

   const handleBlur = ({ target: { name } }) => {
      const errors = validate()
      if (errors[name]) {
         setErrors(prevErrors => ({ ...prevErrors, [name]: errors[name] }))
      } else {
         setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
      }
   }

   const handlerSubmit = e => {
      e.preventDefault()
      const errors = validate()
      if (Object.keys(errors).length) {
         setErrors(errors)
         return
      }
      const data = `Ім'я: ${name.trim()}%0AТелефон: ${phone}%0AКоментар: ${description.trim()}`
      // const data = `
      //    Ім'я: ${name.trim()}
      //    Телефон: <a href="tel:${phone}">${phone}</a>
      //    Коментар: ${description.trim()}
      // `

      fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data}`)
         .then(res => {
            alert('Ваша заявка успішно відправлена')

            setName('')
            setPhone('')
            setDescription('')
            setErrors({})
            handleClose ? handleClose(false) : null
         })
         .catch(error => {
            console.error(error)
            alert('Виникла помилка, спробуйте ще раз')
         })
   }

   return (
      <form className={s.form} onSubmit={handlerSubmit}>
         <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
            <div className='w-full flex flex-col gap-[5px] md:gap-[10px]'>
               {errors.name && <span className={s.error}>{errors.name}</span>}
               <input value={name} onChange={e => setName(e.target.value)} onBlur={handleBlur} name='name' id='name' type='text' placeholder="iм'я" />
            </div>
            <div className='w-full flex flex-col gap-[5px] md:gap-[10px]'>
               {errors.phone && <span className={s.error}>{errors.phone}</span>}
               <ReactInputMask
                  mask='(+38)999-999-99-99'
                  value={phone}
                  onChange={handleInput}
                  onBlur={handleBlur}
                  inputMode='tel'
                  placeholder='Номер телефону'
                  aria-label='Номер телефону'
               />
            </div>
         </div>
         {errors.description && <span className={s.error}>{errors.description}</span>}
         <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            onBlur={handleBlur}
            name='description'
            id='description'
            cols='40'
            rows='6'
            placeholder='Коментар'
         ></textarea>
         <Button type='submit'>Вiдправити заявку</Button>
      </form>
   )
}
