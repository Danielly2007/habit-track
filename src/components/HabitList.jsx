import { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import HabitItem from "./HabitItem";

const HabitList = () => {
  const { habits } = useContext(HabitContext);
  const [tab, setTab] = useState("all");

  const filteredHabits = habits.filter((habit) => {
    if (tab === "done") return habit.done;
    if (tab === "not_done") return !habit.done;
    return true; // "all"
  });

  return (
    <div>
      {/* Abas de navegação */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => setTab("all")} disabled={tab === "all"}>
          Todos
        </button>
         <button onClick={() => setTab("not_done")} disabled={tab === "not_done"}>
          Há Fazer
        </button>
        <button onClick={() => setTab("done")} disabled={tab === "done"}>
          Concluídos
        </button>
      </div>

      {/* Lista de hábitos filtrada */}
      {filteredHabits.length === 0 ? (
        <p>Nenhum hábito nesta aba.</p>
      ) : (
        <ul>
          {filteredHabits.map((habit) => (
            <HabitItem key={habit.id} habit={habit} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HabitList;
