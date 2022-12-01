import React from "react";

const linkStyle =
    " text-slate-200 text-xl font-semibold uppercase hover:bg-zinc-900 hover:text-yellow-500 ease-in-out duration-300 px-10 py-10 ";
export default function HeaderNav() {
    return (
        <ul className=" flex my-0 justify-center items-center ">
            <li className="">
                <a href="#" className={linkStyle}>
                    Phim
                </a>
            </li>
            <li>
                <a href="#" className={linkStyle}>
                    Lịch Chiếu
                </a>
            </li>
            <li>
                <a href="#" className={linkStyle}>
                    Tin tức
                </a>
            </li>
        </ul>
    );
}
