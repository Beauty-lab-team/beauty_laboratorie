import Reviews from '../../components/common/reviews/Reviews'
import Benefits from '../../components/screens/home/benefits/Benefits'
import Laser from '../../components/screens/home/laser/Laser'
import ServicesHome from '../../components/screens/home/services/ServicesHome'
import Welcome from '../../components/screens/home/welcome/Welcome'
import About from '../../components/screens/home/about/About'
import Hero from '../../components/screens/home/hero/Hero'

export const metadata = {
   title: "Б'юті лабораторія у Дніпрі - якісна лазерна епіляція та догляд за тілом",
   description:
      "Косметологічна студія Beauty.laboratorie - це центр краси та здоров'я де ви отримаєте професійний комплексний догляд за обличчям та тілом.",
   keywords:
      "Б'юті лабораторія у Дніпрі - якісна лазерна епіляція та догляд за тілом косметологічна студія Beauty laboratorie центр краси та здоров'я де ви отримаєте професійний комплексний догляд за обличчям та тілом для чоловіків жінок за волоссям антівікові програми та ефективні процедури у центрі міста Дніпро правий берег косметолог у Дніпрі консультація запис на прийом Оксана Розбейко.",
}

export default function Home() {
   return (
      <>
         <Hero />
         <ServicesHome />
         <Welcome />
         <About />
         <Laser />
         <Benefits />
         <Reviews />
      </>
   )
}
