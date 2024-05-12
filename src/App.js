import './App.css';
import Form from "./components/Form";
import React from "react";
import DownloadForm from "./components/DownloadForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PDFGenerationContainer} from "./components/PDFgenerationContainer";
import {useSelector} from "react-redux";


function App() {

    const email = useSelector(state => state.email);

    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/DownloadForm" element={<DownloadForm />} />
                    <Route path="/PDFgenerationContainer" element={<PDFGenerationContainer email={email}/>} />
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
