import Footer from "./Footer";
import Header from "./Header";
import {FC, ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => (
    <>
        <Header/>
            {children}
        <Footer/>
    </> 
  )   
   
  export default Layout;