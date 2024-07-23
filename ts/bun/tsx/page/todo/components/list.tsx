import {TodoModel as Todo} from '../../../../models/todo.ts';
import TodoInfo from './info.tsx';
import TodoItem, {TodoItemProps} from './item.tsx';
interface TodoListProps {
  todos: Todo[];
  // onItemChange?: TodoItemProps['onChange'];
  onItemDelete?: TodoItemProps['onDelete'];
  loading?: boolean;
}

const TodoList = ({
  todos = [],
  onItemDelete,
  loading = false,
}: TodoListProps) => {
  return (
    <section className="todos">
      {todos.length > 0 ? (
        <ul className="list">
          {todos.map((todo) => (
            <TodoItem 
              key={todo.id}
              value={todo}
              onDelete={onItemDelete}
            />
          ))}
        </ul>
      ) : <TodoInfo/> }
    </section>
  )
}

export default TodoList;
