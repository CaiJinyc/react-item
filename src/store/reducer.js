/*
 * @Author: bozhou 
 * @Date: 2018-07-23 23:45:27 
 * @Last Modified by: bozhou
 * @Last Modified time: 2018-07-24 00:03:36
 */
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if (action.type === 'handle_input_change') {
    newState.inputValue = action.value;
    console.log(newState);
    return newState;
  }
  
  if (action.type === 'handle_btn_click') {
    console.log(state);
    newState.inputValue = '';
    newState.list = [...state.list, state.inputValue];
    return newState;
  }

  if (action.type === 'remove_item') {
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
}