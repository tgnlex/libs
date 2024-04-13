interface Todo {
	id: number;
	title: string;
	description: string;
}
interface TodoList {
	items: Todo[] | Todo | null;
}
const List: TodoList = [
  {
    todo_1: {
	  id = 1;
	  title: "test";
	  description: "Post Successful";
    }
  }
]
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	let todo.description = fieldsToUpdate.descripton;
	return { ...todo, ...fieldsToUpdate};

}

const update_1 = updateTodo(todo1, {
	description: "Post and update Successful"
}) {
  
}