import Head from 'next/head'
import { draw, setup } from 'p5/base.p5'
import Sketch from 'react-p5'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h2 className="text-2xl">
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h2>

    <div className="flex items-center justify-center">
      <Sketch setup={setup} draw={draw} />
    </div>
  </>
)

export default Home
