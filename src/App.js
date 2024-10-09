import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import MasterLayout from './Layouts';

function App() {
    return (
        <MasterLayout>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </MasterLayout>
    );
}

export default App;
