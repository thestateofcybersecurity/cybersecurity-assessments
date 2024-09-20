import type { AppProps } from 'next/app';
import App from '../App';

function MyApp({ Component, pageProps }: AppProps) {
  return <App Component={Component} pageProps={pageProps} />;
}

export default MyApp;
