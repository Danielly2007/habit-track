import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

const HabitItem = ({ habit }) => {
  const { toggleHabit } = useContext(HabitContext);

  return (
    <li style={{ textDecoration: habit.done ? "line-through" : "none" }}>
      {habit.title}
      <button onClick={() => toggleHabit(habit.id)}>
        {habit.done ? "Desfazer" : "Concluir"}
      </button>
    </li>
  );
};

export default HabitItem;
