import React from 'react';
import {TodoModel as Todo} from '../../../models/todo.ts';
import {TodoForm} from './form.tsx';
const todos: Todo[] = [
  {id: 1, task: "test", description: "a test item"},
  {id: 2, task: "test 2", description: "another test item"}
];
async function fetchTodos() {
    const res = await fetch('localhost:4000/todos');
    const data = await res.json();
    return data;
}

function Todo(props: {data: }) {
  return (
    <Layout title="TODO">
      <main className="container">
        <h2>Todo List</h2>
        <TodoForm />
      </main>
    </Layout>
  );
}

export {Todo};
