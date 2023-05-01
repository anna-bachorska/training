import "./App.css";
import { useState, useEffect } from "react";
import {Container} from "./components/Container";
import {TaskCreator} from "./components/TaskCreator";
import {TaskTable} from "./components/TaskTable";
import {VisibilityControl} from "./components/VisibilityControl";

export type TaskType = {
  name: string,
  done: boolean
}

function App() {
  const [tasksItems, setTaskItems] = useState<TaskType[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createTask(taskName: string) {
    if (!tasksItems.find((task: TaskType) => task.name === taskName)) {
      setTaskItems([...tasksItems as TaskType[], { name: taskName, done: false }]);
    } else {
      alert("The task already exist");
    }
  }

  const toggleTask = (task:TaskType) => {
    setTaskItems(
      tasksItems.map((t:TaskType) =>
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
    setTaskItems(tasksItems.filter((task:TaskType) => !task.done));
    setShowCompleted(false);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createTask={createTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
        <VisibilityControl
            setShowCompleted={(checked: boolean) => setShowCompleted(checked)}
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
