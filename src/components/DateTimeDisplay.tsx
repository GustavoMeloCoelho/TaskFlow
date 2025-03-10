import { useState, useEffect } from "react";

const DateDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar
  }, []);

  // Obtendo o nome do dia da semana em português
  const dayOfWeek = currentTime.toLocaleDateString("pt-BR", { weekday: "long" });
  const formattedDate = currentTime.toLocaleDateString("pt-BR");
  const formattedTime = currentTime.toLocaleTimeString("pt-BR");

  return (
    <div>
      <h2 style={{ textTransform: "capitalize" }}>{dayOfWeek}</h2>
      <h3>{formattedDate}</h3>
      <h3>{formattedTime}</h3>
    </div>
  );
};

export default DateDisplay;
