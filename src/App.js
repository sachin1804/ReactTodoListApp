import Form from "./components/form/Form";
import TodoList from "./components/todolist/todolist";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  // const [todoList, setTodoList] = useState([]);

  // function addTodo(text) {
  //   setTodoList([{ text, completed: false }, ...todoList]);
  // }

  // function handleDelete(index) {
  //   let newTodos = todoList.filter((todo, i) => i !== index);
  //   setTodoList(newTodos);
  // }

  // function handleToggle(index) {
  //   let todo = todoList.find((todo, i) => i === index);
  //   todo.completed = !todo.completed;
  //   setTodoList([...todoList]);
  // }

  return (
    <Provider store={store}>
      <div className="App">
        <h1>TodoList Application</h1>
        <Form />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
