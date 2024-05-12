import './App.css';
import Form from "./components/Form";
import React from "react";
import DownloadForm from "./components/DownloadForm";
// import Pdf from "./components/Pdf";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PDFGenerationContainer} from "./components/PDFgenerationContainer";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/DownloadForm" element={<DownloadForm />} />
                    <Route path="/PDFgenerationContainer" element={<PDFGenerationContainer email='qwerty'/>} />
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
