import DateDisplay from "./DateTimeDisplay";

// Definição do tipo das propriedades que o MainCard espera receber
interface MainCardProps {
  onAddTask: () => void;
}

const MainCard: React.FC<MainCardProps> = ({ onAddTask }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <DateDisplay />
        <h2>Lista de Tarefas</h2>
        <button style={styles.addButton} onClick={onAddTask}>
          + Adicionar Tarefa
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    backgroundColor: "#fff",
  },
  addButton: {
    marginTop: "10px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
  },
};

export default MainCard;
