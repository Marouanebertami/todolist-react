import React, { Component } from 'react'
import './Task.css'

class Task extends Component {

    constructor(){
        super()
    }

    render() {
        return (
            !this.props.tasks ? 
            <div>Loding</div> : 
            this.props.tasks.map(
                Task => 
                    <div key={Task.TASK_ID} className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
                        <div className="checkbox-label">
                            <input id={"checkbox-" + Task.TASK_ID} className="checkbox" onChange={() => this.props.completeTask(Task.TASK_ID)} type="checkbox" checked={ Task.TASK_DONE }/>
                            <label htmlFor={"checkbox-" + Task.TASK_ID} className="checkbox-custom"></label>
                        </div>
                        <label htmlFor={"checkbox-" + Task.TASK_ID} className={ "taskName " + (Task.TASK_DONE ? "checked" : "noChecked") }>{Task.TASK_NAME}</label>
                        <button onClick={(e) => this.props.deleteTask(e, Task.TASK_ID)} className="btn btn-danger float-right">Delete</button>
                    </div>
            )
        )
    }
}

export default Task
