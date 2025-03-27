import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Header />
            {/* <Sidebar /> */}
            <main className="h-screen" >
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
