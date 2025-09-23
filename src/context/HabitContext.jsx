// src/context/HabitContext.jsx
import { createContext, useState, useEffect } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  // Carrega do localStorage ao iniciar
  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(storedHabits);
  }, []);

  // Salva no localStorage quando hábitos mudam
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (title) => {
    setHabits([...habits, { id: Date.now(), title, done: false }]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, done: !habit.done } : habit
      )
    );
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
