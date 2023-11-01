import React from "react";

function Navbar() {  // Changed to 'Navbar'
    return (
        <nav className="bg-green-600 h-14 border-b border-green-700 drop-shadow-md flex item-center px-5">
            <ul className="flex justify-between items-center w-full">
                <h1 className="text-white font-bold">audiophilify</h1>
                <input className="p-2 px-4 w-96 rounded-full bg-green-500 text-black placeholder:text-gray-700 border-green-700 focus:outline-none focus:ring focus:ring-green-900 text-white" type="text" placeholder="Search..."/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
            </ul>
        </nav>
    )
}

export default Navbar;  // Changed to 'Navbar'
