import Head from 'next/head'

const head = (props: any) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default head;