import { jsx as _jsx } from "react/jsx-runtime";
export const Container = ({ children }) => {
    return (_jsx("div", { className: "container p-4", children: _jsx("div", { className: "col-md-4 offset-md-4", children: children }) }));
};
