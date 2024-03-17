import React from 'react';
import { BiSolidTruck } from 'react-icons/bi';

const Service = () => {
  return (
    <div className='flex flex-col md:flex-row'>

      <div className='flex-1 mb-4 md:mr-4 md:mb-0 bg-slate-50 p-8 md:p-16 rounded-3xl flex flex-col items-center'>
        <div className='px-4'>
          <BiSolidTruck size={35} color='#D9622B' />
        </div>
        <div className='mx-2 text-center'>
          <h1 className='text-2xl md:text-3xl font-semibold mt-4'>Free Shipping</h1>
          <p className='text-base md:text-lg font-palanquin text-slate-500 mt-2'>
            Enjoy seamless shopping with our complimentary shipping service.
          </p>
        </div>
      </div>

      <div className='flex-1 mb-4 md:mx-4 md:mb-0 bg-slate-50 p-8 md:p-16 rounded-3xl flex flex-col items-center'>
        <div className='px-4'>
          <BiSolidTruck size={35} color='#D9622B' />
        </div>
        <div className='mx-2 text-center'>
          <h1 className='text-2xl md:text-3xl font-semibold mt-4'>Secure Payment</h1>
          <p className='text-base md:text-lg font-palanquin text-slate-500 mt-2'>
            Experience worry-free transactions with our secure payment options.
          </p>
        </div>
      </div>

      <div className='flex-1 md:ml-4 bg-slate-50 p-8 md:p-16 rounded-3xl flex flex-col items-center'>
        <div className='px-4'>
          <BiSolidTruck size={35} color='#D9622B' />
        </div>
        <div className='mx-2 text-center'>
          <h1 className='text-2xl md:text-3xl font-semibold mt-4'>Love to Help You</h1>
          <p className='text-base md:text-lg font-palanquin text-slate-500 mt-2'>
            Our dedicated team is here to assist you every step of the way.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Service;
