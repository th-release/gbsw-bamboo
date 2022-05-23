import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Head from '../components/Head'
import Header from '../components/Header'
import Report from '../components/report'

const Home: NextPage = () => {
  const router = useRouter()
  
  return (
    <div>
      <Head title="경소고 | 대나무 숲" />
      <Header />
      <Report />
      
    </div>
  )
}

export default Home
