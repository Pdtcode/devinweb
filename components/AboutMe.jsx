import React from 'react'
import Image from 'next/image'

function AboutMe() {
  return (
    <div className='absolute bg-black/35 w-[100%] h-[100%]'>
        <Image
        className='absolute z-[-1]'
        layout='fill'
        src='https://static.wixstatic.com/media/382fbb_687ced75c91744119ca005f2890f66fc~mv2.jpg/v1/fill/w_1470,h_765,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/382fbb_687ced75c91744119ca005f2890f66fc~mv2.jpg'
        />
      </div>
  )
}

export default AboutMe