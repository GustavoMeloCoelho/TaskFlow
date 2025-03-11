import React from "react";

interface Task {
  id: number;
  name: string;
  isDaily: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onRemoveTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask }) => {
  return (
    <ul style={listStyles}>
      {tasks.length === 0 ? (
        <p style={noTasksStyles}>Nenhuma tarefa adicionada</p>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            style={{
              ...taskItemStyles,
              backgroundColor: task.isDaily ? "#d4edda" : "#f8d7da",
            }}
          >
            {task.name}
            <button style={removeButtonStyles} onClick={() => onRemoveTask(task.id)}>❌</button>
          </li>
        ))
      )}
    </ul>
  );
};

// 🔹 Agora os estilos estão corretamente tipados como React.CSSProperties
const listStyles: React.CSSProperties = {
  listStyleType: "none",
  padding: 0,
  margin: "10px 0",
  width: "300px",
};

const removeButtonStyles: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  color: "#ff0000",
};


const taskItemStyles: React.CSSProperties = {
  padding: "10px",
  margin: "5px 0",
  borderRadius: "5px",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "bold",
};

const noTasksStyles: React.CSSProperties = {
  textAlign: "center",
  fontSize: "14px",
  color: "#888",
};

export default TaskList;
