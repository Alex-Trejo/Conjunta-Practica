import '../styles/global.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Box 
        bgGradient="linear(to-br, teal.50, purple.50)" 
        minH="100vh"
      >
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}
