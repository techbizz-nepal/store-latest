import {IMenu, IMenuItem} from "@/modules/header/domain/types/header";

const headerMenuItems: IMenuItem[] = [
    {
        name: "about-us",
        label: "About us",
        url: "#"
    },
    {
        name: "blog",
        label: "Blog",
        url: "#"
    },
    {
        name: "contact-us",
        label: "Contact Us",
        url: "#"
    },
    {
        name: "help-and-support",
        label: "Help & support",
        url: "#"
    }
]
export const headerMenuObject: IMenu = {
    name: "header-menu",
    items: headerMenuItems
}