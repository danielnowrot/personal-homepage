import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import themeSwitchReducer from "../features/PersonalInfo/themeSwitchSlice";
import portfolioReducer from "../features/Portfolio/portfolioSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        themeSwitch: themeSwitchReducer,
        portfolio: portfolioReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;