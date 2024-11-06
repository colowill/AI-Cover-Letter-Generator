// Command 'rfce'
import React from 'react'

function Generator() {
  return (
    /** div info
     *  1. alligning child componenets in a vertical column
     *  2. creating header
     */
    <div className="flex flex-col">
        <div className="flex flex-row justify-between mx-5 my-4 items-center">
            <button className="border-2 border-solid border-blue-400 text-black text-xl">
                Generate
            </button>
            <h2 className="text-2xl font-bold">
                LinkedIn Cover Letter Generator
            </h2>
            <button classname="border mr-[1px] p-2 border-solid border-gray-600 rounded-[100%]">

            </button>
            
        </div>

    </div>
  )
}

export default Generator