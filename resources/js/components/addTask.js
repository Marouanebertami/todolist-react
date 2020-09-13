import React, { Component } from 'react'

class addTask extends Component {

    constructor(){
        super()
        this.state = {
            TaskName: ''
        }
    }

    takeNameTask(event){
        this.setState({ TaskName: event.target.value })
    }

    render() {
        return (
            <div className="col-md-12 mb-4">
                <form className="col-md-12">
                    <div className="row">
                        <div className="col-8">
                            <input type="text" className="form-control" onChange={this.takeNameTask.bind(this)} placeholder="Task" value={this.state.TaskName}/>
                        </div>
                        <div className="col-4">
                            <button onClick={(e) => { this.props.addTask(e, this.state.TaskName) } } className="btn btn-danger col-12">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default addTask
