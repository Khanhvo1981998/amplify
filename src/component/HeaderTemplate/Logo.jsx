import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngellist } from "react-icons/fa";
export default function Logo() {
    return (
        <div>
            <NavLink to="/">
                <div
                    className="flex gap-2 items-center text-3xl font-bold 
                 py-2 px-5 rounded-lg 
             text-yellow-500"
                >
                    <FaAngellist />
                    <span className="font-dancing ">Movie Time</span>
                </div>
            </NavLink>
        </div>
    );
}
