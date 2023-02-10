import logo from "../assets/img/logo.png";
import login from "../assets/img/login.jpg";
import { auth } from "../../credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

//! Function para loguear a un usuario exsistente
function Login() {

    // function autenticar usuario
    async function submitHandler(e) {
        e.preventDefault()

        const initSesion = document.querySelector('#loginUser');

        let correo = initSesion['mail'].value //yisus@mail.com
        let pwd = initSesion['pass'].value //123456

        try {
            const usuario = await signInWithEmailAndPassword(auth, correo, pwd)
            console.log(usuario);
            console.log('Bienvenido: ' + usuario.user.email);
        } catch (error) {
            const msm = error.code
            console.error('El error es el siguiente: ' + msm);
        }
    }

    return (


        <div className=" h-screen grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-1 md:col-span-3 ">
                <div className="flex justify-center items-center img-form h-screen">
                    <div className="px-3 py-0">
                        {/* Logo */}
                        <div className="mx-10 my-1">
                            <img className="m-auto" src={logo} width={250}></img>
                        </div>
                        {/* Formulario */}
                        <section className="p-3">
                            <div className="mt-3">
                                <form action="" onSubmit={submitHandler} id='loginUser'>
                                    {/* Correo */}
                                    <div className="mt-3">
                                        <label className="block text-slate-400 text-lg font-bold mb-1">Correo</label>
                                        <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700" type='email' required placeholder="correo@mail.com" id="mail"></input>
                                    </div>
                                    {/* password */}
                                    <div className="mt-3">
                                        <label className="block text-slate-400 text-lg font-bold mb-1">Contraseña</label>
                                        <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700" type='password' placeholder="********" id="pass"></input>
                                    </div>
                                    {/* boton */}
                                    <div className=" mt-6 text-center">
                                        <button className="bg-transparent hover:bg-indigo-500 text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded-full" type="submit">
                                            Ingresar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="hidden md:col-span-9  md:flex">
                <img className="bg-cover bg-center" src={login}></img>
            </div>
        </div>

    )
}

export default Login;
