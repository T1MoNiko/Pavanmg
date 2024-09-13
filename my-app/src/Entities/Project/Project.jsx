import React from "react";
import Title from "../../shared/ui/Title/Title";
import Text from "../../shared/ui/Text/Text";

const Project = ({img, title, text, stack, livePreview, viewCode, className}) => {
    return ( 
        <div className={`${className} rounded-[20px] shadow-2xl`}>
            <div className="w-full">
                <img src={img} className="w-full" alt="" />
            </div>
            <div className="p-7 pt-0">
                <div >
                    <Title className={" text-[26px] font-medium text-[#000] mt-4"}>{title}</Title>
                    <Text className={"mt-3 text-[17px]"}>{text}</Text>
                    <Text className={"mt-2 text-[13px]"}><span className="text-[15px] text-[#42446E]">Tech Stack : </span>{stack}</Text>
                </div>
                <div className="flex mt-5 justify-between text-[15px]">
                    <div className="flex items-center">
                        <img src={"/img/linkChain.png"} className="w-[18px] h-[18px] mr-2" alt="" />
                        <a href={livePreview} className="underline text-black">Live Preview</a>
                    </div>
                    <div className="flex mr-6 items-center">
                        <img src={"/img/githubIcon.jpg"} className="w-[18px] h-[18px] mr-2" alt="" />
                        <a href={viewCode} className="underline text-black">View Code</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Project;