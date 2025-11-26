import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Taufik Januar - Backend Developer</title>
        <meta name="description" content="Backend developer specializing in scalable systems and high-performance APIs" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta property="og:title" content="Taufik Januar - Backend Developer" />
        <meta property="og:description" content="Backend developer specializing in scalable systems and high-performance APIs" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Taufik Januar - Backend Developer" />
        <meta name="twitter:description" content="Backend developer specializing in scalable systems and high-performance APIs" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Performance optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* DNS prefetch for external links */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//instagram.com" />
        <link rel="dns-prefetch" href="//hub.docker.com" />
      </head>
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}