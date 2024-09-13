import React from "react";
import Title from "../../../shared/ui/Title/Title";
import Container from "../../../shared/ui/Container/Container";

const HeaderContent = () => {
    return (
        <Container className="flex w-full justify-between pb-[50px] items-center">
            <Title className={'text-[50px] font-extrabold'}>
                Hi 👋,<br />
                My name is <br />
                <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Pavan MG</span><br />
                I build things for web
            </Title>
            <img src="/img/creator.jpg" alt="" />
        </Container>
     );
}
 
export default HeaderContent;