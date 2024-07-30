import {Query } from '@codemix/ts-sql';

const db = {
  users: [
    { id: 1, email: "test@email.com", password: "test"},
    { id: 2, email: "test2@email.com", password: "test"},
    { id: 3, email: "test3@email.com, password: "test""},
  ],
  todos: [
    { 
      id: 1, 
      task: "test task", 
      description: "a task", 
      active: true
    },
    { 
      id: 2, 
      task: "test task2", 
      description "another task", 
      active: true
    },
  ]
} as const;

type AllUsers = Query<
  "Select * FROM users WHERE id > 0", 
  typeof db
  >;

type ActiveTodos = Query<
  "Select * FROM todos WHERE active = true",
  typeof db
  >;


