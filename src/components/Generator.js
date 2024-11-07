// Command 'rfce'
import React from 'react'
import { IoInformationOutline } from "react-icons/io5";

function Generator() {
  return (
    /** 
     * Main container for application
     * Includes text-box where generated resume will apear
     * Includes buttons for profile section (profile.js) and generate
     */
    <div className="flex flex-col">
        <div className="flex flex-row justify-between mx-5 my-4 items-center">
            <button className="border-2 border-solid border-green-300 text-black text-xl font-bold
            rounded-md px-3 py-2 hover:bg-green-300">
                Generate
            </button>
            <h2 className="text-2xl font-bold justify-between mx-1 my-1" style={{marginRight: '60px' }}>
                LinkedIn Cover Letter Generator
            </h2>
            <button className="border-2 border-solid border-black rounded-full hover:bg-gray-100 
             w-12 h-12 justify-center text-3xl flex items-center">
                <IoInformationOutline />
            </button>
        </div>
        <div className="flex mx-5">
            <textarea
                rows={12}
                className="w-full"
                placeholder=". . . "
            />
        </div>
    </div>
  )
}

export default Generator