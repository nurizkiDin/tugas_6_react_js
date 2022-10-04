import React, { Component } from "react";
import DaftarMakanan from "../lib/DaftarMakanan";
import Header from "./Header";

class MenuMakanan extends Component{
    render(){
        return(
            <div>
                <Header/>
                <br/>
                <h3>Daftar Makanan Favourite</h3>
                <br/>
                <table style={{width:"100%"}}>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data, index)=>{
                                return(
                                    <td key={index}>
                                        <center>
                                            <img
                                                src={data.img}
                                                alt="Product Makanan"
                                                width="150"
                                                height="100"
                                            />
                                            <p>{data.namaMakanan}</p>
                                            <p>Harga : {data.harga}</p>
                                        </center>
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MenuMakanan;