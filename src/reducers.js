import { createStore, combineReducers } from 'redux';
import emailReducer from './emailReducer'; // Импортируем редюсер emailReducer

// Комбинируем все редюсеры
const rootReducer = combineReducers({
    email: emailReducer
    // Добавьте другие редюсеры, если они есть
});

// Создаем хранилище Redux
const store = createStore(rootReducer);

export default store; // Экспортируем хранилище Redux
