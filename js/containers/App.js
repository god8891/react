/*import React, {Component, PropTypes} from 'react';
import {connect } from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/index';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';


class App extends Component {
  render() {
    console.log(this.props);
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(completeTodo(index))
          } />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);*/

/*import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect } from 'react-redux';
import {add, sub} from '../actions/index';
*/
/*class Counter extends Component {
    render() {
        console.log(this.props);

        const {add, sub, counter} = this.props;
        return (
            <div>
                <strong>{counter}</strong>
                <button onClick={(e) => add(1)}>+</button>
                <button onClick={(e) => sub(1)}>-</button>
            </div>
        )
    }
}*/

/*class MsgList extends Component {
    render () {
        console.log(this.props);
        const {show, list } = this.props;
        return (
            <ul>
                {
                    list.map(function(item,i){
                        return <li id={item.id} onClick={this._show}>{item.txt}</li>
                    });
                }
            </ul>
        )
    }
    _show(e){

        let id = e.target.id;
        this.props.show(id);

    }
}

class Show extends Component {
    render() {
        console.log(this.props);
        const {content} = this.props;

        return (
            <div>{content}</div>
        )
    }
}*/

/*class App extends Component {
    render() {
        console.log(this.props);

        const { pull } = this.props;

        return (
            <MsgList />
            <Show />
        );
    }
}*/


/*class App extends Component {
    render() {
        console.log(this.props);
        const {add, sub, counter} = this.props;
        return (
            <div>
                <strong>{counter}</strong>
                <button onClick={(e) => add(counter)}>+</button>
                <button onClick={(e) => sub(counter)}>-</button>
            </div>
        )
    }
};*/

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect } from 'react-redux';
import {add, sub} from '../actions/index';
import MsgList from '../components/messageList';

class App extends Component {
	render() {
		console.log(this.props);
		//const {add, sub, counter} = this.props;

		return (
			<div className="msg-container">
				<MsgList />

			</div>
		)
	}
};


export default connect(function(state){
   //将state注入到props
   return {
        counter : state
   } 
},function(dispatch){
    //将actons里面的方法注入到props
    return bindActionCreators({
        add : add,
        sub : sub
    },dispatch)
})(App);