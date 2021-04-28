import React, { Component } from "react";
import "./style.css";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>Título do card</h3>
        </header>
        <p>Texto do card</p>
      </section>
    );
  }
}

export default CardNota;
