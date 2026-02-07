import React, { useState, useMemo, useCallback } from "react";

// Child with React.memo
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <div 
      onClick={() => onToggle(todo.id)}
      style={{
        padding: '10px',
        margin: '5px',
        border: '1px solid #ccc',
        cursor: 'pointer',
        textDecoration: todo.done ? 'line-through' : 'none'
      }}
    >
      {todo.text} - {todo.status}
    </div>
  );
});

// Parent
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', status: 'active', done: false },
    { id: 2, text: 'Learn useMemo', status: 'completed', done: true },
    { id: 3, text: 'Learn useCallback', status: 'active', done: false },
  ]);
  const [filter, setFilter] = useState('all');

  // useMemo: Cache filtered list
  const filteredTodos = useMemo(() => {
    return todos.filter(t =>
      filter === 'all' || t.status === filter
    );
  }, [todos, filter]);

  // useCallback: Cache function
  const handleToggle = useCallback((id) => {
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <div>
        {filteredTodos.length === 0 ? (
          <p>No todos to display</p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
            />
          ))
        )}
      </div>
    </div>
  );
}
