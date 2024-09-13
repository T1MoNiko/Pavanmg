import React from "react";
import ProjectsWrapper from "./ui/ProjectsWrapper";
import Title from "../../shared/ui/Title/Title";
import Text from "../../shared/ui/Text/Text";

const Projects = () => {
    return ( 
        <section className="mt-44">
            <Title className={"text-[45px] text-center"}>Projects</Title>
            <Text className={"mt-2 text-[30px] text-center"}>Things I’ve built so far</Text>
            <ProjectsWrapper/>
        </section>
     );
}
 
export default Projects;