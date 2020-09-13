import React, { Component } from 'react'
import Task from './Task'
import Formadd from './addTask'

class Tasks extends Component {

    constructor(){
        super()
        this.state = {
            Tasks: null
        }
    }

    componentDidMount(){
        this.getTasks();
    }

    async getTasks(){
        try{
            if(!this.state.Tasks){
                const response = await fetch('/api/getTasks');
                const Tasks = await response.json();
                this.setState({
                    Tasks: Tasks
                });
            }
        }catch(err){
            console.log(err);
        }
    }

    completeTask(id){
        const updateItem = {
            'TASK_ID': id,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateItem)
        };
        fetch("/api/taskComplete", requestOptions)
            .then(updateItem => updateItem.json())
            .then(
                (result) => {
                    const listTasks = this.state.Tasks.map(
                        (Task) => {
                            if(Task.TASK_ID == updateItem.TASK_ID){
                                Task.TASK_DONE = result.TASK_DONE
                            }
                            return Task;
                        })
                    this.setState((prevState, props) => ({
                        Tasks: listTasks
                    }));
                },
                (error) => {
                    console.log(error)
            });    
    }

    handleSubmit(event, taskName){
        event.preventDefault();
        const addItem = { 'TASK_NAME': taskName, }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addItem)
        };

        fetch("/api/addTask", requestOptions)
            .then(addItem => addItem.json())
            .then(
                (result) => {
                    if(result != null){
                        this.state.Tasks.push(result)
                        this.setState((prevState, props) => ({
                            Tasks: this.state.Tasks
                        }));
                    }
                },
                (error) => {
                    console.log(error)
            });
    }

    deleteTask(event, taskId){
        event.preventDefault();
        const deleteItem = { 'TASK_ID': taskId }
        this.state.Tasks.map(
            Task => {
                if(Task.TASK_ID == taskId){
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(deleteItem)
                    };

                    fetch("/api/deleteTask", requestOptions)
                        .then(deleteItem => deleteItem.json())
                        .then(
                            (result) => {
                                if(result == true){
                                    var taskIndex = this.state.Tasks.indexOf(Task);
                                    this.state.Tasks.splice(taskIndex, 1);
                                    
                                    this.setState({
                                        Tasks: this.state.Tasks
                                    });
                                }
                            },
                            (error) => {
                                console.log(error)
                        });
                }
            }
        )
    }

    render() {
        return (
            <div className="row m-0">
                <Formadd addTask={ this.handleSubmit.bind(this) }/>
                <Task tasks={this.state.Tasks} deleteTask={this.deleteTask.bind(this)} completeTask={this.completeTask.bind(this)} />
            </div>
        )
    }
}

export default Tasks
