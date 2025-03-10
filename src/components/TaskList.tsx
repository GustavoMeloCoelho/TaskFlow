import { useState } from "react";

interface Task {
  id: number;
  name: string;
  isDaily: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Estudar React", isDaily: true },
    { id: 2, name: "Fazer exercícios", isDaily: false },
  ]);

  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <li key={task.id} style={{ ...styles.taskItem, background: task.isDaily ? "#d4edda" : "#f8d7da" }}>
          {task.name}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: "none",
    padding: 0,
    margin: "10px 0",
  },
  taskItem: {
    color: "black",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default TaskList;
