import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
import './todolist.scss'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['1', '2']
    } 
  }
  
  render() {
    return (
      <div className="todo-list">
        <div className="todo-list-header">
          <Input
            className="input-item"
            placeholder="Todo Item"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            onClick={this.handleBtnClick}
          >提交任务</Button>
        </div>
        <div className="todo-list-content">
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick = () => {
    const val = this.state.inputValue
    this.setState({
      inputValue: '',
      list: [...this.state.list, val]
    })
  }
}

export default TodoList;
