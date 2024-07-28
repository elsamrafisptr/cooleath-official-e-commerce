import { ReactNode } from "react";

export type NavbarItemsProps = {
    route: string;
    title: string;
    children?: ReactNode;
};

const NavbarItemsData: NavbarItemsProps[] = [
    {
        title: "Home",
        route: "/",
    },
    // {
    //   title: "About Us",
    //   route: "/about",
    // },
    {
        title: "Showroom",
        route: "/showroom",
    },
    {
        title: "Contact",
        route: "/contact",
    },
];

export default NavbarItemsData;
