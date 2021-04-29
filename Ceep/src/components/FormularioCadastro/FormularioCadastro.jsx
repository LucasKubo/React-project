import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.descricao = "";
  }

  _handleGuardaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleGuardaDescricao(evento) {
    evento.stopPropagation();
    this.descricao = evento.target.value;
    console.log(this.descricao);
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.descricao);
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="formulario-cadastro_input-titulo"
          onChange={this._handleGuardaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="formulario-cadastro_textarea-descricao"
          onChange={this._handleGuardaDescricao.bind(this)}
        />
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
