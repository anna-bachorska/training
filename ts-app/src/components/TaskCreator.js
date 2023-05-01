import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const TaskCreator = ({ createTask }) => {
    const [newTaskName, setNewTaskName] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(newTaskName);
        localStorage.setItem("tasks", newTaskName);
        console.log(`To jest newTaskName ${newTaskName}`)
        console.log(`To jest createTask ${createTask}`)
        setNewTaskName("");
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: 'my-2 row', children: [_jsx("div", { className: 'col-9', children: _jsx("input", { type: "text", value: newTaskName, placeholder: "Enter a new task", onChange: (e) => setNewTaskName(e.target.value), className: 'form-control' }) }), _jsxs("button", { className: 'btn btn-primary btn-sm col-3', children: [_jsx(FontAwesomeIcon, { icon: faPlus }), " Save task"] })] }));
};
