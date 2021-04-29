import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, descricao){
    const novaNota = {titulo,descricao}; {/*Cria objeto da nova nota*/}
    const novoArrayNotas = [...this.state.notas, novaNota]; {/*cria um novo array de notas*/}
    const novoEstado = {
      notas:novoArrayNotas 
    }
    this.setState(novoEstado);
  }

  render() {
    return (  
      <div className="main">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/> {/*Passando uma PROPRIEDADE para FormularioCadastro*/}
        <ListaDeNotas notas={this.state.notas}/>
      </div>
    );
  }
}

export default App;