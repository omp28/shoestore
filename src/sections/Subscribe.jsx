import React from 'react';

const Subscribe = () => {
  return (
    <div className='flex flex-col md:flex-row items-center'>
      <div className='flex-1 mx-auto text-center md:text-left'>
        <h1 className='text-4xl font-bold'>
          Sign Up for <span className='text-orange-500'>Updates</span> & Newsletter
        </h1>
      </div>

      <div className='flex-1 flex items-center justify-center w-full mt-6 md:mt-0'>
        <form class="px-4" id="searchbar" onSubmit={(e) => e.preventDefault()}>
          <input
            class="border-2 my-3 p-4 text-xl border-black rounded-full w-full md:w-60"
            type="email"
            placeholder="Enter your email"
          />
          <button className='bg-orange-400 text-white px-10 py-3 rounded-full mt-3 md:mt-0 md:ml-4'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
