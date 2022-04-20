import '../styles/globals.css'
import Header  from '../Components/Header'
import Navbar from '../Components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar />
  <Header />
   <Component {...pageProps} />
  </>
}

export default MyApp
