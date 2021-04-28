import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component{
  render() {
    return (
      <form className="form-cadastro">
        <input type="text" placeholder="Título" className="input-titulo"/>
        <textarea placeholder="Escreva sua nota..." className="textarea-descricao"/>        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;