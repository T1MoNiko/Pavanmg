import React from "react";
import Title from "../../shared/ui/Title/Title";
import Text from "../../shared/ui/Text/Text";

const Project = ({img, title, text, stack, livePreview, viewCode, className}) => {
    return ( 
        <div className={`${className} rounded-[20px] shadow-2xl`}>
            <div className="w-full">
                <img src={img} className="w-full" alt="" />
            </div>
            <div className="p-7 pt-0 max-sm:p-2">
                <div >
                    <Title className={"text-[26px] font-medium text-[#000] mt-4 max-xl:text-[21px] text-center max-sm:text-[17px]"}>{title}</Title>
                    <Text className={"mt-3 text-[17px] max-xl:text-[14px] max-sm:text-[11px]"}>{text}</Text>
                    <Text className={"mt-2 text-[13px] max-xl:text-[11px] max-sm:text-[8px]"}><span className="text-[15px] max-sm:text-[10px] text-[#42446E]">Tech Stack : </span>{stack}</Text>
                </div>
                <div className="flex mt-5 justify-between text-[15px] max-xl:text-[12px] max-sm:text-[9px]">
                    <div className="flex items-center">
                        <img src={"/img/linkChain.png"} className="w-[18px] h-[18px] mr-2 max-sm:w-[13px] max-sm:h-[13px]" alt="" />
                        <a href={livePreview} className="underline text-black">Live Preview</a>
                    </div>
                    <div className="flex mr-6 items-center">
                        <img src={"/img/githubIcon.jpg"} className="w-[18px] h-[18px] mr-2 max-sm:w-[13px] max-sm:h-[13px]" alt="" />
                        <a href={viewCode} className="underline text-black">View Code</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Project;