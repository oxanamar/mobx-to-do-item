import { useContext } from "react";
import { observer } from "mobx-react-lite";
import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/ToDoItem";
import { TodoStoreContext } from "./store/store";

const App = observer(() => {
  const store = useContext(TodoStoreContext);

  return (
    <div>
      <CreateTodo />
      <ul>
        {store.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
});

export default App;
