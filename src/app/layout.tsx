import Header from '@/components/layout/header/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Footer from '@/components/layout/footer';
import { Analytics } from '@/components/analytics/analytics';
import { ServerThemeProvider } from '@wits/next-themes';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Carlos Tarmeño - Frontend Developer',
  description:
    "Welcome to my portfolio! I'm Carlos Tarmeño, a dedicated Frontend Developer. Explore the projects and experiences that showcase my passion for creating engaging and responsive web solutions. Let's build something extraordinary together!",
  keywords: [
    'Carlos Tarmeño',
    'Carlos Tarmeno',
    'Frontend Developer',
    'Web Development',
    'React',
    'Next.js',
    'Portfolio'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" className="dark">
        <body className={cn(inter.className, 'min-h-screen bg-background')}>
          <Header />
          {children}
          <Footer />
        </body>
        <Analytics />
      </html>
    </ServerThemeProvider>
  );
}
