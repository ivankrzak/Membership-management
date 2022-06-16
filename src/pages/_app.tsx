import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import apolloClient from 'lib/apollo'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  </ChakraProvider>
)

export default MyApp
