
import Image from "next/image";
export default function HomePage() {
  return (

    <div className="min-h-[calc(100vh-200px)] w-full flex flex-col md:flex-row bg-zinc-50 md:px-10 md:py-5">

      {/* Left Side */}

      <div className="min-h-1/2 w-full md:w-1/2 flex flex-col space-y-12  items-center justify-around px-12 py-14 bg-white">

        <h1 className="text-4xl md:text-7xl font-semibold text-orange-400 ">
        Building a Stronger MIS Community Through Shared Knowledge and Innovation
        </h1>

        <p className="text-lg md:text-2xl font-extralight">
        Our MIS community is dedicated to fostering a collaborative environment where members can share knowledge, innovate, and grow together. By connecting enthusiasts and professionals, we aim to drive forward-thinking solutions and create a supportive network that empowers everyone to achieve their best. Join us in building a brighter future through the power of shared insights and innovative ideas.
        </p>

        <div className="w-full flex items-center justify-start gap-x-10">
          <button className="w-auto md:w-[130px] bg-orange-400 px-4 py-4 text-white rounded-lg text-sm md:text-lg cursor-pointer">Learn More</button>
          <button className="w-auto md:w-[130px] bg-stone-100 px-4 py-4 text-sm md:text-lg text-black rounded-lg cursor-pointer">Contact</button>


        </div>




      </div>

      {/*Right Side */}


      <div className="relative w-full h-[300px]  md:w-1/2  md:h-[80vh] bg-white">
      <Image src={"/dataPic4.png"} alt="HomePagePic" style={{objectFit:"cover"}} fill/>

      

        

      </div>
      





      





    </div>

  );
}
