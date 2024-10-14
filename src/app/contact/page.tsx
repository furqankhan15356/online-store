"use client"
import { useState } from "react"

export default function Contact(){

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [feedback,setFeedback] = useState("")
    const [isClick,setClick] = useState(false)

    const submitHandler = (e)=>{
        e.preventDefault()
        setClick(true)
    }


    return(
      <main className="bg-zinc-500">
        <form className="flex flex-col justify-center items-center gap-4 mt-8" onSubmit={submitHandler}>

            <div className="flex flex-col justify-center items-center md:items-start lg:items-start gap-4 mt-5">
            <label htmlFor="name" className="font-bold text-white text-xl">Name</label>
            <input type="text" placeholder="Enter your name" className="py-3 md:w-96 lg:w-96 w-48 rounded-lg px-2 border border-black border-2"
            onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>

            <div className="flex flex-col justify-center gap-4 items-center md:items-start lg:items-start">
            <label htmlFor="email" className="font-bold text-white text-xl">Email</label>
            <input type="text" placeholder="Enter your email" className="py-3 md:w-96 lg:w-96 w-48 rounded-lg px-2 border border-black border-2"
            onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>

            <div className="flex flex-col justify-center gap-4 items-center md:items-start lg:items-start">
            <label htmlFor="message" className="font-bold text-white text-xl" >Feedback</label>
            <input type="text" placeholder="Share your feedback" className="py-3 md:w-96 lg:w-96 w-48 rounded-lg px-2 border border-black border-2"
            onChange={(e)=>setFeedback(e.target.value)} value={feedback}/>
            </div>

            <button type="submit" className="md:px-8 md:py-2 lg:px-8 lg:py-2 px-10 p-2 mt-10 mb-8 bg-white text-black font-medium text-xl rounded-lg hover:bg-gray-400 border border-black border-2">Send</button>
        </form>
      </main>
    )
}