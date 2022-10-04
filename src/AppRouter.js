import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MenuMakanan from "./page/MenuMakanan";
import MenuMinuman from "./page/MenuMinuman";
import Kontak from "./page/Kontak";

function AppRouter(){
        return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<App/>}/>
                        <Route path="/menu_makanan" element={<MenuMakanan/>}/>
                        <Route path="/menu_minuman" element={<MenuMinuman/>}/>
                        <Route path="/kontak" element={<Kontak/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
}

export default AppRouter;