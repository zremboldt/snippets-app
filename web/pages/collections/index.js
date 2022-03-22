import Head from 'next/head'
import { styled } from '@stitches/react';

export default function Home() {
  return (
    <div className='layout'>
      <Head>
        <title>Snippets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Collections</h1>
      </main>
    </div>
  )
}