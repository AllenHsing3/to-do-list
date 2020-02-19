import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const textAreaStyles = {
    width: 250,
    margin: 5
};

class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInput: "",
            toDoList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(){
        const itemsArray = this.state.userInput.split(" ")
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(entered){
        this.setState({
            userInput: entered.target.value
        });
    }
    render(){
        const items = this.state.toDoList.map(i => <li>{i}</li>)
        return(
            <div>
                <h1>to do list</h1>
                <textArea
                    onChange = {this.handleChange}
                    value = {this.state.userInput}
                    style = {textAreaStyles}
                    placeholder = "Don't forget me :)"
                />
                <br />
                <button onClick={this.handleSubmit}>Click to add to List</button>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
};

/* ---------------------- */

ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
);
