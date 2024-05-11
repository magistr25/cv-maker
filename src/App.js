import './App.css';
import Form from "./components/Form";
import React from "react";
import DownloadForm from "./components/DownloadForm";
// import Pdf from "./components/Pdf";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PDFDocument from "./components/PDFgeneraton";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/DownloadForm" element={<DownloadForm />} />
                    <Route path="/PDFgeneration" element={<PDFDocument />} />
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
