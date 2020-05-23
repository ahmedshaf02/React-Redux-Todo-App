import React from "react";
import {
  addTodoItem,
  toggleTodoStatus,
  deleteTodoItem
} from "../Redux/actionCreators";
import { connect } from "react-redux";
import NonCompleteTodo from "./NonCompleteTodo";

const Styles = {
  todoHeading: {
    fontSize: 40
  },
  todoList: {
    padding: 16,
    borderRadius: 5,
    backgroundColor: "#FA058B",
    width: 300,
    fontSize: 18,
    borderRight: "1px solid white",
    margin: 2
  },
  statusButton: {
    padding: 16,
    borderRight: "1px solid white",
    backgroundColor: "#FA058B",
    borderRadius: 5,
    fontSize: 18,
    outline: "none"
  },
  todoContainer: {
    width: 400
  },
  todoInput: {
    width: 300,
    borderRadius: 5,
    backgroundColor: "#F2F8F9",
    fontSize: 18,
    padding: 16,
    border: "2px solid #07505B",
    marginBottom: 20
  },
  todoAddButton: {
    borderRadius: 5,
    backgroundColor: "#07505B",
    color: "white",
    fontSize: 18,
    padding: 16
  }
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    const { value } = this.state;
    const { handleTodo, todo, toggleStatus, deleteTodo } = this.props;
    console.log(todo);
    return (
      <>
        <h1 style={Styles.todoHeading}>Todo app</h1>
        <br />
        <input
          style={Styles.todoInput}
          value={value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <button
          style={{
            borderRadius: 5,
            backgroundColor: "#07505B",
            color: "white",
            fontSize: 18,
            padding: 16,
            marginBottom: 20
          }}
          onClick={() => handleTodo(value)}
        >
          Add todo
        </button>

        <div
          style={{
            backgroundColor: "#F5FBFC",
            padding: 20,
            margin: 20,
            fontSize: 20
          }}
        >
          {todo.length ? "" : "add todo list here"}
          {todo &&
            todo.map(ele => (
              <div
                key={ele.title}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <span style={Styles.todoList}>{ele.title}</span>
                <button
                  style={Styles.statusButton}
                  onClick={() => toggleStatus(ele.id)}
                >
                  {ele.status ? (
                    <i class="far fa-check-circle" style={{ fontSize: 26 }} />
                  ) : (
                    "Undone"
                  )}
                </button>
                <button
                  style={Styles.statusButton}
                  onClick={() => deleteTodo(ele.id)}
                >
                  <i class="fas fa-trash-alt" style={{ fontSize: 20 }} />
                </button>
              </div>
            ))}
        </div>
        <div
          style={{
            backgroundColor: "#F5FBFC",
            padding: 20,
            margin: 20,
            fontSize: 20
          }}
        >
          <NonCompleteTodo data={todo} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});
const mapDispatchToProps = disptach => ({
  handleTodo: data => disptach(addTodoItem(data)),
  toggleStatus: id => disptach(toggleTodoStatus(id)),
  deleteTodo: id => disptach(deleteTodoItem(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
