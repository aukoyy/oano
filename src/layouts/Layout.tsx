import Analytics from '@vercel/analytics/astro'
import type { FC, ReactNode } from 'react';
import "../styles/global.css";

interface Props {
  title: string;
  children: ReactNode;
}

const Layout: FC<Props> = ({ title, children }) => {
  <Analytics/>
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Astro description" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>
      </head>
      <body className='max-w-6xl mx-auto px-4 bg-stone-800 text-white'>
        <nav className="py-4">
          <ul className="flex space-x-6 justify-end">
            <li>
              <a href="/" className="hover:text-stone-300">Home</a>
            </li>
            <li>
              <a href="/dev" className="hover:text-stone-300">Dev</a>
            </li>
            <li>
              <a href="/cv" className="hover:text-stone-300">CV</a>
            </li>
          </ul>
        </nav>
        {children}
      </body> 
    </html>
  );
};

export default Layout;
