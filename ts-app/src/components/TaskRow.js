import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TaskRow = ({ task, toggleTask }) => {
    console.log(`To jest TaskRow - task ${task}`)
    console.log(`To jest TaskRow - toggleTask ${toggleTask}`)
    return (_jsx("tr", { children: _jsxs("td", { className: 'd-flex justify-content-between', children: [task.name, _jsx("input", { type: "checkbox", checked: task.done, onChange: () => {
                        toggleTask(task);
                    } })] }) }));
};
