import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import HabitItem from "./HabitItem";

const HabitList = () => {
  const { habits } = useContext(HabitContext);

  if (habits.length === 0) return <p>Nenhum hábito ainda.</p>;

  return (
    <ul>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </ul>
  );
};

export default HabitList;
