import React from "react";
import logo from "../assets/img/logo.png";
import { auth } from "../../credenciales";
import { signOut } from "firebase/auth";
import { RiHome5Line, RiBriefcase2Line, RiSlideshowLine } from "react-icons/ri";


async function salir() {
    await signOut(auth);
    console.log('El usuario cerró sesion');
    window.location.reload()
}
const Sidebar = () => {
    return (
        <sidebar className="flex flex-col justify-between gap-8 bg-slate-700 min-h-screen max-h-screen w-80 p-4 ">
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
        </sidebar>
    )
}

export default Sidebar;