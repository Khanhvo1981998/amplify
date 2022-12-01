import React from "react";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import UserNav from "./UserNav";
export default function HeaderTemplate() {
    return (
        <div className=" w-full bg-[#00000090] drop-shadow-md overflow-hidden	">
            <div className="container mx-auto py-5 flex justify-around items-center">
                <Logo />
                <HeaderNav />
                <UserNav />
            </div>
        </div>
    );
}
