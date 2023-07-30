// import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./todo.module.css";
import { actions, deleteTodoAsync } from "../../redux/reducers/todoReducer";

export default function Todo({ text, completed, index }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.todoContainer}>
        <span className={styles.todoText}>{text}</span>
        <span
          className={
            completed
              ? styles.toggleStatusCompleted
              : styles.toggleStatusPending
          }
        >
          {completed ? "completed" : "pending"}
        </span>
        <input
          type="button"
          value="toggle"
          className={styles.toggleBtn}
          onClick={() => dispatch(actions.toggle(index))}
        />
        <input
          type="button"
          value="Delete"
          className={styles.deleteBtn}
          onClick={() => dispatch(deleteTodoAsync(index))}
        />
      </div>
    </>
  );
}
