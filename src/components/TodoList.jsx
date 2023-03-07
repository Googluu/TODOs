import { Droppable, Draggable } from "@hello-pangea/dnd";

import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div
          className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvider) => (
                <TodoItem
                  todo={todo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  ref={draggableProvider.innerRef}
                />
              )}
            </Draggable>
          ))}
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};
