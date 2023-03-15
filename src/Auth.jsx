import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { auth } from "../credenciales";
import { onAuthStateChanged } from "firebase/auth";

function Auth() {
    //#Hooks
    const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    //#Autenticamos si el usuario esta logueado o no
    onAuthStateChanged(auth, (user) => {
        if (user) {
            /*
            - usuario = true
            Cambia el valor del estado al hook usuarioGlobal
            */
            setUsuarioGlobal(user)
        } else {
            //codio en caso de que el usuario no este logueado
            setUsuarioGlobal(null)
            console.info('No esta logueado');
        }

    })
    //#Retornamos la interfaz en caso de que sea true o null.
    return <>{usuarioGlobal ? <Home correoUser={usuarioGlobal.email} /> : <Login />}</>
}

export default Auth