import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

// Profile section for user API keys and for entering their resume information
function profile() {
  return (
    <div className="flex flex-col mx-5">
        <div className="flex flex-row justify-between mx-5 my-4 items-center">
            <h1></h1>
            <h2 // Header for info 
            className="text-2xl font-bold justify-between mx-1 my-1">
                Info
            </h2>
            <button className="flex justify-end border-2 border-solid border-black rounded-full hover:bg-green-300 
             w-12 h-12 justify-center text-3xl flex items-center">
                <IoArrowBackOutline />
            </button>
        </div>
        <form className="flex column">
            <div className="mb-6">
                <label // Label for OpenAI API Key
                htmlFor="AIKey"
                className="block mb-2 text-sm font-medium text-gray-900">
                OpenAI API Key
                </label>

                <input // Input for AI Key
                id="AIKey"
                name="AIKey"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-green-400 focus:border-green-400 block w-full p-2.5"
                placeholder="sk-BdY..."
                required
                />
            </div>
            <div className="mb-6">
                <label // Label for Resume
                htmlFor="resume"
                className="block mb-2 text-sm font-medium text-gray-900">
                    Your Resume
                </label>
                <textarea // Text box for user's resume
                rows={8}
                name="resume"
                id="resume"
                className="border-2 border-solid border-gray-300 block w-full text-sm text-gray-900 p-2.5
                focus:ring-green-400 focus:border-green-400 rounded-lg"
                placeHolder="Paste here..."
                // defaultValue={AIKey}
                >
                </textarea>
            </div>
            <div className="mb-6"
            >
                <button
                    type="submit"
                    className=""
                >
                </button>
            </div>

        </form>
    </div>
  )
}

export default profile