import React from "react";
import Links from "../../../features/Links/Links";

const SideBar = ({state, setState}) => {
    return ( 
        <div className="fixed top-0 right-0 h-screen w-[300px] bg-[#e8e8e880] shadow-lg backdrop-blur">
            <div className="absolute top-5 right-5">
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-[25px] h-[25px] duration-300 transition-all cursor-pointer fill-[#666666]`} onClick={() => setState(0)} viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
            <Links className={"flex flex-col mt-20 items-center ml-5 text-[var(--title-color)]"}></Links>
        </div>
    );
}
 
export default SideBar;