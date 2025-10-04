import React from 'react';

export const metadata = {
  title: 'CSS A-05',
  description: 'CSS Animation Assignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
