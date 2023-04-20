import Head from 'next/head'
import LandingPage from './LandingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tecnirem</title>
        <meta name="description" content="Tecnirem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <LandingPage/>
      </main>
    </>
  )
}
