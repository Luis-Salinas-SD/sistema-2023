import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import { almacen } from "../../credenciales";
import { doc, getDoc, setDoc } from "firebase/firestore";
//!Componentes
import Sidebar from "./Sidebar";
import AddTarea from "./AddTarea";
import ShowTarea from "./ShowTarea";


const Home = ({ correoUser }) => {
    //Hooks
    const [arrayProyectos, setArrayProyectos] = useState(null)

    //Datos de ejemplo
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

    //Funcion para buscar o crear un documento con el usuario actualmente logueado.

    async function buscarOrCrearDocumento(idDocumento) {

        //crear una referencia al documento
        const docuReferencia = doc(almacen, `usuarios/${idDocumento}`)

        //buscar el documento
        const consulta = await getDoc(docuReferencia);

        //console.log(consulta.data()); //método retorna la información del documento
        //console.log(consulta.exists()); //método exists() retorna un true o flase en caso de existir o no

        //Revisamos si existe el documento
        if (consulta.exists()) {
            //si exsiste el documento mostramos en consola la información
            const infoDoc = consulta.data()
            return infoDoc.proyecto
        } else {
            //Si no existe creamos la información
            await setDoc(docuReferencia, { proyecto: [...datosFake] });
            //revisar si existe
            const consulta = await getDoc(docuReferencia);
            const infoDoc = consulta.data()
            return infoDoc.proyecto
        }
    }

    useEffect(() => {
        async function fetchProyectos() {
            const proyectosObtenidos = await buscarOrCrearDocumento(correoUser);

            setArrayProyectos(proyectosObtenidos)
        }
        fetchProyectos()
    }, [])

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
                            {
                                arrayProyectos ? <ShowTarea info={arrayProyectos} /> : null
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home