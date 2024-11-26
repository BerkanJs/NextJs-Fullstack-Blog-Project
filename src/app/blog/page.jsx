import PostCard from '@/components/postCard/PostCard'
import React from 'react'


//Fetch Data With an API

const getData=async ()=>{
  const res =await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}});
  if(!res.ok){
    throw new Error("sth went wrong")
  }
  return res.json();
}





const Blog = async () => {
  //Fetch data with API 
  const posts=await getData();



  //Fetch data without API (Server Islemleri)
  //const posts= await getPosts();








  return (
    <div className="min-h-[calc(100vh-200px)] w-full flex flex-col flex-wrap md:flex-row bg-zinc-50 md:px-10 md:py-5">



      {posts.map((post)=>(
        <div key={post.id} className='w-1/3'><PostCard post={post}/></div>

      ))}
      
  
      
      
    
    
    </div>
  )
}

export default Blog