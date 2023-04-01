import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/component/navbar'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Footer from '@/component/footer'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <ChakraProvider>
      <Provider store={store}>

     <Navbar/>
  <Component {...pageProps} />
  <Footer/>
      </Provider>
     </ChakraProvider>
    </>
  )
}
