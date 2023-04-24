import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import { useState, useEffect } from "react";
import { Container } from "./components/Container";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
function App() {
    const [tasksItems, setTaskItems] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    function createTask(taskName) {
        if (!tasksItems.find((task) => task.name === taskName)) {
            setTaskItems([...tasksItems, { name: taskName, done: false }]);
        }
        else {
            alert("The task already exist");
        }
    }
    const toggleTask = (task) => {
        setTaskItems(tasksItems.map((t) => t.name === task.name ? { ...t, done: !t.done } : t));
    };
    useEffect(() => {
        let data = localStorage.getItem("tasks");
        if (data) {
            setTaskItems(JSON.parse(data));
        }
    }, []);
    const cleanTasks = () => {
        setTaskItems(tasksItems.filter((task) => !task.done));
        setShowCompleted(false);
    };
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksItems));
    }, [tasksItems]);
    return (_jsx("main", { className: "bg-dark vh-100 text-white", children: _jsxs(Container, { children: [_jsx(TaskCreator, { createTask: createTask }), _jsx(TaskTable, { tasks: tasksItems, toggleTask: toggleTask }), _jsx(VisibilityControl, { setShowCompleted: (checked) => setShowCompleted(checked), cleanTasks: cleanTasks, isChecked: showCompleted }), showCompleted && (_jsx(TaskTable, { tasks: tasksItems, toggleTask: toggleTask, showCompleted: showCompleted }))] }) }));
}
export default App;
