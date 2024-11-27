import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-[100px] justify-center p-6 xl:p-0 lg:mt-20 sm:mt-4 mt-8 lg:mb-10 mb-2 flex'>
        <div className='lg:w-[1120px] w-full lg:flex space-y-2 lg:space-y-0 lg:justify-between items-end'>
           <div className='  font-medium lg:text-[21px] sm:text-[18px] text-[15px] text-center text-blue-900'>
           Wania Azam - 2024
           </div> 
           <div className='flex justify-evenly lg:gap-7 gap-2'>
            <Link href={'https://github.com/WaniaAzamm'} target='_blank' className=' font-medium text-[14px] sm:text-[16px] lg:text-[21px]'> <p>Github</p> </Link>
            <Link href={'https://www.linkedin.com/in/waniaa-azam/'} target='_blank' className=' font-medium text-[14px] sm:text-[16px] lg:text-[21px]'> <p>LinkedIn</p> </Link>
            <Link href={'/'} className=' font-medium text-[14px] sm:text-[16px] lg:text-[21px]'> <p>Twitter</p> </Link>
            </div> 
        </div>
     
    </div>
  )
}

export default Footer
