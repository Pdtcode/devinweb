import React from 'react';
import Image from 'next/image';

function about() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src='https://static.wixstatic.com/media/382fbb_687ced75c91744119ca005f2890f66fc~mv2.jpg/v1/fill/w_1470,h_765,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/382fbb_687ced75c91744119ca005f2890f66fc~mv2.jpg'
          alt='Photographer'
          layout='fill'
          objectFit='cover'
        />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 max-w-lg text-center">
          <h1 className="text-2xl mb-2">About Me</h1>
          <p className="text-lg">
            Hello, my name is Devin Ta, and I am a Vietnamese-American photographer based in Oklahoma City, Oklahoma. I enjoy taking portraits, creative photos, as well as concert photos!
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
