import { useState } from "react";

interface TaskModalProps {
  onClose: () => void;
  onSave: (task: { name: string; isDaily: boolean }) => void;
}

const TaskModal = ({ onClose, onSave }: TaskModalProps) => {
  const [taskName, setTaskName] = useState("");
  const [isDaily, setIsDaily] = useState(false);

  const handleSave = () => {
    if (!taskName.trim()) return;
    onSave({ name: taskName, isDaily });
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Nova Tarefa</h2>
        <input
          type="text"
          placeholder="Nome da tarefa"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={styles.input}
        />
        <label style={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={isDaily}
            onChange={() => setIsDaily(!isDaily)}
          />
          Tarefa diária?
        </label>
        <button onClick={handleSave} style={styles.saveButton}>
          Salvar
        </button>
        <button onClick={onClose} style={styles.closeButton}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "purple",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "10px 0",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
  saveButton: {
    padding: "8px 15px",
    marginRight: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  closeButton: {
    padding: "8px 15px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default TaskModal;
