import { useState } from "react";
import styles from "./form.module.css";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../../redux/reducers/todoReducer";

export default function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(actions.add(title));
    //dispatching action to add todo to the server and to the state
    dispatch(addTodoAsync(title));
    setTitle("");
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" value="Create Todo" />
      </form>
    </div>
  );
}
