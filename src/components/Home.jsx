import React from "react";
import logo from "../assets/img/logo.png";
import { auth } from "../../credenciales";
import { signOut } from "firebase/auth";
//!Componentes
import Sidebar from "./Sidebar";
import AddTarea from "./AddTarea";
import ShowTarea from "./ShowTarea";

const Home = () => {

    let datosFake = [
        {
            url: 'https://cerolineal.com.mx',
            database: 'base_clineal',
            dbuser: 'user_clineal',
            passuser: '123456789',
            wpuser: 'miweb',
            wppass: '123456',
            desc: 'Sitio realizado con Wordpress',
            tipo: 'Local / Produccion / Externo',
            imagen: 'https://rozvo.com/images/footer/RozvoDB-blanco.png',
            empresa: 'Rozvo'
        },
        {
            url: 'https://cerolineal.com.mx',
            database: 'base_clineal',
            dbuser: 'user_clineal',
            passuser: '123456789',
            wpuser: 'miweb',
            wppass: '123456',
            desc: 'Sitio realizado con Wordpress',
            tipo: 'Local / Produccion / Externo',
            imagen: 'https://rozvo.com/images/footer/RozvoDB-blanco.png',
            empresa: 'Rozvo'
        },
        {
            url: 'https://cerolineal.com.mx',
            database: 'base_clineal',
            dbuser: 'user_clineal',
            passuser: '123456789',
            wpuser: 'miweb',
            wppass: '123456',
            desc: 'Sitio realizado con Wordpress',
            tipo: 'Local / Produccion / Externo',
            imagen: 'https://rozvo.com/images/footer/RozvoDB-blanco.png',
            empresa: 'Rozvo'
        }
    ]

    return (
        <>
            <div className="flex">

                <Sidebar />

                <div className="w-full xl:pl-96">

                    {/* Container */}
                    <div className=" max-h-screen overflow-y-scroll">
                        <div className="bg-slate-700 border rounded-lg border-teal-500 m-4 p-4">
                            <AddTarea />
                        </div>
                        <div className="bg-slate-700 border rounded-lg border-teal-500 m-4 p-4">
                            <ShowTarea info={datosFake} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home