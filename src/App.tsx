import { useState } from "react";
import MainCard from "./components/MainCard";
import TaskModal from "./components/TaskModal";
import TaskList from "./components/TaskList"; 
import React from "react";

interface Task {
  id: number;
  name: string;
  isDaily: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (newTask: { name: string; isDaily: boolean }) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: newTask.name, isDaily: newTask.isDaily },
    ]);
  };

  const removeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div style={appStyles}> {/* 🔹 Agora passamos um objeto de estilos corretamente tipado */}
      <MainCard onAddTask={() => setIsModalOpen(true)} />
      <TaskList tasks={tasks} onRemoveTask={removeTask} />
      {isModalOpen && (
        <TaskModal
          onClose={() => setIsModalOpen(false)}
          onSave={addTask}
        />
      )}
    </div>
  );
}

// 🔹 Definindo os estilos corretamente como React.CSSProperties
const appStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
  padding: "20px",
};

export default App;
