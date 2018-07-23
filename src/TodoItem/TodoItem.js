/*
 * @Author: bozhou 
 * @Date: 2018-07-23 22:44:10 
 * @Last Modified by: bozhou
 * @Last Modified time: 2018-07-24 00:17:46
 */
import React, { Component } from 'react';
import { List } from 'antd';
import store from '../store/index'
import './todoitem.scss';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = store;
    store.subscribe(this.handleStoreChange);
  }

  render () {
    return (        
      <div className="todo-list-content">
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemClick.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    );
  }
  
  handleStoreChange = () => {
    this.setState(store.getState);
  }

  handleItemClick(index) {
    console.log('aaa')
    const action = {
      type: 'remove_item',
      index
    };

    // store.dispatch(action);
  }
}

export default TodoItem

function a () {
  let m = () => {
    console.log('b')
  }
}