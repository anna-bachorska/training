import "./App.css";
import { useState, useEffect } from "react";
import {Container} from "./components/Container";
import {TaskCreator} from "./components/TaskCreator";
import {TaskTable} from "./components/TaskTable";
import {VisibilityControl} from "./components/VisibilityControl";

function App() {
  const [tasksItems, setTaskItems] = useState<any>([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createTask(taskName: any) {
    if (!tasksItems.find((task: any) => task.name === taskName)) {
      setTaskItems([...tasksItems as any, { name: taskName, done: false }]);
    } else {
      alert("The task already exist");
    }
  }

  const toggleTask = (task:any) => {
    setTaskItems(
      tasksItems.map((t:any) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems(tasksItems.filter((task:any) => !task.done));
    setShowCompleted(false);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createTask={createTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
            setShowCompleted={(checked: any) => setShowCompleted(checked)}
            cleanTasks={cleanTasks}
            isChecked={showCompleted}
        />

        {showCompleted && (
            <TaskTable
                tasks={tasksItems}
                toggleTask={toggleTask}
                showCompleted={showCompleted}
            />
        )}
      </Container>
    </main>
  );
}

export default App;
