import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TurfAdminRouter from "./Routes/TurfAdminRouter";
import ClientRouter from "./Routes/ClientRouter";
import AdminRouter from "./Routes/AdminRouter";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/*" element={<ClientRouter />} />
                    <Route path="/turf-admin*" element={<TurfAdminRouter />} />
                    <Route path="/admin*" element={<AdminRouter />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
