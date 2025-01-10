import React from 'react'
import {ROUTES} from "../utils/pages";
import { RiContractRightLine } from "react-icons/ri";
import {save} from "../utils/storage";
import {load} from "../utils/storage";

//import { VscQuestion } from "react-icons/vsc";


// Profile section for user API keys and for entering their resume information
function Profile( {setPage, resume, setResume, AIKey, setAIKey} ) {

    const submit = (e) => {
        e.preventDefault() // Stops page from reloading
        const formData = new FormData(e.target) // Allows for submissions to be saved and stored
        const updatedResume = formData.get("resume") // Stores any new submissions in updatedResume var
        const updatedAIKey = formData.get("AIKey") // Stores any new AI Key inputs
        save('resume', updatedResume)
        save('AIKey', updatedAIKey)

        setAIKey(updatedAIKey)
        setResume(updatedResume)

    };

  return (
    <div className="flex flex-col mx-5">
        <div className="flex flex-row justify-between mx-5 my-4 items-center" 
        style={{marginLeft: '-5px' }}>

            <h2 // Header titled 'Your Info'
            className="text-2xl font-bold justify-between mx-1 my-1">
                Your Info
            </h2>

            <button // Backarrow Button
            type="button"
            onClick={() => { setPage(ROUTES.GENERATOR) }} // Swaps page with generator.js
            className="flex border-2 border-solid border-black rounded-full hover:bg-gray-50
             w-12 h-12 justify-center text-3xl items-center"
             style={{marginRight: '-20px' }}>
                <RiContractRightLine />
            </button>

        </div>

        <form className="flex-col" 
        onSubmit={submit} // Passes submit function to form
        >
            <div className="mb-6 w-1/3">

                <label // Label for OpenAI API Key
                htmlFor="AIKey"
                className="block mb-2 text-sm font-medium text-gray-900 w-50">
                OpenAI API Key
                </label>
                
                <input // Input box for AI Key           
                id="AIKey"
                name="AIKey"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-gray-400 focus:border-gray-400 focus:bg-white block w-full p-2.5"
                placeholder="sk-BdY..."
                required
                defaultValue={AIKey}
                />

            </div>
            <div className="mb-6">
                
                <label // Label for 'Your Resume'
                htmlFor="resume"
                className="block mb-2 text-sm font-medium text-gray-900">
                    Your Resume
                </label>

                <textarea // Text box for user's resume
                rows={8}
                name="resume"
                id="resume"
                className="border-2 border-solid border-gray-300 block w-full text-sm text-gray-900 p-2.5
                focus:ring-gray-400 focus:ring-0 focus:border-gray-400 rounded-lg bg-gray-50 focus:bg-white"
                placeHolder="Paste here..."
                defaultValue={resume}
                >
                </textarea>

            </div>
            <div className="flex col mb-6 justify-between"
            >

                <button // Save button
                    type="submit"
                    className="border-2 rounded-3xl px-7 py-2 border-solid bg-blue-500 text-white
                     border-blue-500 block text-lg hover:bg-blue-450 hover:border-blue-450 font-semibold tracking-wide"
                >
                    Save
                </button>

                
                
            </div>

        </form>
    </div>
  )
}

export default Profile