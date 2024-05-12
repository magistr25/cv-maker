import './App.css';
import Form from "./components/Form";
import React from "react";
import DownloadForm from "./components/DownloadForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PDFGenerationContainer} from "./components/PDFgenerationContainer";


function App() {

    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/DownloadForm" element={<DownloadForm />} />
                    <Route path="/PDFgenerationContainer" element={<PDFGenerationContainer />} />
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
