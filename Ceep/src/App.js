import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./App.css"

class App extends Component {
  render() {
    return (  
      <div className="main">
        <FormularioCadastro />
        <ListaDeNotas />
      </div>
    );
  }
}

export default App;