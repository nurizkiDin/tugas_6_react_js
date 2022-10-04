import React, {Component} from "react";
import Header from "./Header";
import "../style/Header.css";

class MenuHome extends Component{
    render(){
        return(
            <div>
                <Header/>
                <br/>
                <h1>
                    <center>
                        Selamat Datang Di Halaman Masakan Nusantara
                    </center>
                </h1>
                <br/>
                <div className="image_header">
                    <br/>
                </div>
            </div>
        );
    }
}

export default MenuHome;