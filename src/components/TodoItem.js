import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return { ...itemStyle, textDecoration: this.props.todo.completed ? 'line-through' : 'none' };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" defaultChecked={completed} onChange={this.props.markComplete.bind(this, id)} /> {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const itemStyle = {
  backgroundColor: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted'
};
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
