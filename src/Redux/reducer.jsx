
import { ADD_COUNTER, REDUCE_COUNTER, LOGIN_DATA, ADD_TODO,TOGGLE_STATUS,DELETE_TODO,NON_COMPLETED_TODO} from "./actionTypes"
import { toggleTodoStatus } from "./actionCreators"

export const initState = {
  counter:0, 
  login:true,
  todo:[],
  nonComplete:[]
}


export default (state=initState, {type,payload})=>{

  switch(type){
    case ADD_COUNTER:
      return{
        ...state,
        counter: state.counter+payload
      }

    case REDUCE_COUNTER:
      return{
        ...state,
        counter: state.counter-payload
      }
    case LOGIN_DATA:
      return{
        ...state,
        login:payload
      }
    case ADD_TODO:
      return{
        ...state,
        todo:[...state.todo,payload]
      }
    case TOGGLE_STATUS:
      return{
        ...state,
        todo:state.todo.map(ele=>ele.id === payload?{...ele,status:!ele.status}:ele),
        nonComplete:state.todo.filter(ele=>ele.status === payload)
      }
    case DELETE_TODO:
      return{
        ...state,
        todo:state.todo.filter(ele=>ele.id !== payload),
        nonComplete:state.todo.filter(ele=>ele.status === payload)
      }
    case NON_COMPLETED_TODO:
      return{
        ...state,
        nonComplete:state.todo.filter(ele=>ele.status === payload)
      }
    default:
      return state
  }

}