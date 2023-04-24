import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TaskRow = ({ task, toggleTask }) => {
    return (_jsx("tr", { children: _jsxs("td", { className: 'd-flex justify-content-between', children: [task.name, _jsx("input", { type: "checkbox", checked: task.done, onChange: () => {
                        toggleTask(task);
                    } })] }) }));
};
