import React from "react";
import { IoSendSharp } from "react-icons/io5";

function TypeSend() {
    return (
        <div className="flex space-x-2 h-[8vh] mx-4">
            <div className="w-[70%]">
                <input 
                    type="text" 
                    placeholder="Type here" 
                    className="border border-gray-700 rounded-xl px-4 py-3 mt-1 outline-none w-full bg-slate-800"      
                />
            </div>
            <button className="text-4xl">
                <IoSendSharp />
            </button>
        </div>
    )
}

export default TypeSend;