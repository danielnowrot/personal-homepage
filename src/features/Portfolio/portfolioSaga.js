import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepo } from "./getRepo";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./portfolioSlice";

function* fetchPortfolioHandler() {
    try {
        yield delay(1000);
        const repositories = yield call(getRepo);
        yield put(fetchRepositoriesSuccess(repositories));
    }
    catch (error) {
        yield put(fetchRepositoriesError());
        yield call(alert, "Błąd pobierania, spróbuj ponownie później lub sprawdź połączenie z internetem")
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchRepositories.type, fetchPortfolioHandler);
}