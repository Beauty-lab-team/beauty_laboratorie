import CardHeading from '../../UI/CardHeading'
import LinkToPage from '../../UI/LinkToPage'
import Text from '../../UI/Text'
import s from './News.module.scss'

export default function NewsCard({ link, title, description, image }) {
   return (
      <div className={s.newsCard}>
         <CardHeading>{title}</CardHeading>
         <Text className='line-clamp-5'>{description}</Text>
         <img src={image} alt='' />
         <div>
            <LinkToPage link={`news/${link.toString()}`} className='px-5 py-2'>
               Детальніше
            </LinkToPage>
            <span>18 вересня 2023</span>
         </div>
      </div>
   )
}

// const data = [
//    {
//       categoryMain: "Ін'єкції краси",
//       subcategories: [
//          {
//             name: 'Gana V',
//             services: [
//                {
//                   time: 120,
//                   price: {
//                      standard: 21000,
//                   },
//                   description: 'Полімолочна кислота',
//                },
//             ],
//          },
//          {
//             name: 'Ботулотоксин',
//             services: [
//                {
//                   time: 10,
//                   price: {
//                      male: 2400,
//                      female: 1600,
//                   },
//                   description: 'Описание 2',
//                },
//                {
//                   time: 30,
//                   price: {
//                      standard: 1300,
//                   },
//                   description: 'Описание 2',
//                },
//                {
//                   time: 30,
//                   price: {
//                      male: 2400,
//                      female: 1600,
//                   },
//                   description: 'Описание 2',
//                },
//             ],
//          },
//       ],
//    },
//    {
//       categoryMain: 'RF-ліфтинг',
//       services: [
//          {
//             time: 45,
//             price: {
//                standard: 1100,
//             },
//             description: 'A',
//          },
//          {
//             time: 45,
//             price: {
//                standard: 1250,
//             },
//             description: 'B',
//          },
//          {
//             time: 30,
//             price: {
//                standard: 950,
//             },
//             description: 'C',
//          },
//       ],
//    },
// ]
