import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Text from '../../../UI/Text'
import Employees from '../../../common/employees/Employees'

export default function About() {
   return (
      <Section className='grid grid-cols-1 lg:grid-cols-10 gap-10 justify-between relative'>
         <div className='lg:col-span-4'>
            <Heading>Про нас</Heading>
            <Text>
               Студія краси Beauty.laboratorie надає широкий спектр послуг естетичної, апаратної, лазерної та інʼєкційної косметології.
               <br />
               <br />
               Ми працюємо на результат і маємо понад 100 задоволених клієнтів. Ми піклуємося про ваш комфорт і пропонуємо затишну атмосферу та
               чашечку кави чи чаю.
               <br />
               <br />
               Ми завжди раді вам.
               <br />
               Пн-Сб: 10:00 - 19:00, Нд: вихідний
            </Text>
         </div>
         <div className='lg:col-span-6'>
            <Employees />
         </div>
         <svg
            className='absolute -bottom-[130px] sm:-bottom-[160px] lg:bottom-[200px] left-0 w-full lg:w-[500px]'
            width='1478'
            height='202'
            viewBox='0 0 1478 202'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
         >
            <path
               className='fill-accent-1'
               fill-rule='evenodd'
               clip-rule='evenodd'
               d='M701.126 0.512073C609.281 4.73748 432.93 43.5802 267.046 96.1214C253.669 100.359 236.046 105.944 227.884 108.534C117.82 143.457 58.6269 165.48 17.1935 186.924C1.02325 195.294 -0.365967 196.309 0.0619299 199.436C0.686873 203.999 3.31774 203.294 33.3224 190.525C64.3709 177.312 92.1999 167.718 168.522 143.915C423.607 64.36 542.75 35.1951 676.392 19.5955C702.58 16.5383 744.41 17.0707 744.41 20.4607C744.41 24.9891 718.174 40.4325 657.429 71.6606C582.699 110.079 537.206 135.564 533.177 141.266C526.292 151.01 533.864 158.041 550.249 157.119C559.611 156.593 561.738 156.194 604.663 146.923C727.908 120.302 806.675 106.792 913.425 93.9609C1075.99 74.421 1179.57 67.2125 1374.3 61.8847C1444.27 59.9708 1447.89 59.7037 1460.81 55.5132C1465.78 53.898 1471.73 52.3194 1474.02 52.0046C1479.39 51.2682 1479.32 50.3262 1473.85 49.6316C1471.47 49.3287 1466 47.8833 1461.69 46.4191C1451.07 42.8089 1444.03 42.6203 1383.37 44.32C1180.01 50.0173 1073.01 57.3034 917.96 76.0106C836.414 85.8489 800.079 91.1946 740.7 102.089C700.107 109.537 592.961 131.218 577.952 135.021C569.762 137.096 605.311 117.521 667.75 85.5715C746.733 45.157 762.457 34.1806 762.53 19.4147C762.613 2.76387 748.257 -1.65524 701.126 0.512073Z'
               fill='black'
            />
         </svg>
      </Section>
   )
}
