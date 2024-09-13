import React from "react";

const Title = ({children, className}) => {
    return ( 
        <p className={`text-[var(--title-color)] font-extrabold ${className}`}>
            {children}
        </p>
     );
}
 
export default Title;