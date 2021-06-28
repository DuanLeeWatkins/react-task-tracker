import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Jun 28th at 6:39pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Go grocery shopping",
      day: "Jun 29th at 12:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Hangout with friends",
      day: "Jun 30th at 6:39pm",
      reminder: true,
    },
  ]);
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
