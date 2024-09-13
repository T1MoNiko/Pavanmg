import React from "react";
import Project from "../../../Entities/Project/Project";

const ProjectsWrapper = () => {
    const projects = [
        {
            img: "/img/projectImg/project1.jpg", 
            title: "Project Tile goes here",
            text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            livePrewiewLink: "/",
            viewCodeLink: "/"
        },
        {
            img: "/img/projectImg/project2.jpg", 
            title: "Project Tile goes here",
            text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            livePrewiewLink: "/",
            viewCodeLink: "/"
        },
        {
            img: "/img/projectImg/project3.jpg", 
            title: "Project Tile goes here",
            text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            livePrewiewLink: "/",
            viewCodeLink: "/"
        },
        {
            img: "/img/projectImg/project4.jpg", 
            title: "Project Tile goes here",
            text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            livePrewiewLink: "/",
            viewCodeLink: "/"
        },
        {
            img: "/img/projectImg/project5.jpg", 
            title: "Project Tile goes here",
            text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            livePrewiewLink: "/",
            viewCodeLink: "/"
        },
        {
            img: "/img/projectImg/project6.jpg", 
            title: "Project Tile goes here",
            text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            livePrewiewLink: "/",
            viewCodeLink: "/"
        }
    ]

    return ( 
        <div className="grid grid-cols-3 gap-x-10 gap-y-14 px-5 mt-20">
            {
                projects.length ? projects.map((item, i) => (
                    <Project 
                        key={i}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                        stack={item.stack}
                        livePreview={item.livePrewiewLink}
                        viewCode={item.viewCodeLink}
                        className={''}
                    />
                )) : null
            }
        </div>
     );
}
 
export default ProjectsWrapper;