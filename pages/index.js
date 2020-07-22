import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import AnimatedBackground from "../components/AnimatedBackground"
import TypingHello from "../components/TypingHello"


export default function Home() {
  return (
    <Layout>
      <Navbar />
      <AnimatedBackground />
      
      <main>
        <TypingHello />
      </main>
    </Layout>
  )
}
