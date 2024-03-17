import React from "react";
import CustomerReview from "./sections/CustomerReview";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts"; 
import Service from "./sections/Service";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

import Nav from "./Components/Nav";
const App = () => (
  
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section id="popularproducts" className="padding">
      <PopularProducts />
    </section>
    <section id="superquality" className="padding">
      <SuperQuality />
    </section>
    <section id="service" className="padding-x py-10">
      <Service />
    </section>
    <section id="specialoffer" className="padding">
      <SpecialOffer />
    </section>
    <section id="customerreview" className="padding bg-pale-blue">
      <CustomerReview />
    </section>
    <section id="subscribe" className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section id="footer" className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
