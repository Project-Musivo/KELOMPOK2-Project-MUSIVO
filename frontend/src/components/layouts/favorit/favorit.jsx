import { useState } from "react";
import NavigationBar from "../layouts/navigationBar.jsx/navigationBar";
import Sidebar from "../layouts/sidebar/sidebar";

const favorit = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <div>
                <NavigationBar />

            </div>
        </div>
    );
};
export default favorit;