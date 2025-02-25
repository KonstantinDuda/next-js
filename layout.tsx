import '@/app/ui/global.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import TopMenu from './menu/top-menu';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Мій підручник</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.92" />
        <link rel="stylesheet" 
          href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <ThemeProvider 
          themes={['light', 'dark', 'myown']}
          defaultTheme="dark"
        >
          <TopMenu>          
            {children}
          </TopMenu>
        </ThemeProvider>
      </body>
    </html>
  );
}