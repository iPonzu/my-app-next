import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ProjectScreen',
  description: 'showing projects and their details',
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
          href='/images/iconProjects.ico' 
          sizes='any' 
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}