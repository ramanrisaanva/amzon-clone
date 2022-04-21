import '../styles/globals.css'
import Header  from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar />
  <Header />
   <Component {...pageProps} />
   <Footer/>
  </>
}

export default MyApp
