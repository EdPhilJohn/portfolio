
import MainContent from '../components/MainContent'
import jumboSTyles from '../styles/contact.module.css'
import Head from 'next/head'
import Header from '../components/Header'
import Email from '../components/Email'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Amal Edward </title>
              <link rel="icon" href="https://th.bing.com/th/id/OIP.1YZC-Gy4hj95QL036kXOAQHaFx?pid=ImgDet&rs=1" />
          </Head>
         
            <Header/>
          <div className={jumboSTyles.wallppr} >
              <MainContent />
             
          </div>
      
    </div>
  )
}
