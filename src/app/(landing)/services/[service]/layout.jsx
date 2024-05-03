import { data } from '../../../../data.js'

export async function generateMetadata({ params }) {
   const { service } = params
   const obj = data.services.find(el => el.link == service)
   return {
      title: obj.categoryMain,
      description: obj.text,
   }
}

export default function ServiceLayout({ children }) {
   return <div>{children}</div>
}
