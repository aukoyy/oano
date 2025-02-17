import type { FC, ReactNode } from 'react';
import "../styles/global.css";

interface Props {
  title: string;
  children: ReactNode;
}

const Layout: FC<Props> = ({ title, children }) => {
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
        {children}
      </body> 
    </html>
  );
};

export default Layout;
