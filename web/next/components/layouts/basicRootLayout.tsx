import Link from 'next/link';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode,
}) {
 return (
  <html lang="en">
   <head>
    <title>Next Layout Example</title>
   </head>
   <body>
    <header>
     <nav>
      <Link href="/">Home</Link>
      <Link href="/games">Games</Link>
     </nav>
    </header>
    <div>{children}</div>
   </body>
  </html>
 );
}