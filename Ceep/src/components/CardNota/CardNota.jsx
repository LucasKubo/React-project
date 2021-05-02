import React, { Component } from "react";
import "./style.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG/>
        </header>
        <p className="card-nota_descricao">{this.props.descricao}</p>
      </section>
    );
  }
}

export default CardNota;
