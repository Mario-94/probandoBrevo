import React, { useEffect, useState } from "react";

// Asegúrate de que la variable de entorno se define con el prefijo VITE_
const apikey = import.meta.env.VITE_API_KEY;

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  async function cargarData() {
    const url = "https://api.brevo.com/v3/organization/invited/users";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "api-key": apikey,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    cargarData();
  }, []);

  return (
    <>
      <h2>Formulario</h2>
      <form className="d-flex row" onSubmit={handleSubmit}>
        <div className="row mb-2">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Nombre
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="mensaje" className="col-sm-2 col-form-label">
            Mensaje
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formulario;
