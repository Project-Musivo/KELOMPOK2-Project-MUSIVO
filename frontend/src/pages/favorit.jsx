import { useState } from "react";
import NavigationBar from "../components/layouts/navigationBar.jsx/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import Header from "../components/layouts/headermusic/header";

const Favorit = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <NavigationBar/>
                <Header />
            </div>
        </div>
    );
};
export default Favorit;