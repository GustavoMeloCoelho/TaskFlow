import MainContainer from "./components/MainCard";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div style={styles.app}>
      <MainContainer />
      <TaskList />
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#e9ecef",
    padding: "20px",
  },
};

export default App;
