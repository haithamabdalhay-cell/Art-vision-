import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Art Vision | Premium Marketing Agency',
  description: 'Art Vision premium marketing agency one-page landing page.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
