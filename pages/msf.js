import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>BG MSF</title>
      </Head>
      <h1>BG MSF</h1>
      <img src="/images/profile.jpg" alt="Your Name" />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}