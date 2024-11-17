import { ReactNode } from 'react';
import './globals.css';

type RootLayoutType = {
  children: ReactNode
}

export const RootLayout = ({children}: RootLayoutType) => {
  return <html lang="eng">
    <body>
      <nav>Hello Nav</nav>
      {children}
    </body>
  </html>
}

export default RootLayout