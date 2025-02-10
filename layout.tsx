import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Мій підручник</title>
      </head>
      <body>{children}</body>
    </html>
  );
}