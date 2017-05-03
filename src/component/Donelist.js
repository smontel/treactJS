import React, {Component} from 'react';
import '../App.css';
import Tache from './Tache.js';

class App extends Component {

    state = {
        tasks: this.props.tasks
    }

    uptoapp = (event, propsID, buttonID) => {
        console.log('je suis dans la TDlist');
        this.props.onClick(event, propsID, buttonID);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({tasks: nextProps.tasks});
        console.log('je veux afficher ca' + nextProps.tasks);
    }

    render() {
        const listTask = this.state.tasks.map((task) => <Tache key={task.id.toString()} id={task.id} etat="done" onClick={(event, propsID, buttonID) => this.uptoapp(event, propsID, buttonID)} taskname={task.title} taskdesc={task.content}/>);
        return (
            <div className="list col-lg-4">
                <div className="headList">
                    <h2 className="text-center">Done list</h2>
                </div>
                <div className="bodyList">
                    {listTask}
                </div>

            </div>

        );
    }
}

export default App;
