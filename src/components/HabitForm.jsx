import { useState, useContext } from "react";
import { HabitContext } from "../context/HabitContext";

const HabitForm = () => {
  const [title, setTitle] = useState("");
  const { addHabit } = useContext(HabitContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addHabit(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form-inline">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Novo hábito"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default HabitForm;
