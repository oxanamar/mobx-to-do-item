import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { TodoStoreContext } from "../store/store";

const TodoItem = observer(({ todo }) => {
  const store = useContext(TodoStoreContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => todo.toggleCompleted()}
      />
      <span>{todo.title}</span>
      <button onClick={() => store.removeTodo(todo.id)}>Delete</button>
    </li>
  );
});

export default TodoItem;
