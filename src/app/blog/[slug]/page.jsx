import React from "react";
import Image from "next/image";
import { getPost } from "@/lib/data";

const getData=async (slug)=>{
  const res=await fetch(`http://localhost:3000/api/blog/${slug}`);
  if(!res.ok){
    throw new Error("sth went wrong")
  }
  return res.json();
}




const SinglePostPage = async({params}) => {
  const {slug}=params;
  const post=await getData(slug)

  // const post=await getPost(slug)
  //console.log(post)


  return (
    <div className="min-h-[calc(100vh-200px)] w-full flex flex-col md:flex-row bg-zinc-50 md:px-10 md:py-5">
      {/* Left Side */}
      <div className="relative w-[30%] h-[80vh]">
        <Image src={post.img} alt="HomePagePic" fill objectFit="cover" />
      </div>

      {/* Right Side */}
      <div className="w-[60%] h-[80vh] flex flex-col items-center space-y-16">
      <h1 className="text-6xl font-bold text-orange-400">{post?.title}</h1>
        <div className="h-full w-3/4 flex flex-col flex-wrap items-center justify-start space-y-16">
         

          <div className="flex flex-wrap items-center justify-start w-[600px] space-x-10">
          <div className="relative w-[100px] h-[100px] rounded-full">
            <Image src="/Designer.png" className="rounded-full" fill alt="DesigernerPic" objectFit="contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Author</h1> <div className="text-lg text-orange-300">{post?.userId}</div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Published</h1> <div className="text-lg text-orange-300">21.11.2024</div>
          </div>
          </div>
          <div>
          <p className="text-lg text-gray-600"> {post.desc}</p>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default SinglePostPage;
