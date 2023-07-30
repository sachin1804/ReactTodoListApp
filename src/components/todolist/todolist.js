import styles from "./todolist.module.css";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../todo/todo";
import {
  getInitialStateAsync,
  todoSelector,
} from "../../redux/reducers/todoReducer";
import { useEffect } from "react";

export default function Todolist() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
    //   console.log(response.data);
    //   dispatch(actions.setInitialState(response.data));
    // });
    //dispatching action to fetch initial data from the api
    dispatch(getInitialStateAsync());
  }, []);
  return (
    <>
      <h1>TodoList</h1>
      <div className={styles.todoListContainer}>
        {/* mapping over the todos getting each todo and rendering todo component */}
        {todos.map((todo, index) => (
          <Todo
            text={todo.title}
            completed={todo.completed}
            key={index}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
