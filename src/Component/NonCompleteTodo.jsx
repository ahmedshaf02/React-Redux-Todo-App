import React from "react";
import {
  nonCompletedTodo,
  toggleTodoStatus,
  deleteTodoItem
} from "../Redux/actionCreators";
import { connect } from "react-redux";

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
  },
  nonCompleteHeading: {
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 5,
    border: "1px solid gray",
    padding: 10,
    backgroundColor: "#4B6AF9",
    cursor: "pointer",
    color:"white"
  }
};

class NonCompleteTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      handleNonCompleteTodo,
      nonComplete,
      deleteTodo,
      toggleStatus,
      data
    } = this.props;
    return (
      <>
        <h4
          onClick={this.handleNonComplete}
          style={Styles.nonCompleteHeading}
        >
          Not Completed Todo
        </h4>
        {data &&
          data.filter(ele=>ele.status===false).map(ele => (
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
      </>
    );
  }
}

const mapStateToProps = state => ({
  // nonComplete: state.nonComplete
});
const mapDispatchToProps = disptach => ({
  // handleNonCompleteTodo: status => disptach(nonCompletedTodo(status)),
  toggleStatus: id => disptach(toggleTodoStatus(id)),
  deleteTodo: id => disptach(deleteTodoItem(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NonCompleteTodo);
