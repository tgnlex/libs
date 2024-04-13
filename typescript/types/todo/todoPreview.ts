interface TodoItem {
  id: number,
  name: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
type TodoPreview = Pick<TodoItem, "name" | "completed" | "createdAt">;

const preview: TodoPreview = {
	name: "Learn GO",
	completed: false,
  createdAt: 1615432342342425253424,
};

preview;