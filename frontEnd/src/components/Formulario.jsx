import React from "react";

const Formulario = () => {
  return (
    <>
      <h2>Formulario</h2>
      <form action="">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>

        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">With textarea</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        <button className="btn btn-success" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formulario;
