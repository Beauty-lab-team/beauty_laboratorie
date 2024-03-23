// import { useEffect } from 'react'
// import Section from '../../UI/Section'
// import Heading from '../../UI/Heading'

// function Instagram() {
//    useEffect(() => {
//       function getInstagramFeed() {
//          fetch(
//             `https://graph.instagram.com/v12.0/beauty_laboratorie/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${process.env.INSTA}`
//          )
//             .then(response => response.json())
//             .then(data => {
//                const feedContainer = document.getElementById('instagram-feed')

//                data.data.forEach(post => {
//                   const postLink = document.createElement('a')
//                   postLink.href = post.permalink
//                   postLink.target = '_blank'

//                   const postImage = document.createElement('img')
//                   postImage.src = post.media_url
//                   postImage.alt = post.caption

//                   postLink.appendChild(postImage)
//                   feedContainer.appendChild(postLink)
//                })
//             })
//             .catch(error => console.error(error))
//       }

//       getInstagramFeed()
//    }, [])

//    return (
//       <Section>
//          <Heading>Наш instagram</Heading>
//       </Section>
//    )
// }

// export default Instagram
