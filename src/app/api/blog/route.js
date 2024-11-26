
import {Post} from "@/lib/modals"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET=async(request)=>{
    try{
        connectToDb();
        const posts=await Post.find();
        return NextResponse.json(posts)
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch posts !")
    }
}




export const DELETE=async(request,{params})=>{
    const{slug}=params
    try{
        connectToDb();
        await Post.delete({slug});
        return NextResponse.json("post deleted")
    }catch(err){
        console.log(err)
        throw new Error("Failed to delete post !")
    }
}
