import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { HabitProvider } from "./context/HabitContext";

const App = () => {
  return (
    <HabitProvider>
      <div>
        <h1>HabitTrack – Meus Hábitos Diários</h1>
        <HabitForm />
        <HabitList />
      </div>
    </HabitProvider>
  );
};

export default App;
