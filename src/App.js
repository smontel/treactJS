import React, {Component} from 'react';
import './App.css';
import Todolist from './component/Todolist.js';
import Winprogress from './component/Winprogress.js';
import Donelist from './component/Donelist.js';
import Project from './component/Project.js';
import NewTache from './component/NewTache.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {
                    id: 1,
                    title: "Premiere tache",
                    content: "je dois faire des courses"
                }, {
                    id: 2,
                    title: "deuxieme tache",
                    content: "je dois faire des pompes"
                }, {
                    id: 3,
                    title: "troisieme tache",
                    content: "je dois faire caca"
                }
            ],
            done: [
                {
                    id: 5,
                    title: "Premiere tache",
                    content: "je dois faire des courses"
                }, {
                    id: 8,
                    title: "deuxieme tache",
                    content: "je dois faire des pompes"
                }
            ],
            inProgress: []
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    addTask(event, coucou) {
        let arr = this.state.todo;
        arr.push(coucou);
        this.setState({todo: arr});
        console.log(coucou);
        console.log(this.state.todo)
        event.preventDefault();
    }

    actButtonTD = (event, propsID, buttonID) => {
        console.log(buttonID);
        if (buttonID == 'deleteB') {
            console.log('je suis dans app et ceci est l ID de la task ' + propsID);
            let arr = this.state.todo;
            let newarr = [];
            for (let i = 0; i < arr.length; i++) {
                if (propsID != arr[i].id) {
                    newarr.push(arr[i]);
                } else {
                    console.log("cet ID est celui que l'on veut supprimer : " + arr[i].id);
                }
            }
            this.setState({
                todo: newarr
            }, this.updatingItem);
        } else if (buttonID == 'goWork') {
            console.log('je suis le bouton a liste à faire ' + propsID);
            let arrTodo = this.state.todo;
            let newarrTodo = [];
            let newarrDone = this.state.done;
            for (let i = 0; i < arrTodo.length; i++) {
                if (propsID != arrTodo[i].id) {
                    newarrTodo.push(arrTodo[i]);
                } else {
                    newarrDone.push(arrTodo[i]);
                }
            }
            this.setState({
                todo: newarrTodo,
                done: newarrDone
            }, this.updatingItem);
        }
    }
    actButtonDN = (event, propsID, buttonID) => {
        if (buttonID == 'deleteB') {
            console.log('je suis dans app et ceci est l ID de la task ' + propsID);
            let arr = this.state.done;
            let newarr = [];
            for (let i = 0; i < arr.length; i++) {
                if (propsID != arr[i].id) {
                    newarr.push(arr[i]);
                } else {
                    console.log("cet ID est celui que l'on veut supprimer : " + arr[i].id);
                }
            }
            this.setState({
                done: newarr
            }, this.updatingItem);
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Todolist onClick={(event, propsID, buttonID) => this.actButtonTD(event, propsID, buttonID)} tasks={this.state.todo}/>
                    <Donelist onClick={(event, propsID, buttonID) => this.actButtonDN(event, propsID, buttonID)} tasks={this.state.done}/>
                    <Winprogress/>
                </div>
                <div className="row">
                    <NewTache onSubmit={(event, coucou) => this.addTask(event, coucou)}/>
                </div>
            </div>
        );
    }
}

export default App;
