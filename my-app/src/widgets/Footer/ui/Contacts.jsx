import React from "react";
import Contacts from "../../../features/Contacts";
import Text from "../../../shared/ui/Text/Text";

const FooterContacts = () => {
    return ( 
        <div className="flex justify-between items-center w-1/2 max-lg:w-[65%] max-md:mx-auto max-md:mt-5 text-[14px] max-md:w-[80%] max-sm:flex-col max-sm:gap-y-2">
            <Text className={"text-[var(--title-color)]"}>+91 12345 09876</Text>
            <Text className={"text-[var(--title-color)]"}>info@example.com</Text>
            <Contacts footer/>
        </div>
     );
}
 
export default FooterContacts;