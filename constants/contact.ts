import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Phone Number",
        value: "+1 (123) 456-7890",
        icon: PhoneIcon
    },
    {
        title: "Pac Consulting Address",
        value: "Texas, USA",
        icon: MapPinIcon
    },
    {
        title: "Email Address",
        value: "phill@pacconsults.com",
        icon: MailIcon
    }
] as const;
