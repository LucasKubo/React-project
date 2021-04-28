import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css"

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="list-notas">
        {Array.of("Trabalho","Estudos","Rotina","rep1","rep2").map((categorias, index) => {
          return (
            <li key={index} className="list-item">
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
