import type { Metadata } from 'next';
import { DM_Mono, Instrument_Serif, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-body', subsets: ['latin'] });
const instrument = Instrument_Serif({ variable: '--font-display', subsets: ['latin'], weight: '400' });
const mono = DM_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Jonathan Napitupulu — Senior Data + AI Engineer',
  description: 'Jonathan Napitupulu builds reliable data systems, applied AI, and the product layers between them.',
  metadataBase: new URL('https://napjon.github.io'),
  openGraph: {
    title: 'Jonathan Napitupulu — Senior Data + AI Engineer',
    description: 'Reliable data systems, applied AI, and the connective tissue between them.',
    url: 'https://napjon.github.io',
    siteName: 'Jonathan Napitupulu',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Jonathan Napitupulu — Senior Data + AI Engineer',
    description: 'Reliable data systems, applied AI, and the connective tissue between them.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${instrument.variable} ${mono.variable}`}>{children}</body></html>;
}

