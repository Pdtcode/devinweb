"use client"
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api", formData);

      if (res.status === 200) {
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = () => {
    setFormSubmitted(!formSubmitted);
  };

  return (
    <>
      <div>
        {/*overlay*/}
        <div className='items-center justify-center mb-12 bg-inherit bg-center bg-cover contact-bgimg h-screen hidden sm:flex'>
          <div className='p-5 text-black z-[2] mr-20'>
            <h2 className='text-5xl font-bold'>Contact</h2>
          </div>

          {formSubmitted ? (
            <div className="popup absolute p-14 text-xl rounded-lg bg-white translate-[50%] ">
              <h1 className="mb-4">Thank you for contacting us!</h1>
              <button onClick={handleFormSubmit} className="border-[2px] px-2 translate-x-[5.75rem] translate-y-4">Exit</button>
            </div>
          ) : null}

          {/*Desktop Form*/}
          <div className='hidden sm:flex text-xl m-4 z-[0] '>
            <form onSubmit={handleSubmit} className="rounded-3xl shadow-xl flex flex-col px-[2rem] py-[1rem] bg-slate-800/50 mt-8">

              {/*Full Name */}
              <label htmlFor="name" className="text-gray-500 font-light dark:text-gray-50 pr-[20rem]">Full Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-700/40 font-light text-gray-50 mb-5" />

              {/*Email */}
              <label htmlFor="email" className="text-gray-50 font-light mt-5">E-mail<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-700/40 font-light text-gray-50 mb-5" />

              {/*Subject */}
              <label htmlFor="subject" className="text-gray-500 font-light mt-5 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
              <input
                type="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-700/40 font-light text-gray-50 mb-5" />

              {/*Message */}
              <label htmlFor="message" className="text-gray-500 font-light mt-5 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-700/40 font-light text-gray-50 mb-5"></textarea>

              <div className="flex flex-row items-center justify-start">
                <button type='submit' className="px-10 mt-8 py-2 bg-slate-800/80 text-gray-50 font-light rounded-md text-lg flex flex-row items-center raleway">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>

        {/*Overlay For Mobile*/}
        <div className='flex items-center justify-center bg-inherit bg-center bg-cover contact-bgimg h-screen sm:hidden'>
          <div className='absolute top-0 left-0 h-screen right-0 bottom-0 bg-black/60 z-[2]' />
          <div className='z-[3] mb-[1rem] mt-[2rem]'>
            <div className=' text-white ml-[2.5rem] mr-[2.5rem]'>
              <h2 className='text-lg font-bold'>Contact</h2>
            </div>
            {formSubmitted ? (
              <div className="popup absolute p-14 rounded-lg bg-white translate-y-[50%] translate-[50%] z-[5]">
                <h1 className="mb-4">Thank you for contacting us!</h1>
                <button onClick={handleFormSubmit} className="border-[2px] px-2 translate-x-[4.5rem]">Exit</button>
              </div>
            ) : null}

            {/*Mobile Form*/}
            <form onSubmit={handleSubmit} className="rounded-3xl shadow-xl sm:flex flex-col px-[1rem] py-[1rem] bg-slate-800/50 z-[3] ml-[2rem] mr-[2rem]">

              {/*Full Name */}
              <label htmlFor="name" className="flex text-gray-500 font-light dark:text-gray-50 pr-10">Full Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-b py-2 pl-2 pr-1 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-700/40 font-light text-gray-50 mb-4" />

              {/*Email */}
              <label htmlFor="email" className="flex text-gray-50 font-light">E-mail<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required className="bg-transparent border-b py-2 pl-2 pr-1 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-700/40 font-light text-gray-50 mb-4" />

              {/*Subject */}
              <label htmlFor="subject" className="flex text-gray-500 font-light dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
              <input
                type="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-transparent border-b py-2 pl-2 pr-1 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-700/40 font-light text-gray-50 mb-4" />

              {/*Message */}
              <label htmlFor="message" className="flex text-gray-500 font-light dark:text-gray-50">Message<span className="text-red-500">*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-transparent border-b py-2 pr-8 pl-2 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-700/40 font-light text-gray-50 mb-2"></textarea>
              {/*Send */}
              <div className="flex flex-row items-center justify-start">
                <button type='submit' className="px-10 py-2 bg-slate-800/80 text-gray-50 font-light rounded-md text-lg flex flex-row items-center raleway">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>

  )
}

export default Contact;
