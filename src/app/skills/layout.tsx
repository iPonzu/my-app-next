import type { Metadata } from 'next'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'SkillsScreen',
  description: 'showing softskills and programming languages',
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link 
          rel='icon' 
          href='/images/iconSkills.ico' 
          sizes='any' 
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}