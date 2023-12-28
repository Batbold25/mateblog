import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Slider } from '../components/Slider'
import { Allblog } from '../components/Allblog'
import { Trending } from '../components/Trending'
import { Fooder } from '../components/Fooder'



import { useEffect, useState } from 'react'



export default function Home() {
  
  return (
    <div className='flex flex-col gap-24'>
      <Navbar/>
      <Slider/>
      <Trending/>
      <Allblog/>
      <Fooder/>
      
      
      
    
    </div>
  )
}
