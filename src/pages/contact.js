import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Fooder } from '@/components/Fooder'
import { Input } from 'postcss'

const contact = () => {
  return (
    <div className='flex flex-col gap-24'>
        <Navbar/>
        <div className='lg:w-full flex justify-center items-center flex-col'>
            <div className=' w-full lg:w-8/12 flex flex-col items-center gap-12 '>
                <div className=' flex lg:flex flex-col w-2/4 gap-5 '>
                    <div className=' w-full flex  lg:flex flex-col gap-5 '>
                        <h1 className='text-black text-4xl font-semibold w-fit'>Contact Us</h1>
                        <p className='w-full lg:w-8/12 text-zinc-500 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className=' flex flex-col items-center gap-5 lg:flex lg:flex-row lg:gap-[50px]'>
                        <div className=' border w-72 h-32 p-4 rounded-xl  border-gray-200'>
                            <h1 className='text-black text-2xl font-semibold'>Address</h1>
                            <p>1328 Oak Ridge Drive, Saint Louis, Missouri  </p>
                        </div>
                        <div className='border w-72 p-4 h-32 rounded-xl border-gray-200'>
                            <h1 className='text-black text-2xl font-semibold'>Contact</h1>
                            <p>313-332-8662
                            info@email.com</p>
                        </div>
                    </div>
                </div>
                <div className=' rounded w-4/5 lg:w-2/4 bg-neutral-100 py-7 pl-9'>
                    <div className=' lg:w-3/5 flex flex-col gap-6'>
                        <h1 className='text-black text-lg font-semibold leading-relaxed'>Leave a Message</h1>
                        <div className='flex flex-col gap-4 lg:flex lg:flex-row'>
                          <input type='text' placeholder="Your Name" className=' pl-1 m-0 w-4/5 lg:pl-3 text-neutral-400 text-base font-normal leading-relaxed lg:me-5 rounded-md'/>

                          <input type="email" placeholder="Your Email" className='pl-1 w-4/5 lg:pl-3 text-neutral-400 text-base font-normal leading-relaxed rounded-md'/>
                        </div>
                        <input type='text' placeholder="Subject" className=' pl-1 w-4/5 lg:pl-3 text-neutral-400 text-base font-normal leading-relaxed rounded-md lg:w-full py-1'/>
                        <textarea placeholder='Write a message' className=' w-4/5 lg:text-neutral-400 text-base font-normal leading-relaxed rounded-md pt-3.5 pl-3.5'/>
                        <button className='w-fit px-4 py-2.5 bg-indigo-500 rounded-md text-center text-white text-sm font-medium'>Send Message</button>
                    </div>
                </div>
                
            </div>
        </div>
        <Fooder/>
    </div>
  )
}

export default contact