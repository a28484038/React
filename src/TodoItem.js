import React, { Component } from "react";
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            state : this.props.status
        };
    }
    toggleStatus = () => {
        this.setState(prevState => ({
            status: prevState.status === '尚未完成' ? '已完成' : '尚未完成'
        }));
    }
    render(){
        return (
            <div>
                <h2>任務 :{this.props.task}</h2>
                <p>狀態: {this.state.status}</p>
                <button onClick={this.toggleStatus}>
                    {this.state.status === '尚未完成' ? '切換任務狀態' : '切換任務狀態'}
                </button>
            </div>
        );
    }
}
export default TodoItem;