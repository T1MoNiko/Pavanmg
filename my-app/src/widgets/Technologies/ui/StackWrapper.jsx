import React from "react";

const StackWrapper = ({className}) => {
    const icons = [
        "/img/htmlIcon.jpg", 
        "/img/cssIcon.jpg", 
        "/img/jsIcon.jpg", 
        "/img/reactIcon.jpg", 
        "/img/reduxIcon.jpg", 
        "/img/bootstrapIcon.jpg",
        "/img/tailwindIcon.jpg", 
        "/img/sassIcon.jpg", 
        "/img/gitIcon.jpg", 
        "/img/greensockIcon.jpg", 
        "/img/vsIcon.jpg", 
        "/img/githubIcon.jpg"
    ]

    return ( 
        <div className={`grid grid-cols-6 w-full gap-5 m-auto items-center justify-center max-lg:grid-cols-4 max-lg:w-[80%] ${className}`}>
            {icons.map((ref, i) => (
                <img className="block mx-auto w-[80%]" key={i} src={ref} alt="" />
            ))}
        </div>
     );
}
 
export default StackWrapper;