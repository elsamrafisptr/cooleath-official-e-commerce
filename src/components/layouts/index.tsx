import { ReactNode } from "react";
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";
import NextAuthProvider from "./Auth/NextAuthProvider";
import { Sheet } from "../ui/sheet";

interface LayoutsProps {
    children: ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
    return (
        <div className="no-scrollbar bg-base-100">
            <Sheet>
                <Navbar />
                <main className="">{children}</main>
                <Footer />
            </Sheet>
        </div>
    );
};

export default Layouts;
