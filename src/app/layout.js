import { Sarabun } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';

const sarabun = Sarabun({ 
  subsets: ['latin', 'thai'],
  weight: ['400', '800'],
  display: 'swap'
});

export const metadata = {
  title: 'Cristifier',
  description: 'A web app for WCA comp file management',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={sarabun.className}>
      <body>
        <Header/>
        <div className='mt-3'>
          {children}
        </div>
      </body>
    </html>
  );
}
