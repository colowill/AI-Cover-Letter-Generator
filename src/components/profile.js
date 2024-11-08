import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

// Profile section for user API keys
function profile() {
  return (
    <div className="flex flex-col mx-5">
        <div className="flex flex-row justify-between mx-5 my-4 items-center">
            <h1></h1>
            <h2 className="text-2xl font-bold justify-between mx-1 my-1">
                Info
            </h2>
            <button className="flex justify-end border-2 border-solid border-black rounded-full hover:bg-green-300 
             w-12 h-12 justify-center text-3xl flex items-center">
                <IoArrowBackOutline />
            </button>
        </div>

        <form className="flex column">
            <label 
            htmlFor="openAIKey"
            >

            </label>
            <textarea
            rows={1}
            className="w-full"
            placeHolder="..."
            ></textarea>

        </form>
    </div>
  )
}

export default profile