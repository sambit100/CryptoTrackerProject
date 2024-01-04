import React from "react";
import pic1 from '../assets/images/logo.png';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center gap-10  min-h-screen max-container  p-5"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <h1 className="mt-10 text-7xl max-sm:text-[72px] max-sm:leading-[82 font-bold">
            <span className=" relative x-10 pr-10">
              The
              <span className="bg-sky-500 inline-block mt-3 rounded-lg">
                {" "}
                Decentralized
              </span>{" "}
              Cross-Chain Exchange
            </span>
            <br />
          </h1>

            <span className="text-sm relative text-gray-500 font-montserrat mt-4">
              Cryptocurrency, a digital or virtual currency, employs
              cryptography for security. Operating on decentralized blockchain
              networks, it diverges from traditional government-issued
              currencies. The blockchain, a distributed ledger, ensures
              transparency and immutability by recording all transactions across
              a computer network.
            </span>
           <div className="mt-4">
            
          <button className="m-4 p-3 font-montserrat text-white bg-orange-600  border-spacing-3 border rounded-lg cursor-pointer hover:bg-orange-400">
            Learn More
          </button>
          <button className="m-4 p-3 font-montserrat text-white bg-orange-600 border-spacing-3 border rounded-lg cursor-pointer hover:bg-orange-400">
            Explore
          </button>
           </div>
        </div>
        <div className="relative flex-1 z-10  flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary mt-20 rounded-md">
    <img src={pic1} alt='herosection' width={610} height={400} className="object-contain relative z-10 shadow-xl" />
    
</div>


      </section>
     
    </>
    
    
  );
};


export default Hero;
