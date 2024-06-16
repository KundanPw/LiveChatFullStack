import React from "react";

function ChatUser() {
    return (
        <div className="flex space-x-3 h-[8vh] justify-center item-center bg-slate-800 hover:bg-slate-600 duration-3000">
            <div className="avatar online">
                <div className="w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div>
                <h1 className="text-xl">Raju</h1>
                <span className="text-sl">rj@gmail.com</span>
            </div>
        </div>
    )
}


export default ChatUser;