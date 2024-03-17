import React from 'react';

const SpecialOffer = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center'>
      <div className='flex-1 ml-10 md:ml-0'>
        <h1 className='text-4xl font-bold mb-10'>
          <span className='text-orange-600 leading-3 font-palanquin'>Special</span> Offer
        </h1>
        <h1 className='font-palanquin text-xl text-slate-500 leading-8'>
          Embark on a shopping journey that redefines your experience with unbeatable deals.
          From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </h1>
        <br />
        <h1 className='font-palanquin text-xl text-slate-500 leading-8'>
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations.
          Your journey with us is nothing short of exceptional.
        </h1>
        <div className='flex mt-10'>
          <button className='flex justify-center items-center px-6 py-3 rounded-full bg-orange-500'>
            <p className='text-xl'>Shop Now</p>
            <img className='px-2' src="src/assets/icons/arrow-right.svg" alt="" />
          </button>
          <button className='flex justify-center items-center px-6 py-3 rounded-full border border-black mx-4'>
            Learn More
          </button>
        </div>
      </div>
      <div className='flex-1 md:mr-10'>
        <div>
          <img src="src/assets/images/offer.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
