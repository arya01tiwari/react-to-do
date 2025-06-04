import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const completeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <div className="todo-box">
        <div className="header">
          <h1>✅ My Todo List</h1>
          <button className="toggle-btn" onClick={toggleTheme}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="input-section">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.length === 0 ? (
            <li className="empty">No tasks yet!</li>
          ) : (
            tasks.map((task, index) => (
              <li key={index} className="task-item">
                <span>{task}</span>
                <button onClick={() => completeTask(index)}>Done</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
