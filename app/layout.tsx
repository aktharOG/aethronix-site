import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aethrionix — Engineering Digital Systems',
  description: 'Aethrionix builds high-performance mobile, web, cloud and intelligent software systems for ambitious businesses.',
  keywords: ['Aethrionix','software development','Flutter','web development','cloud','AI','fintech'],
  metadataBase: new URL('https://aethrionix.com')
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
