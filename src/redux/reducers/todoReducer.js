import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
};

// fetching initial todos action
export const getInitialStateAsync = createAsyncThunk(
  "todo/getInitialState",
  () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  }
);

// add todo action
export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async (payload) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: payload,
        completed: false,
      }),
    });

    return response.json();
  }
);
// delete todo action
export const deleteTodoAsync = createAsyncThunk("todo/delete", (payload) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${payload}`, {
    method: "DELETE",
  });
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // setInitialState: (state, action) => {
    //   state.todos = [...action.payload];
    // },
    // add: (state, action) => {
    //   state.todos.unshift({
    //     title: action.payload,
    //     completed: false,
    //   });
    // },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    // delete: (state, action) => {
    //   state.todos.splice(action.payload, 1);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialStateAsync.fulfilled, (state, action) => {
        console.log("dispatching this action in the component");
        state.todos = [...action.payload.data];
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        console.log("todo added", action.payload);
        state.todos.unshift(action.payload);
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        console.log("todo deleted from ", action.payload);
        state.todos.splice(action.payload, 1);
      });
  },
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
export const todoSelector = (state) => state.todoReducer.todos;
