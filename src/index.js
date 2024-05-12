import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./reducers"; // Импортируем хранилище Redux

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// Если вы хотите начать измерение производительности в вашем приложении, передайте функцию
// для записи результатов (например: reportWebVitals(console.log))
// или отправьте их на конечную точку аналитики. Узнайте больше: https://bit.ly/CRA-vitals
reportWebVitals();
