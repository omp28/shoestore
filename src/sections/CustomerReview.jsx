const CustomerReview = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          <span>What Our </span>
          <span className="text-orange-400">Customer</span> Say?
        </h1>
        <h1 className="text-2xl text-gray-500 mx-auto max-w-prose leading-8 mt-10 mb-16 sm:mb-20">
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="m-4 flex-1 text-center">
          <img className="rounded-full mx-auto" src="src/assets/images/customer1.jpeg" width={120} height={120} alt="" />
          <h2 className="font-palanquin text-xl text-slate-500 mt-6">The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</h2>
          <h2 className="text-2xl font-palanquin pt-4">⭐ (4.5)</h2>
          <h2 className="font-bold text-2xl leading-10 mt-3">Morich Brown</h2>
        </div>

        <div className="m-4 flex-1 text-center">
          <img className="rounded-full mx-auto" src="src/assets/images/customer2.svg" width={120} height={120} alt="" />
          <h2 className="font-palanquin text-xl text-slate-500 mt-6">The product not only met but exceeded my expectations. I'll definitely be a returning customer!</h2>
          <h2 className="text-2xl font-palanquin pt-4">⭐ (4.8)</h2>
          <h2 className="font-bold text-2xl leading-10 mt-3">Lota Mongeskar</h2>
        </div>
      </div>
    </>
  );
}

export default CustomerReview;
