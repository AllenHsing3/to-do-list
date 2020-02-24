import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let allList = []

class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInput: "",
            toDoList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.isComplete = this.isComplete.bind(this);
        this.clearList = this.clearList.bind(this)

    }

    handleSubmit(){
        const itemsArray = this.state.userInput.split()
        allList.push(itemsArray)
        this.setState({
            toDoList: allList,
            userInput: ""
        });
    }
    handleChange(entered){
        this.setState({
            userInput: entered.target.value
        });
    }
    isComplete = e => {
        e.target.classList.toggle("strikeThrough")
    }
    clearList(e){
        allList = []
        this.setState({
            toDoList: []
        });  
    };
    render(){
        const items = this.state.toDoList
        return(
            <div>
            <h1 className="title">todo</h1>
            <div className="body">
                <input
                    onChange = {this.handleChange}
                    value = {this.state.userInput}
                    className = "listInput"
                    placeholder = "Don't forget me :)"
                />
                <br />
                <button className="addBtn" onClick={this.handleSubmit}>+</button>
                <p className="addedList">
                    {items.map(i=>
                    <p onClick={this.isComplete}>{i}</p>)}
                </p>
            </div>
            <div className="buttonContainer">
            <button className="clearBtn" onClick={this.clearList}>Clear</button>
            </div>
            </div>
        );
    }
};

/* ---------------------- */
ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
);
