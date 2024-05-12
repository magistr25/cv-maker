
// Начальное состояние для поля email
const initialState = {
    email: ''
};

// Редюсер для управления состоянием email
const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload
            };
        default:
            return state;
    }
};

export default emailReducer; // Экспортируем редюсер
