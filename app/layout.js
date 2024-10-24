import localFont from "next/font/local";
import { Inter, Roboto_Mono, Poppins } from 'next/font/google';
import {  } from 'next/font/google';
import "./globals.css";
import Link from "next/link";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Next.js Crash Course",
  description: "Generated by learn with Sumit",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${roboto_mono.variable} max-w-7xl mx-auto px-4 bg-blue-950`}
    >
      <body className={`font-sans`}>
        <nav
          className={`py-4 bg-blue-950 bg-opacity-45 text-green-600 font-semibold flex gap-6 justify-center h-16 font-mono`}
        >
          <ul className='flex gap-4'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            |
            <li>
              <Link prefetch={false} href='/about'>
                About
              </Link>
            </li>
            |
            <li>
              <Link prefetch={false} href='/blog'>
                Blog
              </Link>
            </li>
            |
            <li>
              <Link prefetch={false} href='/posts'>
                Posts
              </Link>
            </li>
          </ul>{' '}
        </nav>

        <div className={`min-h-[100vh] bg-blue-950 ${inter.variable} `}>
          {children}
        </div>
        <footer className='h-20'></footer>
      </body>
    </html>
  );
}
