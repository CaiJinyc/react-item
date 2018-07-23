/*
 * @Author: bozhou 
 * @Date: 2018-07-23 23:45:13 
 * @Last Modified by: bozhou
 * @Last Modified time: 2018-07-24 00:08:05
 */
import React, { Component } from 'react';
import store from '../store/index'
import { Button, Input } from 'antd';
import TodoItem from '../TodoItem/TodoItem'
import './todolist.scss'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store
    store.subscribe(this.handleStoreChange)
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
        <TodoItem data={this.state.list} />
      </div>
    );
  }

  handleStoreChange = () => {
    this.setState(store.getState);
  }

  handleInputChange = (e) => {
    const action = {
      type: 'handle_input_change',
      value: e.target.value
    }

    store.dispatch(action);
  }

  handleBtnClick = (e) => {
    e.stopPropagation()
    console.log(this.state.inputValue)
    if (this.state.inputValue === '' || typeof this.state.inputValue !== 'string') return;
    const action = {
      type: 'handle_btn_click'
    }

    store.dispatch(action);
  }
}

export default TodoList;
