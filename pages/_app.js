import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
    <Layout>
      <Head>
        <title>Meetups</title>
        <link rel="icon" href="/webDev.jpeg" />
        <meta name="description" content="Meetups with Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div >
        <Component {...pageProps} />
        <ToastContainer/>
      </div>
    </Layout>
</ThemeProvider>


  )
}
