import { configureStore } from '@reduxjs/toolkit'
import SignUpReducer from './Slice'

const persistState =(store) =>{
    return next => action => {
        const result = next(action);
        const data = store.getState().Reducer.users
        localStorage.setItem('StateDB', JSON.stringify(data));
        return result;
    }
}

export const store = configureStore({
    reducer: {
        Reducer: SignUpReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistState)
})