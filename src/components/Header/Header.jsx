import React from "react";
import style from './Header.module.css'
import logo from '../../assets/zebra.png'
import { Link } from "react-router-dom";

export default function Header(){
    const itens = ['Home','Nossos Quartos','Fale Conosco','Cadastre-se','Login','Sobre nós']
    const hrefs = ['/','/quartos','/fale-conosco','/cadastro','/login','/time']
    return (
        <header>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                {itens.map((item, index)=>{
                    return(
                        <li key={index}> 
                            <Link to={hrefs[index]}>
                                {item}
                            </Link>
                        </li>
                    )
                })}
            </nav>
        </header>
    )
}
