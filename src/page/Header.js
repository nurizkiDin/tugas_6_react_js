import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

class Header extends Component{
    render(){
        return(
            <div id="head">
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            <td>
                                <center>
                                    <Link to="/" className="link">
                                        Home |
                                    </Link>
                                    &nbsp;
                                    <Link to="/menu_makanan" className="link">
                                        Makanan |
                                    </Link>
                                    &nbsp;
                                    <Link to="/menu_minuman" className="link">
                                        Minuman |
                                    </Link>
                                    &nbsp;
                                    <Link to="/kontak" className="link">
                                        Kontak
                                    </Link>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Header;