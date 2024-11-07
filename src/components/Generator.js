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
            <button className="border-2 border-solid border-green-300 text-black text-xl font-bold
            rounded-md px-3 py-2 hover:bg-green-300">
                Generate
            </button>
            <h2 className="text-2xl font-bold justify-between mx-1 my-1" style={{marginRight: '60px' }}>
                LinkedIn Cover Letter Generator
            </h2>
            <button className="border-2 px- mr-[3px] border-solid border-black rounded-full hover:bg-gray-200 
             w-12 h-12 items-center justify-center text-3xl hover:font-bold">
            </button>
        </div>
        <div className="flex mx-5">
            <textarea
                rows={12}
                className="w-full"
                placeholder="Cover Letter"
            />
        </div>
    </div>
  )
}

export default Generator