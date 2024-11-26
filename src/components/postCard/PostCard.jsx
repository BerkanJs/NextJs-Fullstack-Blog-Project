import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({post}) => {
  return (
   
    <div className="flex flex-col gap-4 mb-[20px]">
      <div className="flex">
        {post.img && <div className="h-[400px] w-[90%] relative ">
          <Image
            alt="BlogPic"
            fill
            objectFit="cover"
            src={post.img}
          />
        </div>}
        <span className="text-sm rotate-[270deg] m-auto">01.01.2024</span>
      </div>
      <div>
        <h1 className="m-5 text-2xl w-[90%]">{post.title}</h1>
        <p className="mb-4 font-normal text-gray-300">
          {post.desc}
        </p>
        <Link className="underline" href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
    
  );
};

export default PostCard;
