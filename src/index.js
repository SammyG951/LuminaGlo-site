import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <div>
        <App />
    </div>
);