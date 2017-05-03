import React, {Component} from 'react';
import '../App.css';
import Chrono from './Chrono.js';
import Tache from './Tache.js';

class NewTache extends Component {

    state = {}

    handleName = (event) => {
        this.setState({title: event.target.value});
    }
    handleDesc = (event) => {
        this.setState({content: event.target.value});
    }

    leSubmit = (event) => {

        var timestamp = (new Date()).getTime();
        const coucou = {
            title: this.state.title,
            content: this.state.content,
            id : timestamp
        };
        // event.preventDefault();
        event.preventDefault();
        this.props.onSubmit(event, coucou);
        // this.props.addTask();
    }

    render() {
        return (
            <div className=" col-md-5">
                <form onSubmit={this.leSubmit}>
                    <label>
                        Task Name:
                        <input type="text" name="name" onChange={this.handleName}/>
                    </label>
                    <label>
                        Task Description:
                        <input type="text" name="name" onChange={this.handleDesc}/>
                    </label>
                    <button className="btn btn-sucess " onClick={this.leSubmit}>
                        Click me
                    </button>

                </form>
            </div>
        );
    }
}

export default NewTache;
