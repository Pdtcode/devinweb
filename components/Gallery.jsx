import React from 'react'
import Image from 'next/image'

function Gallery() {
  // Array of image URLs
  const imageUrls = [
    "https://lh5.googleusercontent.com/d/19pCEpJP4QEamPHM_Hmc9g3ZdgCFjY4I6",
    "https://static.wixstatic.com/media/382fbb_e7368fe791804e9db0638be7444e895e~mv2.jpg/v1/fit/w_1600,h_2314,q_90/382fbb_e7368fe791804e9db0638be7444e895e~mv2.webp",
    "https://static.wixstatic.com/media/382fbb_0a224f20c54a4562bce0c4ce6c6f9698~mv2.jpg/v1/fit/w_1600,h_2314,q_90/382fbb_0a224f20c54a4562bce0c4ce6c6f9698~mv2.webp",
    "https://static.wixstatic.com/media/382fbb_b6abf1f847764523b900dc770b3524c9~mv2.jpg/v1/fit/w_1600,h_2314,q_90/382fbb_b6abf1f847764523b900dc770b3524c9~mv2.webp",
    "https://static.wixstatic.com/media/382fbb_d3180bf4aa0d4615bd973aaaad23525e~mv2.jpg/v1/fit/w_1600,h_2314,q_90/382fbb_d3180bf4aa0d4615bd973aaaad23525e~mv2.webp",
    "https://static.wixstatic.com/media/382fbb_e992244b37a64842a297582dbc8280fa~mv2.jpg/v1/fit/w_1600,h_2314,q_90/382fbb_e992244b37a64842a297582dbc8280fa~mv2.webp",
    "https://static.wixstatic.com/media/382fbb_0fed0845170f4ef4ba993fa26b76e2c7~mv2.jpg/v1/fit/w_1600,h_2314,q_90/382fbb_0fed0845170f4ef4ba993fa26b76e2c7~mv2.webp",
    "https://static.wixstatic.com/media/382fbb_f9c73f94da1c455cba99a66e651609c8~mv2.jpg/v1/fit/w_1600,h_2314,q_90/382fbb_f9c73f94da1c455cba99a66e651609c8~mv2.webp",
    "https://static.wixstatic.com/media/382fbb_d4812bba18064576875dd896710e6420~mv2.jpg/v1/fit/w_1600,h_2314,q_90/382fbb_d4812bba18064576875dd896710e6420~mv2.webp",
    "https://static.wixstatic.com/media/382fbb_d4812bba18064576875dd896710e6420~mv2.jpg/v1/fit/w_1600,h_2314,q_90/382fbb_d4812bba18064576875dd896710e6420~mv2.webp",
    // Add more URLs as needed
  ];

  return (
    <div className='max-w-[1240px] mx-auto text-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center'>
        {/* Loop over imageUrls array and generate Image components */}
        {imageUrls.map((url, index) => (
          <Image
            key={index} // Add a unique key for each image
            width={500}
            height={500}
            alt={`Picture ${index + 1}`} // Alt text with index for accessibility
            src={url}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
