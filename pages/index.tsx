import Head from 'next/head'
import dynamic from 'next/dynamic'
import { draw, setup } from 'p5/base.p5'

const Sketch = dynamic(import('react-p5'), { ssr: false })

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Wikipedia super merger</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mx-auto text-center mb-10">
        Wiki-photo super merger
      </h2>

      <section className="flex flex-nowrap mx-auto space-x-4 justify-center py-10">
        <div>
          <span className="block mb-2">First article</span>
          <input
            placeholder="Search an article"
            type="text"
            className="rounded-md border-gray-300 shadow-sm focus:ring focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-20"
          />
        </div>
        <div>
          <span className="block mb-2">Second article</span>
          <input
            placeholder="Search an article"
            type="text"
            className="rounded-md border-gray-300 shadow-sm focus:ring focus:outline-none focus:border-pink-500 focus:ring-pink-500 focus:ring-opacity-20"
          />
        </div>
      </section>

      <section className="flex items-center justify-center">
        <Sketch setup={setup} draw={draw} />
      </section>
    </div>
  </>
)

export default Home
