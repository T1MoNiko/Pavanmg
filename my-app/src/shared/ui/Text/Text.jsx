import React from "react";

const Text = ({children, className}) => {
    return ( 
        <p className={`text-[var(--text-color)] ${className}`}>{children}</p>
     );
}
 
export default Text;