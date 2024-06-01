import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const authOptions = {
   secret: process.env.NEXTAUTH_SECRET,
   providers: [
      Credentials({
         name: 'Credentials',
         credentials: {
            username: { label: 'Username', type: 'text', required: true },
            password: { label: 'Password', type: 'password', required: true },
         },
         async authorize(credentials) {
            if (credentials.username == 'admin' && credentials.password == 'admin') return { name: 'Admin', email: 'admin@gmail.com' }

            return null
         },
      }),
   ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
