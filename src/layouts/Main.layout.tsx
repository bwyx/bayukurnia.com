import React from 'react';
import {Header, Footer} from '~/components';

const MainLayout: React.FC = ({children}) => {
  return (
    <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    </>
  )
}

export default MainLayout
