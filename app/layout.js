import '@/assets/styles/global.css'
import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const dynamic = "force-dynamic";
export const metadata={
    title:"PropertyPulse | Find the Perfect Rental",
    description:"Find the Rental Property",
    keywords:'retail,find rentals,find properties'
}
export default function layout({children}) {


  return (

    <html lang="en">
    <body>
        <Navbar/>
      <main>{children}</main>
      <Footer/>
      <ToastContainer />
      </body>
      </html>
    
   
  )
}
