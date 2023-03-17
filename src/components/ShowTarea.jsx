import React from "react";
import jsPDF from "jspdf";
import { useState } from "react";

const showTarea = ({ info }) => {
  //hooks

  const getDatos = (
    url,
    db,
    userdb,
    passdb,
    user,
    access,
    descp,
    tipo,
    company,
    img
  ) => {
    // Crear un nuevo objeto jsPDF
    const doc = new jsPDF();

    // Agregar un título al documento
    doc.text("Datos del Servicio Web.", 14, 20);
    doc.text("Datos del cliente: ", 12, 30);
    // Agregar datos del cliente
    doc.text("Empresa: " + company, 14, 35);
    doc.text("Proyecto: " + descp, 14, 40);
    // Agregar datos del sitio
    doc.text("Datos del sitio web: ", 12, 50);
    doc.text("Dominio: " + url, 14, 55);
    doc.text("Base de Datos: " + db, 14, 60);
    doc.text("Usuario de la DB: " + userdb, 14, 65);
    doc.text("Contraseña de la Base de Datos: " + passdb, 14, 70);
    doc.text("Usuario Web: " + user, 14, 75);
    doc.text("Acceso Web: " + access, 14, 80);
    // Guardar el archivo PDF en el sistema de archivos del usuario
    doc.save(`Proyecto-${company}.pdf`);
  };

  return (
    <>
      <h2 className="text-teal-500 text-2xl text-center">
        Información de los proyectos
      </h2>
      {info.map((obj, folio) => {
        //creamos un obj
        const card = {
          url: obj.url,
          db: obj.database,
          userdb: obj.dbuser,
          passdb: obj.passuser,
          user: obj.wpuser,
          access: obj.wppass,
          descp: obj.desc,
          tipo: obj.tipo,
          company: obj.empresa,
          img: obj.imagen,
        };

        const {
          url,
          db,
          userdb,
          passdb,
          user,
          access,
          descp,
          tipo,
          company,
          img,
        } = card;

        return (
          <>
            <div className="flex bg-slate-600 border rounded-lg border-teal-500 m-4 p-4">
              <section className="mx-4">
                {/* url */}
                <div className=" mb-2">
                  <label className="text-teal-500">Dominio</label> <br />
                  <a href={obj.url} target="_blank" className="text-blue-400">
                    {url}
                  </a>
                </div>
                {/* database */}
                <div className="mb-2">
                  <label className="text-teal-500">Database</label> <br />
                  <p className="text-white">{db}</p>
                </div>
                {/* dbuser */}
                <div className="mb-2">
                  <label className="text-teal-500">DBuser</label> <br />
                  <p className="text-white">{userdb}</p>
                </div>
                {/* passuser */}
                <div className="mb-2">
                  <label className="text-teal-500">Password</label> <br />
                  <p className="text-white">{passdb}</p>
                </div>
                {/* wpuser */}
                <div className="mb-2">
                  <label className="text-teal-500">Usuario</label> <br />
                  <p className="text-white">{user}</p>
                </div>
                {/* wppass */}
                <div className="mb-2">
                  <label className="text-teal-500">Acceso</label> <br />
                  <p className="text-white">{access}</p>
                </div>
              </section>
              <section className=" mx-4">
                {/* desc */}
                <div className="mb-2">
                  <label className="text-teal-500">Descripción</label> <br />
                  <p className="text-white">{descp}</p>
                </div>
                {/* tipo */}
                <div className="mb-2">
                  <label className="text-teal-500">Tipo</label> <br />
                  <p className="text-white">{tipo}</p>
                </div>
                {/* empresa */}
                <div className="mb-2">
                  <label className="text-teal-500">Empresa</label> <br />
                  <p className="text-white">{company}</p>
                </div>
                {/* imagen */}
                <div className="mb-2">
                  <label className="text-teal-500">Imagen</label> <br />
                  <img src={img} width="180"></img>
                </div>
              </section>
              <section>
                <div className="mb-2">
                  <button
                    className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={(event) => {
                      getDatos(
                        url,
                        db,
                        userdb,
                        passdb,
                        user,
                        access,
                        descp,
                        tipo,
                        company,
                        img
                      );
                    }}
                  >
                    Generar PDF
                  </button>
                </div>
              </section>
            </div>
          </>
        );
      })}
    </>
  );
};

export default showTarea;