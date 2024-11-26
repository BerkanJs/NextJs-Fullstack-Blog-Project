import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] w-full flex flex-col md:flex-row bg-zinc-50 md:px-10 md:py-5">
      {/* Left Side */}

      <div className="min-h-1/2 w-full md:w-1/2 flex flex-col space-y-12  items-center justify-center px-12 py-14 bg-white">
        <h1 className="text-5xl md:text-7xl font-bold text-orange-400 ">
          ABOUT US
        </h1>

        <p className="text-lg md:text-2xl font-extralight">
          Welcome to the YBS Community, where passion for Management Information
          Systems (MIS) meets innovation and collaboration. Our community is a
          vibrant hub for YBS enthusiasts, professionals, and students who are
          eager to share knowledge, exchange ideas, and drive forward-thinking
          solutions. At the YBS Community, we believe in the power of collective
          intelligence and the importance of staying ahead in the ever-evolving
          field of information systems. Our mission is to create a supportive
          and engaging environment where members can connect, learn, and grow
          together. We offer a variety of resources, including forums, webinars,
          and networking events, designed to foster collaboration and
          professional development. Whether you are looking to expand your
          knowledge, find inspiration, or connect with like-minded individuals,
          the YBS Community is here to support you every step of the way. Join
          us in building a stronger YBS community through shared knowledge and
          innovation. Together, we can achieve great things and shape the future
          of Management Information Systems.
        </p>
      </div>

      {/*Right Side */}

      <div className=" w-full h-[300px]  md:w-1/2  md:h-[80vh] bg-white flex flex-col items-center">
        <Image
          src={"/dataPic1.png"}
          alt="HomePagePic"
          style={{ objectFit: "contain" }}
          width={500}
          height={500}
        />

       

        <div className="w-full h-[300px] bg-white flex items-center justify-center space-x-6 ">
          <div className="h-[100px] w-[300px] bg-zinc-50 p-4 flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-4xl text-orange-400 font-bold">4 +</h1>
            <p className="text-lg text-gray-300">Years Experience</p>
          </div>
          <div className="h-[100px] w-[300px] bg-zinc-50 p-4 flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-4xl text-orange-400 font-bold">4 +</h1>
            <p className="text-lg text-gray-300">Years Experience</p>
          </div>
     
  
        </div>
      
        <div className="w-full h-[300px] bg-white flex items-center justify-center space-x-6 ">
          <div className="h-[100px] w-[300px] bg-zinc-50 p-4 flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-4xl text-orange-400 font-bold">4 +</h1>
            <p className="text-lg text-gray-300">Years Experience</p>
          </div>
          <div className="h-[100px] w-[300px] bg-zinc-50 p-4 flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-4xl text-orange-400 font-bold">4 +</h1>
            <p className="text-lg text-gray-300">Years Experience</p>
          </div>
     
  
        </div>





        </div>
   
    </div>
  );
};

export default About;
