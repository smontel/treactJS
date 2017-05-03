import React, { Component } from 'react';
import '../App.css';
import Chrono from './Chrono.js';


class Tache extends Component {
  state={
    id : this.props.id,
    name: this.props.taskname,
    content:this.props.taskdesc,
    etat:this.props.etat
  }

  deleteB = (event) =>{
    let buttonID = 'deleteB';
    const propsID = this.props.id;
    console.log(this.props.id+ ' je suis dans tache');
    this.props.onClick(event, propsID, buttonID);
  }
  goWorkB = (event) =>{
    let buttonID = 'goWork';
    const propsID = this.props.id;
    console.log(this.props.id+ ' je suis dans tache');
    this.props.onClick(event, propsID, buttonID);
  }


  render() {
    let buttonGo
    if(this.state.etat == 'todo'){
       buttonGo = <button className="btn btn-info" onClick={(event)=>this.goWorkB(event)}>Go</button>;
      }
      else{
         buttonGo ="";
      }
    return (
      <div>
        <h2>{this.props.taskname}</h2>
        <p>{this.props.taskdesc}</p>
        <button className="btn btn-danger" onClick={(event)=>this.deleteB(event)}>X</button>
        {buttonGo}
      </div>
    );
  }
}

export default Tache;
