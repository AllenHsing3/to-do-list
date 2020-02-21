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
        const itemsArray = this.state.userInput.split()
        allList.push(itemsArray)
        this.setState({
            toDoList: allList
        });
    }
    handleChange(entered){
        this.setState({
            userInput: entered.target.value
        });
    }
    render(){
        const items = this.state.toDoList
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
                    {items.map(i=><li>{i}</li>)}
                </ul>
            </div>
        );
    }
};

/* ---------------------- */
let allList = []
ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
);
