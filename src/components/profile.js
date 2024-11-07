import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

// Profile section for user API keys
function profile() {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row justify between my-3 items-center">
            <h2 className="text-2xl font-bold">Info</h2>
            <button className="border-2 mr-[3px] border-solid border-black rounded-full hover:bg-gray-100 
             w-12 h-12 items-center justify-center text-3xl px-2">
                <IoArrowBackOutline />
            </button>
        </div>
    </div>
  )
}

export default profile