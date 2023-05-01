import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TaskRow } from "./TaskRow";
export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
    const taskTableRows = (doneValue) => {
        console.log(tasks)
        return tasks
            .filter((task) => task.done === doneValue)
            .map((task) => (_jsx(TaskRow, { task: task, toggleTask: toggleTask }, task.name)));
    };
    return (_jsxs("table", { className: "table table-dark table-striped table-bordered border-secondary", children: [_jsx("thead", { children: _jsx("tr", { className: "table-primary", children: _jsx("th", { children: "Tasks" }) }) }), _jsx("tbody", { children: taskTableRows(showCompleted) })] }));
};
