import React from "react";
import pic1 from '../assets/images/logo.png';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className=" hidden sm:flex flex-row  justify-center  min-h-screen max-container px-10"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10">
          <h1 className="mt-10 text-7xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className=" relative x-10">
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
        <div className="relative flex-1 z-10  flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary mt-10 ml-30 rounded-md">
    <img src={pic1} alt='herosection' width={610} height={400} className="object-contain relative z-10 shadow-xl" />
    
</div>


      </section>

{/* for mobile screen */}
      <div className='flex sm:hidden justify-start p-2' >
                
                 <div className="flex flex-col">

                  <div className="flex flex-col text-4xl font-bold">
                    <span>The</span>
                    <span className="bg-sky-500 w-60 rounded-sm">DecentraLized</span>
                    <span>Cross-Chain</span>
                    <span>Exchange</span>
                    <span> <img src={pic1} alt="" /></span>
                  </div>
                 
                  <div className="text-sm  text-gray-500 font-montserrat mt-4">
              Cryptocurrency, a digital or virtual currency, employs
              cryptography for security. Operating on decentralized blockchain
              networks, it diverges from traditional government-issued
              currencies. The blockchain, a distributed ledger, ensures
              transparency and immutability by recording all transactions across
              a computer network.
            </div>
                  
                    
                 </div>



                  
                
                 
   </div>
 



     
    </>
    
    
  );
};


export default Hero;
