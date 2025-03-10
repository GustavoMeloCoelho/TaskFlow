import DateTimeDisplay from "./DateTimeDisplay";

const MainCard = () => {
  return (
    <div style={styles.card}>
      <DateTimeDisplay />
      <h2>Lista de Tarefas</h2>
      {/* Aqui vamos renderizar a lista de tarefas depois */}
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
    color: "#8A2BE2", // Violet color
  },
};

export default MainCard;
