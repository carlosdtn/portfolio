import Header from '@/components/layout/header/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Footer from '@/components/layout/footer';

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Carlos Tarmeño - Front-end Developer',
  description:
    "Explore Carlos Tarmeño's portfolio showcasing frontend development expertise."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, 'min-h-screen bg-cd-dark-blue')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
