function TodoForm()  {
  return (
    <form>
      <input 
        id="task"
        name="task"
        type="text"
        placeholder="enter task name"
      />
      <textarea 
        id="desc" name="desc" type="text" 
        placeholder="Enter a description">
      </textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default TodoForm;
