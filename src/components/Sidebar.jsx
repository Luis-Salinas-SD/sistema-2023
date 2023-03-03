import React from "react";
import logo from "../assets/img/logo.png";
import { auth } from "../../credenciales";
import { signOut } from "firebase/auth";
import { RiHome5Line, RiBriefcase2Line, RiSlideshowLine, RiMenuLine, RiCloseCircleLine } from "react-icons/ri";
import { useState } from "react";


async function salir() {
    await signOut(auth);
    console.log('El usuario cerró sesion');
    window.location.reload()
}
const Sidebar = () => {
    /* Hooks */
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="min-h-screen transition-all">
            <div className={`fixed top-0 w-3/4 lg:w-96 xl:left-0 h-full flex flex-col justify-between gap-8 bg-slate-700 p-4 z-50 transition-all ${showMenu ? 'left:0' : '-left-full'}`}>
                <section>
                    <div className="logo flex items-center gap-4 mb-8">
                        <img
                            src={logo}
                            className="w-14 h-10 bg-slate-600-100 p-2 rounded-xl"
                        />
                        <div>
                            <h3 className="font-bold text-white">Cerolineal</h3>
                            <p className="text-teal-500 text-xs">
                                Desarrollo de aplicaciones
                            </p>
                        </div>
                    </div>

                    <ul className="mt-4 mb-8">
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-4 p-2 hover:bg-teal-500 transition-colors rounded-lg text-white">
                                <RiBriefcase2Line />
                                <span>Agregar un Proyecto</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-4 p-2 hover:bg-teal-500 transition-colors rounded-lg text-white">
                                <RiSlideshowLine />
                                <span>Ver Proyectos</span>
                            </a>
                        </li>
                    </ul>
                    <hr className="my-8" />

                </section>

                <section>
                    <ul className="my-4">
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-4 p-2 text-red-400 hover:bg-gray-200 transition-colors rounded-lg">
                                <RiHome5Line />
                                <button className="text-red-400" onClick={salir}>
                                    Cerrar Sesión
                                </button>
                            </a>
                        </li>

                    </ul>
                    <div className="flex items-center gap-4 pt-4 border-t">
                        <img
                            src="https://img.freepik.com/fotos-premium/retrato-viejo-mexicano-sombrero_379858-2229.jpg"
                            className="w-10 h-10 object-cover rounded-xl ring-4 ring-gray-200"
                        />
                        <div>
                            <h3 className="font-bold text-white">
                                Luis Salinas
                            </h3>
                            <p className="text-white text-xs">Desarrollador Frontend</p>
                        </div>
                    </div>
                </section>
            </div>
            <button onClick={toggleMenu} className="z-100 fixed bottom-6 right-6 text-white text-3xl rounded-full p-2 bg-teal-400 xl:hidden">
                {showMenu ? <RiCloseCircleLine /> : <RiMenuLine />}
            </button>
        </div>
    )
}

export default Sidebar;