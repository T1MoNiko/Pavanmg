import React from "react";
import Title from "../../../shared/ui/Title/Title";
import Container from "../../../shared/ui/Container/Container";

const HeaderContent = () => {
    return (
        <Container className="flex w-full justify-between pb-[50px] items-center max-md:flex-col-reverse">
            <Title className={'text-[50px] font-extrabold max-lg:text-[40px] max-md:text-center max-md:mt-10 max-sm:text-[30px]'}>
                Hi 👋,<br />
                My name is <br />
                <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Pavan MG</span><br />
                I build things for web
            </Title>
            <div>
                <img src="/img/creator.jpg" className="max-lg:w-[350px] max-md:mt-14 max-md:w-[300px] max-sm:w-[200px]" alt="" />
            </div>
        </Container>
     );
}
 
export default HeaderContent;