import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const VisibilityControl = ({ setShowCompleted, cleanTasks, isChecked }) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete it?')) {
            cleanTasks();
        }
    };
    return (_jsxs("div", { className: "d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary", children: [_jsxs("div", { className: "form-check form-switch", children: [_jsx("input", { className: "form-check-input", type: "checkbox", checked: isChecked, onChange: (e) => setShowCompleted(e.target.checked) }), "", _jsx("label", { children: "Show tasks done" })] }), _jsx("button", { onClick: handleDelete, className: "btn btn-danger btn-sm", children: "Clear" })] }));
};
