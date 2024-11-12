// Command 'rfce'
import React from 'react'
import {ROUTES} from "../utils/pages";
import { IoInformationOutline } from "react-icons/io5";


function Generator( {setPage} ) {
  return (
    /** 
     * Main container for application that generates the CL
     * 
     */
    <div className="flex flex-col">
        <div className="flex flex-row justify-between mx-5 my-4 items-center">

            <button // Create button
            className="border-2 border-solid border-green-400 bg-green-400 text-white 
            text-xl font-semibold tracking-wide rounded-3xl px-5 py-2 hover:bg-green-350 hover:border-green-350">
                Create
            </button>

            <h2  // Header titled 'LinkedIn...'
            className="text-2xl font-bold justify-between mx-1 my-1" style={{marginRight: '60px' }}>
                LinkedIn Cover Letter Generator
            </h2>

            <button // Profile button
            onClick={() => { setPage(ROUTES.PROFILE) }}
            className="border-2 border-solid border-black rounded-full hover:bg-gray-100 
             w-12 h-12 justify-center text-3xl flex items-center">
                <IoInformationOutline />
            </button>

        </div>
        <div className="flex mx-5">

            <textarea // Textarea where CL is produced
                rows={12}
                className="border-2 border-solid border-gray-300 block text-sm text-gray-900 p-2.5
                focus:ring-gray-400 focus:ring-0 focus:border-gray-400 rounded-lg  focus:bg-white w-full"
                placeholder=". . . "
            />

        </div>
    </div>
  )
}

export default Generator