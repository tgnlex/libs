import React, {useEffect, useState} from 'react';
import {TodoModel as Todo} from '../../../../models/todo.ts';

interface TodoItemProps {
  data: Todo;
 // onChange?: (todo: Pick<Todo 'id'> & Omit<Partial<Todo>>, 'id') => void;
  onDelete?: (todoId: Todo['id']) => void;
}

const TodoItem = ({
  data: {id, task, description, isActive},
  onDelete,
}: TodoItemProps) => {
  return (
    <li className="todo">
      <p className="task">{id}. {task}</p>
      <p className="desc">{description}</p>
      <DeleteButton 
        id={`btn-delete-${id}`} 
        handle={() => onDelete?.(id)} 
      />
    </li>
  )
}
