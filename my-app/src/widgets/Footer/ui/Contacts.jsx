import React from "react";
import Contacts from "../../../features/Contacts";
import Text from "../../../shared/ui/Text/Text";

const FooterContacts = () => {
    return ( 
        <div className="flex justify-between items-center w-1/2">
            <Text className={"text-[var(--title-color)]"}>+91 12345 09876</Text>
            <Text className={"text-[var(--title-color)]"}>info@example.com</Text>
            <Contacts footer/>
        </div>
     );
}
 
export default FooterContacts;