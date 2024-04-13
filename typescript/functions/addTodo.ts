interface Todo {
	id: number;
	title: string;
	description: string;
}
interface TodoList {
	items: Todo[] | Todo | null;
}
const List: TodoList = [];

function addTodo(todo: Todo) {
	List.push(todo);
}


const todo_1 {
	id = 1;
	title: "test";
	description: "Todo Posted!"