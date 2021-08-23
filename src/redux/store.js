import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer }from './root.reducer';
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware =[thunk];
const initialState = {}

const persistConfig = {
    key: "hectaquiz",
    storage: storage
}
const persistentReducer= persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistentReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        process.env.NODE_ENV === "development" &&
        window.__REDUX_DEVTOOLS_EXTENSION_
        ? window.__REDUX_DEVTOOLS_EXTENSION_()
        : (f) =>f
    )
);


export const persistor = persistStore(store)