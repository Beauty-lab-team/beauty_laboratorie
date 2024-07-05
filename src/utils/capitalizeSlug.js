export default function capitalizeSlug(slug) {
   if (slug == 'mikroholkovyy-rf-v-dnipri') return 'Mikroholkovyy-RF-v-Dnipri'
   let words = slug.split('-')
   if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
      if (words.length > 1) {
         words[words.length - 1] = words[words.length - 1].charAt(0).toUpperCase() + words[words.length - 1].slice(1)
      }
   }
   return words.join('-')
}
