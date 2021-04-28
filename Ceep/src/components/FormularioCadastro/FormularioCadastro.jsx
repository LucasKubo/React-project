import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component{
  render() {
    return (
      <form className="formulario-cadastro">
        <input type="text" placeholder="Título" className="formulario-cadastro_input-titulo"/>
        <textarea rows={15} placeholder="Escreva sua nota..." className="formulario-cadastro_textarea-descricao"/>        
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;