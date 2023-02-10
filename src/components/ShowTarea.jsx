import React from "react";

const showTarea = ({ info }) => {


    return (
        <>
            <h2 className="text-teal-500 text-2xl text-center">Información de los proyectos</h2>
            {info.map(function (obj) {
                return (
                    <>
                        <div className="flex bg-slate-600 border rounded-lg border-teal-500 m-4 p-4">
                            <section className="mx-4">
                                {/* url */}
                                <div className=" mb-2">
                                    <label className="text-teal-500">Dominio</label> <br />
                                    <a href={obj.url} target="_blank" className="text-blue-400">{obj.url}</a>
                                </div>
                                {/* database */}
                                <div className="mb-2">
                                    <label className="text-teal-500">Database</label> <br />
                                    <p className="text-white">{obj.database}</p>
                                </div>
                                {/* dbuser */}
                                <div className="mb-2">
                                    <label className="text-teal-500">DBuser</label> <br />
                                    <p className="text-white">{obj.dbuser}</p>
                                </div>
                                {/* passuser */}
                                <div className="mb-2">
                                    <label className="text-teal-500">Password</label> <br />
                                    <p className="text-white">{obj.passuser}</p>
                                </div>
                                {/* wpuser */}
                                <div className="mb-2">
                                    <label className="text-teal-500">Usuario</label> <br />
                                    <p className="text-white">{obj.wpuser}</p>
                                </div>
                                {/* wppass */}
                                <div className="mb-2">
                                    <label className="text-teal-500">Acceso</label> <br />
                                    <p className="text-white">{obj.wppass}</p>
                                </div>
                            </section>
                            <section className=" mx-4">
                                {/* desc */}
                                <div className="mb-2">
                                    <label className="text-teal-500">Descripción</label> <br />
                                    <p className="text-white">{obj.desc}</p>
                                </div>
                                {/* tipo */}
                                <div className="mb-2">
                                    <label className="text-teal-500">Tipo</label> <br />
                                    <p className="text-white">{obj.tipo}</p>
                                </div>
                                {/* empresa */}
                                <div className="mb-2">
                                    <label className="text-teal-500">Empresa</label> <br />
                                    <p className="text-white">{obj.empresa}</p>
                                </div>
                                {/* imagen */}
                                <div className="mb-2">
                                    <label className="text-teal-500">Imagen</label> <br />
                                    <img src={obj.imagen} width="180"></img>
                                </div>
                            </section>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default showTarea;