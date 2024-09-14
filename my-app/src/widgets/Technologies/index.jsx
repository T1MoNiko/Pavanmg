import React from "react";
import Title from "../../shared/ui/Title/Title";
import Text from "../../shared/ui/Text/Text";
import StackWrapper from "./ui/StackWrapper";

const Technologies = () => {
    return ( 
        <section className="mt-52">
            <Title className={"font-extrabold text-[45px] text-center max-lg:text-[35px]"}>My Tech Stack</Title>
            <Text className={"text-center mt-3 text-[30px] max-lg:text-[20px]"}> Technologies I’ve been working with recently</Text>
            <StackWrapper className={"mt-32 gap-y-11"}/>
        </section>
     );
}
 
export default Technologies;