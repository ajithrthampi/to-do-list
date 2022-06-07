import React, { Component } from 'react'
import "./TodoApp.css";

export class TodoApp extends Component {

    state = {
        input: "",
        items: []
    }


    handleChange = event => {
        this.setState({
            input: event.target.value  /// value from input tag is store din input variable.
        });
    };

    storeItems = (event) => {
        event.preventDefault();
        const { input } = this.state;

        this.setState({

            items: [...this.state.items, input],
            input: " "                        // when enter is pressed and imput="" give

        });
    };

    deleteItem = (key) => {
        this.setState({
            items: this.state.items.filter((date, index) => index !== key)// they allraedy have a return bec its arrow dont need to show


            //  const allItems = this.state.items;

            // allItems.splice(key,1);
            //      this.setState({
            //          items:allItems
        })
    };

    render() {
        const { input, items } = this.state    /// destucturing


        return (<div className="todo-container">


            <form className="input-section" onSubmit={this.storeItems}>
                <h1>TodoApp</h1>
                <input
                    type="text"
                    value={input}
                    onChange={this.handleChange}
                    placeholder="Enter items.." />

            </form>
            <ul>
                {items.map((date, index) => (
                    <li key={index} > {date} <i className="fa-solid fa-trash-can" onClick={() => this.deleteItem(index)}></i> </li>
                ))}

            </ul>
        </div>
        );
    }
}
export default TodoApp;
