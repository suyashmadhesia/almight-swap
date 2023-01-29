import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CustomButton from '@/components/Button'
import Navbar from '@/components/Navbar'
import CustomCard from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <div className='flex justify-center items-center h-full'>
          <CustomCard />
      </div>
    </div>
  )
}
