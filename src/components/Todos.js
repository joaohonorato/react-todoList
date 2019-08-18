import React, { Component } from 'react';
import TodoItem from './TodoItem';
class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

export default Todos;
// import React, { Component } from 'react';
// import TodoItem from './TodoItem';
// import PropTypes from "prop-types"

// export class Todos extends Component {
//   render() {
//     return this.props.todos.map(todo =>
//       <TodoItem todo={todo} key={todo.id}/>)
//   }
// }

// Todos.propTypes = {
//     todos: PropTypes.array.isRequired
// }

// export default Todos;
